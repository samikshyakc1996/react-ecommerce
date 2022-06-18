import { FavoriteBorder, Search, ShoppingCart } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components"

const Info=styled.div`
background-color: rgba(0,0,0,0.2);
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
/* z-index: 2; */
position: absolute;
top:0;
left:0;
bottom:0;
opacity: 0;
transition: all 1s ease;

`;
const Container=styled.div`
height: 400px;
width: 400px;
background-color: aliceblue;
margin-bottom: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position:relative;
cursor:pointer;
&:hover ${Info}{
opacity: 1;
transition: all 0.5s ease;
}
`;
const Circle=styled.div`
height: 300px;
width: 300px;
border-radius: 50%;
background-color: white;

`;
const Image=styled.img`
height: 100%;
width: 100%;
object-fit: cover;
z-index: 3;
`;

const Icon=styled.div`
z-index: 2;

height: 40px;
width: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin-left:20px;
cursor: pointer;


`;

const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle>
            <Image src={item.img} alt="clothing item"/>
        </Circle>
        <Info>
            <Icon>
                <ShoppingCart/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                
                <FavoriteBorder/>
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem