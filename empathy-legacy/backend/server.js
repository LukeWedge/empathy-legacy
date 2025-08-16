const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importa o arquivo de rotas de usuário
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rota de teste principal
app.get('/', (req, res) => {
  res.json({ message: 'API do Legado da Empatia está funcionando!' });
});

// Usa as rotas de usuário para qualquer requisição que comece com /api/usuarios
app.use('/api/usuarios', userRoutes);
// Futuramente, você adicionará outras rotas aqui:
// app.use('/api/campanhas', campaignRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});