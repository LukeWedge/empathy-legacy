const db = require('../config/db');

// ... a função listarUsuarios continua a mesma ...
const listarUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id_usuario, nome, email, tipo_usuario FROM Usuarios');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// --- FUNÇÃO DE CRIAR USUÁRIO ATUALIZADA ---
const criarUsuario = async (req, res) => {
  const { nome, email, senha_hash, tipo_usuario, ...detalhes } = req.body;
  // 'detalhes' vai conter o resto: cpf, data_nascimento, cnpj, etc.

  // Validação básica
  if (!nome || !email || !senha_hash || !tipo_usuario) {
    return res.status(400).json({ error: 'Campos principais são obrigatórios' });
  }

  // Inicia a conexão para a transação
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction(); // Inicia a transação

    // --- 1. Inserir na tabela principal `Usuarios` ---
    const queryUsuario = 'INSERT INTO Usuarios (nome, email, senha_hash, tipo_usuario, status) VALUES (?, ?, ?, ?, ?)';
    const valuesUsuario = [nome, email, senha_hash, tipo_usuario, 'ATIVO'];
    const [resultUsuario] = await connection.query(queryUsuario, valuesUsuario);
    const novoUserId = resultUsuario.insertId;

    // --- 2. Inserir na tabela específica (Voluntario ou ONG) ---
    if (tipo_usuario === 'VOLUNTARIO') {
      const { cpf, data_nascimento } = detalhes;
      if (!cpf || !data_nascimento) throw new Error('CPF e Data de Nascimento são obrigatórios para voluntários');

      const queryVoluntario = 'INSERT INTO Voluntarios (id_usuario, cpf, data_nascimento) VALUES (?, ?, ?)';
      await connection.query(queryVoluntario, [novoUserId, cpf, data_nascimento]);

    } else if (tipo_usuario === 'ONG') {
      const { cnpj } = detalhes;
      if (!cnpj) throw new Error('CNPJ é obrigatório para ONGs');

      const queryOng = 'INSERT INTO ONGs (id_usuario, cnpj, descricao, telefone_contato) VALUES (?, ?, ?, ?)';
      await connection.query(queryOng, [novoUserId, cnpj, detalhes.descricao, detalhes.telefone_contato]);

    } else {
      // Se o tipo_usuario não for válido, joga um erro para acionar o rollback
      throw new Error('Tipo de usuário inválido.');
    }

    // --- 3. Se tudo deu certo, confirma a transação ---
    await connection.commit();
    res.status(201).json({ message: 'Usuário criado com sucesso!', userId: novoUserId });

  } catch (error) {
    // --- 4. Se algo deu errado, desfaz tudo ---
    if (connection) await connection.rollback();

    console.error('Erro ao criar usuário:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Este e-mail, CPF ou CNPJ já está cadastrado.' });
    }
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });

  } finally {
    // --- 5. Libera a conexão de volta para o pool ---
    if (connection) connection.release();
  }
};

// Exporta as funções
module.exports = {
  listarUsuarios,
  criarUsuario
};