// backend/controllers/alunoController.js
const Aluno = require('../models/Aluno');

const registerAluno = async (req, res) => {
    const { nome, sobrenome, email, grupo, dataNascimento, genero, telefone, professorId } = req.body;
    
    console.log('Recebido:', req.body);

    try {
        const alunoExistente = await Aluno.findOne({ email });

        if (alunoExistente) {
            console.log('Aluno já cadastrado com este email');
            return res.status(400).json({ message: 'Aluno já cadastrado com este email' });
        }

        const aluno = new Aluno({
            nome,
            sobrenome,
            email,
            grupo,
            dataNascimento,
            genero,
            telefone,
            professorId
        });

        const alunoCadastrado = await aluno.save();
        console.log('Aluno cadastrado:', alunoCadastrado);
        res.status(201).json(alunoCadastrado);
    } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
        res.status(500).json({ message: 'Erro ao cadastrar aluno', error: error.message });
    }
};

const getAlunosByProfessorId = async (req, res) => {
    const { professorId } = req.params;

    try {
        const alunos = await Aluno.find({ professorId });
        console.log(alunos);
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar alunos', error: error.message });
    }
};

module.exports = {
    registerAluno,
    getAlunosByProfessorId
};
