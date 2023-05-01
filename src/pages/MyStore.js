import axios from "axios";
import styled from "styled-components";
// import { BiExit } from 'react-icons/bi';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyStore() {

    const userId = "06021998"
    const Navigate = useNavigate();
    const [seller, setSeller] = useState();
    const [books, setBooks] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/minha-loja`, userId)
            .then((res) => {
                setSeller(res.data.user);
                setBooks(res.data.allBooks);
            })
            .catch((error) => {
                alert(error.message);
            })
    }, [seller, books])

    function deleteBook(id, titulo){
        confirmAlert({
            title: 'Confirmar exclusão',
            message: `Deseja excluir o livro ${titulo}`,
            buttons: [
                {
                    label: 'Excluir',
                    onClick: () => {
                        axios.delete(`${process.env.REACT_APP_BASE_URL}/minha-loja`, 
                        {
                            headers: {
                                'ID': `${id}`
                            }
                        })
                            .then((res) => {alert("Livro Excluido com sucesso.")})
                            .catch((error) => {alert(error.message)})
                    }
                },
                {
                    label: 'Cancelar',
                    onClick: () => { alert("Operação cancelada") }
                }
            ]
        });
    }


    return (
        <Container>
            <Seller>
                {/* <h1>Bem vindo, {seller.name}</h1> */}
            </Seller>
            <MyBooks>
            {books !== undefined ? (
                    <>
                        <ul>
                            {books.map((book) => {
                                return(
                                    <li key={book._id}>
                                        <Infos>
                                            <img src={book.imagem} alt="Imagem de Capa do Livro"/>
                                            <h3>{book.titulo}</h3>
                                            <p> 
                                                <span>{book.autor} </span> 
                                                <span>R$ {Number(book.valor).toFixed(2)} </span>
                                            </p>
                                        </Infos>

                                        <Buttons>
                                            <ButtonEdit onClick={() => Navigate("/editar")}>Editar</ButtonEdit>
                                            <ButtonDelete onClick={() => deleteBook(book._id, book.titulo)}>Deletar</ButtonDelete>
                                        </Buttons>
                                    </li>
                                )
                            })}
                        </ul>
                        <Button onClick={() => Navigate("/adicionar")}>Adicionar</Button>
                    </>
                ) : (
                    <h3>Nenhuma livro cadastrado.</h3>
                )}
            </MyBooks>
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
    box-shadow: 0 5px 15px rgb(0, 26, 0, .9);
`

const Seller = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    h1 {
        color: #000000;
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: 400;
        max-width: fit-content;
    }
    button{
        margin: 2% 5% 2% 0;
        background-color: #860000;
        color: #FFFFFF;
        font-family: 'Goudy Bookletter 1911', serif;
        font-size: 1.25rem;
        border: none;
        border-radius: 25px;
    }
`

const MyBooks = styled.div`
    width: 100%;
    height: 70vh;
    border: 1px solid #860000;
    border-radius: 15px;
    margin: 0 0 0 auto;
    padding: 15px;
    box-sizing: border-box;
    color: #000000;
    box-shadow: 0 5px 25px rgb(86, 0, 0, .5);
    ul{
        text-decoration: none;
        overflow-y: scroll;
        height: 65vh;
        box-sizing: border-box;
    }   
    ul::-webkit-scrollbar{
    display: none;
    }
    li{
        display: flex;
        margin-bottom: 25px;
        border: 1px solid #860000;
        border-radius: 15px;
        padding: 5px 10px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        h3{
            display: inline-flex;
            font-size: 20px;
        }
        p{
            display: inline-flex;
            font-size: 15px;
            justify-content: space-between;
        }
        strong{
            font-weight: 700;
        }
    }
`

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    img{
        max-width: 160px;
        max-height: 240px;
        border-radius: 15px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;
    gap: 50px;
`

const ButtonEdit = styled.button`
    border: 1px solid #860000;
    border-radius: 25px;
    background-color: #ffee00;
    height: 30px;
    width: 75px;
    font-family: 'Goudy Bookletter 1911', serif;
    font-size: 15px;
    font-weight: 700;
    margin: 0 5px;
    box-shadow: 0 5px 5px rgb(128, 128, 128, .2);
`
const ButtonDelete = styled(ButtonEdit)`
    background-color: #860000;
    border: 1px solid #000000;
    color: #FFFFFF;
`

const Button =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  45px auto;
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
    box-shadow: 0 5px 5px #003600;
`