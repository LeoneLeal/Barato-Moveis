import cors from 'cors';
import express from 'express';

// Importa as funções do controlador municipeController
import { getAllMovel, createMovel, updateMovel, deleteMovel } from "./movelController.js";

// Cria uma instância da aplicação Express
const app = express();

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define uma rota GET para obter todos os "munícipes"
app.get('/movel', getAllMovel);

// Define uma rota POST para criar um novo "munícipe"
app.post('/movel', createMovel);

// Define uma rota PUT para atualizar um "munícipe" existente, identificado pelo ID na URL
app.put('/movel/:id', updateMovel);

// Define uma rota DELETE para excluir um "munícipe" existente, identificado pelo ID na URL
app.delete('/movel/:id', deleteMovel );

// Inicia o servidor na porta 3000 e exibe uma mensagem de confirmação no console
app.listen(3000, () => {
    console.log('Servidor rodando sucesso 3000');
});
