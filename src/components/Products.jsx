import React from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import ProductItem from './ProductItem';
const Container=styled.div`
display: flex;
justify-content: space-evenly;
width: 100vw;
height: 100%;
display: flex;
flex-wrap: wrap;
;
`;
const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <ProductItem item={item}/>
        ))}
    </Container>
  )
}

export default Products