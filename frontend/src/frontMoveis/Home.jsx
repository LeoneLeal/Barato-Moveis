import React, { useState } from "react"; // Importa o React e a função useState
import '../css/Home.css'; // Importa o arquivo CSS para estilização
import Cadastrar from './Cadastrar'; // Importa o componente de cadastro
import Atualizar from './Atualizar'; // Importa o componente de atualização
import Consultar from './Consultar'; // Importa o componente de consulta
import Deletar from './Deletar'; // Importa o componente de exclusão

function Menu() {
    // Define o estado local para controlar a página atual
    const [pagina, setPagina] = useState("menu");

    // Função para lidar com o clique no botão de voltar
    const handleVoltarClick = () => {
        setPagina("menu"); // Volta para a página do menu principal
    };

    return (
        <div className="front">
            <center>
                <br />
                <br />
                <img src="baixados.png" alt="logo.jpg" className="img" />
                <br />
                <br />
                <br />
                {pagina === "menu" ? (
                    <div>
                        <button onClick={() => setPagina("cadastro")}>CADASTRAR MÓVEL</button><br />
                        <br />
                        <button onClick={() => setPagina("atualizar")}>ATUALIZAR MÓVEL</button><br />
                        <br />
                        <button onClick={() => setPagina("consultar")}>CONSULTAR MÓVEL</button><br />
                        <br />
                        <button onClick={() => setPagina("deletar")}>DELETAR MÓVEL</button><br />
                        <br />
                    </div>
                ) : pagina === "cadastro" ? (
                    <div>
                        <Cadastrar />
                        <br />
                        <button onClick={handleVoltarClick}>VOLTAR</button>
                    </div>
                ) : pagina === "atualizar" ? (
                    <div>
                        <Atualizar />
                        <br />
                        <button onClick={handleVoltarClick}>VOLTAR</button>
                    </div>
                ) : pagina === "consultar" ? (
                    <div>
                        <Consultar />
                        <br />
                        <button onClick={handleVoltarClick}>VOLTAR</button>
                    </div>
                ) : (
                    <div>
                        <Deletar />
                        <br />
                        <button onClick={handleVoltarClick}>VOLTAR</button>
                    </div>
                )}
            </center>
        </div>
    );
}

export default Menu;
