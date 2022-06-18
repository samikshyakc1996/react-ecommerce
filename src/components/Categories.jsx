import React from 'react'
import styled from 'styled-components';
import {categories} from "../data"
import CategoryItem from './CategoryItem';

const Container=styled.div`
width: 100vw;
height: 700px;
display: flex;
justify-content: space-around;
`;

const Categories = () => {
  return (
   <Container>
       {categories.map(item=>(
           <CategoryItem item={item}/>
       ))}
   </Container>
  )
}

export default Categories