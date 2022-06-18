import { Send } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components"
const Container=styled.div`
height: 50%;
width: 100vw;
background-color: #e2c7cb;
margin: 5em 0 0 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title=styled.h1`
font-size:4rem;
`
const Desc=styled.p`
font-size: 2em;
margin: 1em 0;
`;
const Form=styled.form``;
const InputContainer=styled.div`
width:50vw;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;

`;
const Input=styled.input`
/* 
font-size: 20px; */
border: none;
height: 38px;
flex:8;
padding-left:20px;
`;
const Button=styled.button`

/* font-size: 20px; */
border:none;
height: inherit;
flex:1;
background-color: teal;
color:white;
`;


const Newsletter = () => {
  return (
      <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <Form>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button><Send/></Button> 
           </InputContainer>
        </Form>
    </Container>
  )
}

export default Newsletter