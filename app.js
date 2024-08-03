const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const alunoRoutes = require('./routes/alunoRoutes');

const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/api/users', userRoutes);
app.use('/api/alunos', alunoRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
