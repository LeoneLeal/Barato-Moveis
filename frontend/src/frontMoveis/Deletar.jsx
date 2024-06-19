import React, { useState, useEffect } from "react";
import '../css/Deletar.css';

function DeletarMoveis() {
    // Estado para armazenar o ID do munícipe a ser excluído
    const [id, setId] = useState("");
    // Estado para controlar se o munícipe foi excluído com sucesso
    const [isDeleted, setIsDeleted] = useState(false);

    // Função para lidar com a mudança no campo de ID
    const handleChange = (e) => {
        setId(e.target.value);
    };

    // Função para lidar com a exclusão do munícipe
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            // Faz uma requisição DELETE para excluir o munícipe com o ID fornecido
            const response = await fetch(`http://localhost:3000/movel/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                // Se a requisição for bem-sucedida, atualiza o estado para indicar que foi excluído
                setIsDeleted(true);
            } else {
                // Se houver erro na requisição, exibe um alerta
                alert("Erro ao excluir movel");
            }
        } catch (err) {
            // Se houver erro na requisição, exibe o erro no console
            console.error("Erro ao excluir", err);
        }
    };

    // Efeito que é executado quando o munícipe é excluído com sucesso
    useEffect(() => {
        if (isDeleted) {
            // Se o munícipe foi excluído com sucesso, exibe um alerta, limpa o campo de ID e reseta o estado de exclusão
            alert("Movel excluído com sucesso");
            setId("");
            setIsDeleted(false);
        }
    }, [isDeleted]);

    // Renderiza o componente de exclusão de munícipes
    return (
        <div className="App">
            <header>DELETAR MÓVEL</header>
            <form onSubmit={handleDelete}>
                {/* Campo para inserir o ID do munícipe a ser excluído */}
                <label>ID do Móvel: </label>
                <input type="number" value={id} onChange={handleChange} required />
                {/* Botão para deletar o munícipe */}
                <button type="submit">DELETAR MÓVEL </button>
            </form>
        </div>
    );
}

export default DeletarMoveis;
