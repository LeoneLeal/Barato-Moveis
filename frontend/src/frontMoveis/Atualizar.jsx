import React, { useState, useEffect } from "react";
import '../css/Atualizar.css';

function AtualizarMovel() {
    // Estado para armazenar os valores do formulário
    const [formValores, setFormValores] = useState({
        id: "",
        nome: "",
        preco: "",
        qtd: "",
        descricao: "",
        categoria: "",
        codigo: "",
        ativo: "",
    });

    // Estado para controlar se o formulário foi submetido
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Atualiza o estado com os novos valores
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com a atualização do munícipe
    const handleAtualizar = async (e) => {
        e.preventDefault();
        try {
            // Faz uma requisição PUT para atualizar o munícipe com o ID fornecido
            const response = await fetch(`http://localhost:3000/movel/${formValores.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });
            if (response.ok) {
                // Se a requisição for bem-sucedida, atualiza o estado para indicar que foi submetido
                setIsSubmitted(true);
            } else {
                // Se houver erro na requisição, exibe um alerta
                alert("Erro atualizar o movel");
            }
        } catch (err) {
            // Se houver erro na requisição, exibe o erro no console
            console.error("ERRO AO ATUALIZAR", err);
        }
    };

    // Efeito que é executado quando o formulário é submetido
    useEffect(() => {
        if (isSubmitted) {
            // Se o formulário foi submetido com sucesso, exibe um alerta
            alert("Movel atualizado com sucesso!");
            // Limpa o formulário e reseta o estado de submissão
            setFormValores({
                id: "",
                nome: "",
                preco: "",
                qtd: "",
                descricao: "",
                categoria: "",
                codigo: "",
                ativo: "",
            });
            setIsSubmitted(false);
        }
    }, [isSubmitted]);

    // Renderiza o componente de atualização do munícipe
    return (
        <form onSubmit={handleAtualizar}>
            <center>
                <div className="App">
                    <br />
                    <header>ATUALIZAR MOVEL</header><br />
                    <br />
                    <div>
                        <label>ID: </label>
                        <input type="number" name="id" value={formValores.id} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> CODIGO DO MÓVEL: </label>
                        <input type="number" name="codigo" value={formValores.codigo} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> NOME DO MOVEL: </label>
                        <input type="text" name="nome" value={formValores.nome} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> PREÇO DO MOVEL: </label>
                        <input type="number" name="preco" value={formValores.preco} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> QUANTIDADE EM ESTOQUE: </label>
                        <input type="number" name="qtd" value={formValores.qtd} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> DESCRIÇÃO DO MOVEL: </label>
                        <input type="text" name="descricao" value={formValores.descricao} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> CATEGORIA: </label>
                        <select name="categoria" value={formValores.categoria} onChange={handleChange} required>
                            <option value="" >Selecione a Categoria</option >
                            <option value="salas_de_estar" >Salas de Estar</option >
                            <option value="salas_de_jantar">Salas de Jantar</option>
                            <option value="quartos">Quartos</option>
                            <option value="cozinhas">Cozinhas</option>
                            <option value="banheiros">Banheiros</option>
                            <option value="escritorios">Escritórios</option>
                            <option value="areas_externas">Áreas Externas</option>
                            <option value="infantis">Infantis</option>
                            <option value="decoracao">Decoração</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label> ATIVO: </label>
                        <input type="number" name="ativo" value={formValores.ativo} onChange={handleChange} placeholder="0 deleta ou 1 mantem" required />
                    </div>
                    <br />
                    <button type="submit">ATUALIZAR MOVEL</button>
                </div>
            </center>
        </form>
    );
}

export default AtualizarMovel;
