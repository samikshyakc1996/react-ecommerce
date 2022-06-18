import React from 'react'
import styled from "styled-components"


const Container=styled.div`
/* display: flex;
align-items: center; */

height: 100%;
position: relative;
margin-right:10px;
`;
const Image=styled.img`
width: 400px;
height: 75%;
object-fit: cover;
`;
const Info=styled.div`
width: 100%;
height: 100%;
/* background-color: yellow; */
position: absolute;
top: 0;
bottom: 0;
left: 0;
margin:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title=styled.h1`
font-size:2rem;
color:white;
-webkit-text-stroke: 1px black;
margin-bottom: 10px;
`;
const Button=styled.button`
border:none;
padding:8px;
cursor:pointer;
letter-spacing: 2px;

`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem