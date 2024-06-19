import connection from './conexaoMovel.js'; // Importa a conexão com o banco de dados

// Função para ler todos os registros de munícipes
export function read(callback) {
    connection.query('SELECT * FROM moveis WHERE ativo = 1', callback);
}

// Função para criar um novo munícipe no banco de dados
export function create(nome, preco, qtd, descricao, categoria, codigo, callback) {
    // Executa uma query SQL para verificar se o código já existe na tabela
    connection.query('SELECT codigo FROM moveis WHERE codigo = ?', [codigo], (error, results) => {
        if (error) {
            callback(error);
        } else if (results.length > 0) {
            callback(new Error('Código do móvel informado já cadastrado!'));
        } else {

            // Se o código não existe, executa a query para inserir o novo registro
            connection.query(
                'INSERT INTO moveis (nome, preco, qtd, descricao, categoria, codigo, ativo) VALUES (?, ?, ?, ?, ?, ?, 1)',
                [nome, preco, qtd, descricao, categoria, codigo],
                callback
            );
        }
    });
}


// Função para atualizar os dados de um munícipe existente no banco de dados
export function update(id, novosDados, callback) {
    const { nome, preco, qtd, descricao, categoria, codigo, ativo } = novosDados;
    // Executa uma query SQL para atualizar os dados do munícipe com o ID fornecido
    connection.query(
        'UPDATE moveis SET nome = ?, preco = ?, qtd = ?, descricao = ?, categoria = ?, codigo = ?, ativo = ?  WHERE idmoveis = ?',
        [nome, preco, qtd, descricao, categoria, codigo, ativo, id],
        callback
    );
}

// Função para excluir um munícipe do banco de dados
export function deletePes(id, callback) {
    // Executa uma query SQL para excluir o registro do munícipe com o ID fornecido
    connection.query('UPDATE moveis SET ativo = 0 WHERE idmoveis = ?', [id], callback);
}
