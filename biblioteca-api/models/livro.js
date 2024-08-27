// usado para interagir com o banco
const mongoose = require('mongoose');


const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: false
    }
});

// Modelo está sendo exportado para ser usado em outras partes da aplicação
module.exports = mongoose.model('Livro', LivroSchema);
