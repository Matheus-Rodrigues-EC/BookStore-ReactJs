import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled     from "styled-components"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import Store      from "./pages/Store";
import MyStore    from './pages/MyStore';
import AddBook    from './pages/AddBook';
import EditBook   from './pages/EditBook';
import Historic   from "./pages/Historic";
import { useState } from "react";

export default function App() {
  const [id, setId] = useState();
  return (
    <PagesContainer>

      <Header>
        <Title>Book Store</Title>
      </Header>

      <BrowserRouter>
        <Routes>
          <Route path="/"           element={<SignInPage />} />
          <Route path="/cadastro"   element={<SignUpPage />} />
          <Route path="/loja"       element={<Store />} />
          <Route path="/minha-loja" element={<MyStore setId={setId} />} />
          <Route path="/adicionar"  element={<AddBook />} />
          <Route path="/editar"     element={<EditBook id={id}/>} />
          <Route path="/historico"  element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #006400;
  width: auto;
  min-width: 350px;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
`

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 75px;
  margin: auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
    color: #FFFFFF;
    font-size: 2.5rem;
    font-family: 'Lobster', cursive;
    font-weight: 400;
`