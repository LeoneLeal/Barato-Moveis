import React, { useState, useEffect } from "react";
import '../css/Cadastrar.css';

function FormCadastro() {
    // Estado para armazenar os valores do formulário
    const [formValores, setFormValores] = useState({
        nome: "",
        preco: "",
        qtd: "",
        descricao: "",
        categoria: "",
        codigo:"",

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

    // Função para lidar com o envio do formulário
    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            // Exibe os dados a serem enviados no console
            console.log("DADOS A SEREM ENVIADOS:", formValores);
            // Faz uma requisição POST para cadastrar um munícipe
            const response = await fetch('http://localhost:3000/movel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, atualiza o estado para indicar que foi submetido
                setIsSubmitted(true);
            } else {
                // Se houver erro na requisição, exibe o status do erro no console
                alert("Codigo de Movel informado ja foi cadastrado ");                
            }
            const json = await response.json();
            console.log(response)
            console.log(json);
        } catch (err) {
            // Se houver erro na requisição, exibe o erro no console
            console.error("CODIGO DO MÓVEL JA FOI CADASTRADO!", err);
        }
    };

    // Efeito que é executado quando o formulário é submetido
    useEffect(() => {
        if (isSubmitted) {
            // Se o formulário foi submetido com sucesso, exibe um alerta
            alert("Movel cadastrado com sucesso!");
            // Limpa o formulário e reseta o estado de submissão
            setFormValores({
                nome: "",
                preco: "",
                qtd: "",
                descricao: "",
                categoria: "",
                codigo:"",
            });
            setIsSubmitted(false);
        }
    }, [isSubmitted]);

    // Renderiza o componente de cadastro
    return (
        <form onSubmit={handleCadastro}>
            <center>
                <div className="App">
                    <div>
                        <label> NOME DO MÓVEL: </label>
                        <input type="text" name="nome" value={formValores.nome} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> PREÇO DO MÓVEL: </label>
                        <input type="number" name="preco" value={formValores.preco} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> QUANTIDADE EM ESTOQUE: </label>
                        <input type="number" name="qtd" value={formValores.qtd} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> CODIGO DO MÓVEL: </label>
                        <input type="number" name="codigo" value={formValores.codigo} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> DESCRIÇÃO DO MÓVEL: </label>
                        <input type="text" name="descricao" value={formValores.descricao} onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                        <label> CATEGORIA DO MÓVEL: </label>
                        <select name="categoria" value={formValores.categoria} onChange={handleChange} required>
                        <option value="" >Selecione a Categoria</option >
                            <option value="salas_de_estar">Salas de Estar</option>
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
                    <button type="submit"> CADASTRAR MÓVEL </button>
                </div>
            </center>
        </form>
    );
}

export default FormCadastro;