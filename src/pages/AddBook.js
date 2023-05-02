import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {

    const Navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [imagem, setImagem] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [resumo, setResumo] = useState("");
    const [capa, setCapa] = useState("");
    const [paginas, setPaginas] = useState(0);
    const [valor, setValor] = useState(0);

    function addBook(e){
        e.preventDefault();

        if(!titulo) return alert("O Título do livro é Obrigatório");
        if(!imagem) return alert("A imagem de Capa do Livro é Obrigatória");
        if(!autor) return alert("O Autor do Livro é Obrigatório");
        if(!genero) return alert("O Gênero do Livro é Obrigatório");
        if(!valor) return alert("O Preço do livro é Obrigatório");


        const body = {
            titulo: titulo,
            imagem: imagem,
            autor: autor,
            genero: genero,
            resumo: resumo,
            capa: capa,
            paginas: paginas,
            valor: valor
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/livros`, body)
            .then((res) => {
                alert("Livro adicionado a sua Loja!!!");
                Navigate("/minha-loja");
            })
            .catch((error) => {alert(error.message)})
    }


    return (
        <Container>
            <Title>Ebaaa... Novo Livro!</Title>
            <form action="" formnovalidate >
                <Input 
                    placeholder="Titulo..." 
                    type="text" 
                    value={titulo} 
                    onChange={(e) => {setTitulo(e.target.value);}} 
                    autoFocus
                    required
                />
                <Input 
                    placeholder="Link para imagem da Capa..." 
                    type="url" 
                    value={imagem} 
                    onChange={(e) => {setImagem(e.target.value);}} 
                    required
                />
                <Input 
                    placeholder="Autor..." 
                    type="text" 
                    value={autor} 
                    onChange={(e) => {setAutor(e.target.value);}} 
                    required
                />
                <Input 
                    placeholder="Gênero..." 
                    type="text" 
                    value={genero} 
                    onChange={(e) => {setGenero(e.target.value);}} 
                    required
                />
                <Input 
                    placeholder="Resumo..." 
                    type="textArea" 
                    value={resumo} 
                    onChange={(e) => {setResumo(e.target.value);}} 
                    required
                />
                <Input 
                    placeholder="Tipo de Capa..." 
                    type="text" 
                    value={capa} 
                    onChange={(e) => {setCapa(e.target.value);}} 
                    required
                />
                <Input 
                    placeholder="Quantidade de Páginas..." 
                    type="number" 
                    value={paginas} 
                    onChange={(e) => {setPaginas(e.target.value);}} 
                    required
                />
                <Input 
                    placeholder="Preço..." 
                    type="number" 
                    value={valor} 
                    onChange={(e) => {setValor(e.target.value);}} 
                    required
                />
                <Button type="submit" onClick={(e) => {addBook(e)}}>Salvar</Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 75px auto 0 auto;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    border: 3px solid #800000;
    background-color: #FFFFFF;
    border-radius: 15px;
    form{
        display: flex;
        flex-direction: column;
    }
`

const Title = styled.h1`
    display: flex;
    margin: auto;
    color: #860000;
    font-size: 2.5rem;
    font-family: 'Lobster', cursive;
    font-weight: 400;
`

const Input = styled.input`
    width: 80%;
    height: 30px;
    border: 1.5px solid #860000;
    border-radius: 15px;
    margin: 7.5px auto;
    padding: 0 10px;
    font-size: 20px;
`

const Button =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    border-radius: 25px;
    background-color: #008800;
    color: #FFFFFF;
    min-width: 25%;
    max-width: 75%;
    height: 40px;
    font-family: 'Goudy Bookletter 1911', serif;
    font-size: 25px;
    font-weight: 500;
    box-shadow: 0 5px 15px #003600;
`