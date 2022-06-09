import React from 'react'
import Deals from '../components/Deals'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import styled from "styled-components"

const Container=styled.div`
height: 100vh;
`;
const Home = () => {
  return (
    <Container>
        <Deals/>
        <Navbar/>
        <Slider/>
    </Container>
  )
}
export default Home