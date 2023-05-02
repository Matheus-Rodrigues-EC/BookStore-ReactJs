import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Bookshelf() {
    return (
        <Container>
            <Searchbar type="text" placeholder="Pesquisar" />
            <ContainerBooks>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Book to= "/livro">
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
            </ContainerBooks>
            <Buttons>
                <Finish to="/confirmar"><button >Finalizar Compra</button></Finish>
                <button>Adicionar ao Carrinho</button>
            </Buttons>
        </Container>
    )
}
const Container = styled.div`
    background-color: #006400;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px;
`
const Finish = styled(Link)`
    text-decoration: none;
`
const ContainerBooks = styled.div`
    width: 90%;
    height: 450px;
    padding: 10px 10px;
    margin: 10px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
    
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
  }
`
const Book = styled(Link)`
    width: 300px;
    height: 200px;
    flex-wrap: wrap;
    border-radius: 8px;
    padding: 5px;
    margin: 10px 10px;
    background-color: #800000;
    color: white;
    text-decoration: none;
    p{
        margin: 8px;
    }
    span{
        font-weight: bold;
    }
`
const Buttons = styled.div`
    background-color: #006400;
    position: fixed;
    bottom: 30px;
    display: flex;
    justify-content: center;
    width: 96.3%;
    
    button{
        width: 200px;
        height: 50px;
        font-size: 18px;
        background-color: #228B22;
        border: solid #800000 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px 25px;
        color: white;
        border-radius: 25px;
    }
    
`
const Searchbar = styled.input`
    outline: none;
    border-radius: 5px;
    border: solid #800000 3px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    padding: 8px;
`