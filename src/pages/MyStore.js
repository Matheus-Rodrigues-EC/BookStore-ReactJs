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

    function deleteBook(id){
        confirmAlert({
            title: 'Confirmar exclusão',
            message: `Deseja excluir o livro ${null}`,
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
                    }
                },
                {
                    label: 'Cancelar',
                    onClick: () => { alert("operação cancelada") }
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
                    <ul>
                        {books.map((book) => {
                            return(
                                <li key={book._id}>
                                    <Infos>
                                        <h3><strong>Título: </strong></h3>
                                        <h3>{book.titulo}</h3>
                                        <p> 
                                            <span> <strong>Autor(a): </strong> <br/> {book.autor} </span> 
                                            <span> <strong>Preço: </strong> <br/> {book.valor} </span>
                                        </p>
                                    </Infos>

                                    <Buttons>
                                        <ButtonEdit onClick={() => Navigate("/editar")}>Editar</ButtonEdit>
                                        <ButtonDelete onClick={() => deleteBook(book._id)}>Deletar</ButtonDelete>
                                    </Buttons>
                                </li>
                            )
                        })}
                        <Button onClick={() => Navigate("/adicionar")}>Adicionar</Button>
                    </ul>
                ) : (
                    null
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

const MyBooks = styled.section`
    width: 100%;
    border: 1px solid #860000;
    border-radius: 15px;
    margin: 0 0 0 auto;
    padding: 15px;
    box-sizing: border-box;
    color: #000;
    ul{
        text-decoration: none;
        overflow-y: scroll;
    }   
    ul::-webkit-scrollbar{
    display: none;
    }
    li{
        display: flex;
        margin-bottom: 25px;
        border: 1px solid #860000;
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
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    right: 0;
    justify-content: space-around;
    margin: auto;
`

const ButtonEdit = styled.button`
    border: none;
    border-radius: 25px;
    background-color: #ffee00;
    height: 30px;
    width: 75px;
    font-family: 'Goudy Bookletter 1911', serif;
    font-size: 15px;
    font-weight: 700;
    margin: 0 5px;
`
const ButtonDelete = styled(ButtonEdit)`
    background-color: #860000;
    color: #FFFFFF;
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
`