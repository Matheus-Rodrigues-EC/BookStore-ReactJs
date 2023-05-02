import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Finish() {
    return (
        <Container>
            <TopBar>Você escolheu os seguintes livros...</TopBar>
            <Books>
                <Book>
                    <p><span>Titulo: </span>Testando um título bem longo pra ver</p>
                    <p><span>Autor:</span></p>
                    <p><span>Gênero:</span></p>
                    <p><span>Descrição:</span></p>
                    <p><span>Preço:</span></p>
                </Book>
                <Finalprice>
                    <p>Total da Compra: R$150,00</p>
                </Finalprice>
            </Books>
            <Buttons>
                <Finishbutton to="/estante"><button >Voltar ao Inicio</button></Finishbutton>
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
    height: 600px;
    width: 100%;
`
const TopBar = styled.div`
    background-color: #008000;
    width: 100%;
    height: 70px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const Books = styled.div`
    background-color: blanchedalmond;
    width: 100%;
    /* height: 600px; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
`
const Book = styled.div`
    background-color: #800000;
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    margin: 10px 0 10px 0;
    height: 100px;

`
const Finalprice = styled.div`
    background-color: #800000;
    /* background-color: red; */
    position: fixed;
    bottom: 60px;
    display: flex;
    justify-content: center;
    height: 30px;
    border-radius: 8px;
    padding: 3px;
    p{
        font-size: 25px;
        font-weight: 700;
    }
`
const Buttons = styled.div`
    background-color: #006400;
    position: fixed;
    bottom: 0px;
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
const Finishbutton = styled(Link)`
    text-decoration: none;
`