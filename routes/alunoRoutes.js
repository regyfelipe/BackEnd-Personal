// backend/routes/alunoRoutes.js
const express = require('express');
const router = express.Router();
const { registerAluno, getAlunosByProfessorId } = require('../controllers/alunoController');

router.post('/', registerAluno);

router.get('/:professorId', getAlunosByProfessorId);

module.exports = router;
