import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import Book from "./pages/Book"
import Bookshelf from "./pages/Bookshelf"
import Cart from "./pages/Cart"
import Finish from "./pages/Finish"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/estante" element={<Bookshelf />} />
          <Route path="/livro" element={<Book />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/confirmar" element={<Finish />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #006400;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
