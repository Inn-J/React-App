import React, { useState } from 'react';
//import data from '../app/data';
import Product from './Product';
import AddForm from './Product/AddForm';
import axios from 'axios';

let currentProductId = 9;
function Home() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
  const products = await axios.get(
    'https://68e9f9e1f1eeb3f856e59831.mockapi.io/api/products'
  );
  setProducts(products.data);
}
getProducts();
  function addProduct(product) {
  const newProduct = { id: ++currentProductId, ...product };
  setProducts([...products, newProduct]);
}
  return (
  <>
  <h1>New Products</h1>
  {
  products.length > 0 ? (
    <ul className="Home__products">
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </ul>
  ) : (
    <div>Loading products....</div>
  )
}
  <AddForm addProduct={addProduct} />
</>);
}




export default Home;