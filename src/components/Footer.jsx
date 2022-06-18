import {  GitHub, LinkedIn, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"
const Container=styled.div`
height: auto;

display: flex;
`;
const Left=styled.div`
flex:1;
padding: 20px;
`;
const Logo=styled.h1`
font-size:2rem;
`;
const Desc=styled.p`
font-size: 1rem;
margin:1em 0;
`;
const SocialContainer=styled.div`
display: flex;
/* justify-content: center;
align-items: center; */

`;
const Link=styled.a`

`;
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 0.5em;
`;
const Center=styled.div`
padding: 20px;
flex:1;
`;
const Title=styled.h1`
font-size:2rem;
margin-bottom: 30px;
`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style-type: none;
display: flex;
flex-wrap: wrap;
font-size:1rem;
`;

const ListItem=styled.li`
margin:0 10px 20px 0;
width:200px;
font-size:1.2rem;


`;

const Right=styled.div`
padding: 20px;
flex:1;
`;
const ContactItem=styled.div`
display:flex;
/* justify-content: center; */
align-items: center;
margin-bottom:20px;
`;
const Payment=styled.img`
width: 50%;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SAM.</Logo>
            <Desc>Get In Touch with me via:</Desc>
            <SocialContainer>
                <SocialIcon color="1166C2">
                   <Link href="https://www.linkedin.com/in/samikshya-kc-15a7401a6/" target="_blank"><LinkedIn /></Link> 
                </SocialIcon>
                <SocialIcon color="CF7DA7">
                   <Link href="https://github.com/samikshyakc1996" target="_blank"><GitHub /></Link> 
                </SocialIcon>
                <SocialIcon color="359BF0">
                   <Link href="https://twitter.com/kc_samikshya" target="_blank"><Twitter /></Link> 
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{paddingRight:"20px"}}/> 45 Sunrise Ave, North York, ON
            </ContactItem>
            <ContactItem>
              <Phone style={{paddingRight:"20px"}}/>  +1-437-985-1062
            </ContactItem>
            <ContactItem>
               <MailOutline style={{paddingRight:"20px"}}/> samikshyakc1996@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer