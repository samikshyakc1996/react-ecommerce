import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import {React, useState} from 'react'
import styled from "styled-components"
import { sliderItems } from '../data';

const Container=styled.div`

height: 100vh;
width:100%;
position: relative;
overflow: hidden;
display: flex;
`;
const Arrow=styled.div`
height: 20px;
width: 20px;
background-color: purple;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props=>props.direction==="left" && "10px"};
right: ${props=>props.direction==="right" && "10px"};
margin:auto;
cursor: pointer;
z-index: 2;
`;

const Wrapper=styled.div`
height: 100%;

background-color: yellow;
display: flex;
transform: translateX(${(props)=> props.slideIndex *-100}vw);
transition: all 2s ease;
`;
const Slide=styled.div`
width: 100vw;
height: 100vh;
align-items: center;
display: flex;


background-color: #${props=>props.bg};
`;
const ImgContainer=styled.div`
flex:1;
height: 100%;
/* z-index: 1; */
padding-left: 4em;
`;
const Image=styled.img`
height: 80%;
`;
const InfoContainer=styled.div`
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */

`;
const Title=styled.h2`
font-size: 4rem;
letter-spacing:2px;
`;
const Desc=styled.p`
font-size: 1.2rem;
letter-spacing:3px;
margin:3em 0;
padding-right:4em;
`;
const Button=styled.button`
width: fit-content;
padding: 8px 12px;
background-color: white;
font-size: 1.5rem;
`;



const Slider = () => {

    const [slideIndex,setSlideIndex]=useState(0);

    const handleClick=(direction)=>{
        console.log("handleclick is clicked",slideIndex);
        direction==="left" ? setSlideIndex(slideIndex>0? slideIndex-1: 2):
        setSlideIndex(slideIndex<2 ? slideIndex+1 :0);
      
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
        
        <Wrapper slideIndex={slideIndex}>
  
                {sliderItems.map(item=>(
                <Slide bg={item.bg} >
                    <ImgContainer>
                     <Image src={item.img}/>
                        
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider