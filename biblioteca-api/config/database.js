//importa a biblioteca mongoose para modular para a interação com o MangoDB em Node.js
const mongoose = require('mongoose');
// importa a biblioteca dotenv, importante para manter informações sensíveis fora do código fonte
require('dotenv').config();

// estabelece uma conexão com o baco de dados
mongoose.connect(process.env.DATABASE_URL)
// se a conexão for bem sucedida, o código .then será executado com uma mensagem
.then(() => console.log('Conectado ao MongoDB'))
// se ocorrer erro de conexão, o código .catch será executado com uma mensagem para ajudar a encontrar o erro
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

// permite ele ser usado em outros módulos, quase sempre usado
module.exports = mongoose;
