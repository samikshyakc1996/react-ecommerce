import React from 'react'
import Deals from '../components/Deals'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import styled from "styled-components"
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
 
const Container=styled.div`
height: 100vh;
`;
const Home = () => {
  return (
    <Container>
        <Deals/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default Home