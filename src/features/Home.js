import React, { useState,useEffect } from 'react';
//import data from '../app/data';
import Product from './Product';
import AddForm from './Product/AddForm';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';



function Home({ className, products }) {
  return (
    <div className={className}>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;



