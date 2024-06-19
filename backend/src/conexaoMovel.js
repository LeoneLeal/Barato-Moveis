import mysql from 'mysql';

// Cria uma conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Endereço do servidor MySQL
    user: 'root',      // Nome de usuário do banco de dados
    password: 'password', // Senha do banco de dados
    database: 'moveis'   // Nome do banco de dados
});

// Estabelece a conexão com o banco de dados
connection.connect((err) => {
    if (err) {
        // Se ocorrer um erro durante a conexão, exibe o erro no console e encerra a execução
        console.error('Erro ao conectar:', err);
        throw err;
    }
    // Se a conexão for bem-sucedida, exibe uma mensagem de confirmação no console
    console.log('Conectado ao banco de dados!!!');
});

// Exporta a conexão para ser utilizada em outros arquivos
export default connection;
