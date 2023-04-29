import axios from 'axios';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { BiExit } from 'react-icons/bi';

export default function Store() {

    const Navigate = useNavigate();
    const [seller, setSeller] = useState("");
    const [historic, setHistoric] = useState();
    const userId = "06021998";

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/loja`, userId)
            .then((res) => {
                setSeller(res.data.user);
                setHistoric(res.data.sales);
            })
            .catch((error) => {
                alert(error.message);
            })
    }, [seller, historic])

    return (
        <Container>
            <Seller>
                <h1>Bem vindo, {seller.name}</h1>
                <button onClick={() => Navigate("/historico")}>Histórico</button>
                <button onClick={() => Navigate("/minha-loja")}>Minha Loja</button>
            </Seller>
            <LastSales>
                {historic !== undefined ? (
                    <ul>
                        {historic.map((sale) => {
                            return(
                                <li key={sale._id}>
                                    <p> <strong>Data: </strong> data da venda</p>
                                    <p> <strong>Comprador: </strong>{sale.venda}</p>
                                    <p> <strong>Total: </strong>valor da venda</p>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    null
                )}
            </LastSales>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
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
    width: 50%;
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

const LastSales = styled.section`
    width: 50%;
    border: 1px solid #860000;
    border-radius: 15px;
    margin: 0 0 0 auto;
    padding: 15px;
    box-sizing: border-box;
    color: #000;
    ul{
        text-decoration: none;
    }   
    li{
        margin-bottom: 7.5%;
        p{
            strong{
                font-weight: 700;
            }
        }
    }
`