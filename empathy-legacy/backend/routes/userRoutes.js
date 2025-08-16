const express = require('express');
const router = express.Router();

// Importa o controller de usuários
const userController = require('../controllers/userController');

// Rota GET para listar todos os usuários
router.get('/', userController.listarUsuarios);

// --- NOVA ROTA ABAIXO ---

// Rota POST para criar um novo usuário
router.post('/', userController.criarUsuario);

module.exports = router;