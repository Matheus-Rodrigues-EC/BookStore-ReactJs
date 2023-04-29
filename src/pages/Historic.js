import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { BiExit } from 'react-icons/bi';

export default function Historic() {

    const userId = "06021998";
    // const Navigate = useNavigate();
    const [historic, setHistoric] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/historico`, userId)
            .then((res) => {
                setHistoric(res.data);
            })
            .catch((error) => {
                alert(error.message);
            })
    }, [])


    return (
        <Container>
            <Sales>
                {historic !== undefined ? (
                    <ul>
                        {historic.map((sale) => {
                            return(
                                <li key={sale._id}>
                                    <p> <strong>Data: </strong> <span>data da venda</span></p>
                                    <p> <strong>Comprador: </strong> <span>{sale.venda}</span></p>
                                    <p> <strong>Total: </strong> <span>valor da venda</span></p>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    null
                )}
            </Sales>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    max-height: 100vh;
    width: 100%;
    margin: 75px auto 0 auto;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    border: 3px solid #800000;
    background-color: #FFFFFF;
    border-radius: 15px;
`

const Sales = styled.section`
    width: 100%;
    border-radius: 15px;
    margin: 0 0 0 auto;
    padding: 15px;
    box-sizing: border-box;
    color: #000;
    ul{
        text-decoration: none;
        overflow-y: scroll;
    }   
    li{
        margin-bottom: 7.5%;
        p{
            display: flex;
            justify-content: space-between;
            strong{
                font-weight: 700;
            }
            span{
                text-align: left;
                width: 50%;
            }
        }
    }
`