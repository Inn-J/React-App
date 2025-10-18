import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import AddForm from './features/Product/AddForm';
import UpdateForm from './features/Product/UpdateForm';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://68e9f9e1f1eeb3f856e59831.mockapi.io/api/products'
      );
      setProducts(products.data);
    }

    getProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
        <Container>
          {products.length > 0 ? (
            <Routes>
              <Route path="/create-product" element={<AddForm />} />
              <Route path="/update-product/:id" element={<UpdateForm />} />
              <Route path="/" element={<Home products={products} />} />
            </Routes>
          ) : (
            <div>Loading products....</div>
          )}
      </Container>
    </>
  );
}

export default App;
//<h1>Hello React</h1>
//style={{ padding: '4rem 0', margin: '0 auto', maxWidth: 1200 }