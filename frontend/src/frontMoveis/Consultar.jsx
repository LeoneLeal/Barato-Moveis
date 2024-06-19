import React, { useState, useEffect } from "react";
import '../css/Consultar.css';

function ConsultarMoveis() {
    // Estado para armazenar os munícipes consultados
    const [movel, setMovel] = useState([]);

    // Efeito para carregar os munícipes ao montar o componente
    useEffect(() => {
        const fetchMovel = async () => {
            try {
                // Realiza uma requisição GET para obter os munícipes
                const response = await fetch('http://localhost:3000/movel');
                // Converte a resposta para JSON
                const json = await response.json();
                console.log('Dados recebidos:', json); // Adicionando log
                // Atualiza o estado com os munícipes recebidos
                setMovel(json);
            } catch (err) {
                // Em caso de erro, exibe o erro no console
                console.error("ERRO AO CONSULTAR", err);
            }
        };

        // Chama a função para buscar os munícipes
        fetchMovel();
    }, []); // O array vazio indica que este efeito será executado apenas uma vez, ao montar o componente

    // Renderiza o componente de consulta de moveis
    return (
        <div className="App">
            <center>
                <header>CONSULTAR MÓVEL</header>
                <ul>
                    {/* Mapeia os moveis e renderiza um item de lista para cada um */}
                    {movel.map((movel) => (
                        <li key={movel.id}>
                            {/* Exibe os detalhes do munícipe */}
                            ID: {movel.idmoveis} - Codigo: {movel.codigo} -Nome: {movel.nome} -  Preco: {movel.preco} - Quantidade: {movel.qtd} - Descricao: {movel.descricao} - Categoria: {movel.categoria}
                        </li>
                    ))}
                </ul>
            </center>
        </div>
    );
}

export default ConsultarMoveis;