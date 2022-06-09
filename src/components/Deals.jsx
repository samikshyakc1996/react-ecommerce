import React from 'react'
import styled from "styled-components";


const Deal=styled.div`
background-color: teal;
color:whitesmoke;
height: 30px;
width: 100%;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
`;

const Deals = () => {
  return (
    <Deal>Super Deal! Free shipping on orders over $50. </Deal>
  )
}

export default Deals