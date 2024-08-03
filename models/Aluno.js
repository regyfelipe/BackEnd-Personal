// models/Aluno.js

const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    grupo: {
        type: String,
    },
    dataNascimento: {
        type: Date,
    },
    genero: {
        type: String,
    },
    telefone: {
        type: String,
    },
    professorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
