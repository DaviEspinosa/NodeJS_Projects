const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');


// Definindo as rotas e associando aos métodos do controller
router.post('/', livrosController.criarLivro);            // Criar um novo livro
router.get('/', livrosController.listarLivros);           // Listar todos os livros
router.get('/:id', livrosController.buscarLivroPorId);    // Buscar um livro por ID
router.patch('/:id', livrosController.atualizarLivro);    // Atualizar um livro por ID
router.delete('/:id', livrosController.deletarLivro);     // Deletar um livro por ID


module.exports = router;
