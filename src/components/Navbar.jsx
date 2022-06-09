import  styled  from 'styled-components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
   
    color:black;
      
`;
const NavWrapper = styled.div`
    height:8%;
    background-color: #c9abab;
    display: flex;
    justify-content  :space-between ;
    align-items: center;
    padding: 1em;
`;
const Left = styled.div`
     display: flex;
     justify-content: space-around;
    
     align-items: center;

     span{
          font-size: 1rem;
     }
     input{
         margin:0 1em;
     }
`;
const Center = styled.div`
     
`;
const Logo = styled.div`
     font-size: 2rem;
`;
const Right = styled.div`
     display: flex;
`;
const MenuItem = styled.div`
     font-size: 1rem;
     margin-left:1em;
`;


const Navbar = () => {
  return (
      
      
    <Container>
        <NavWrapper>
            <Left>
                <span>En</span>
                <input type="text" />
               <SearchIcon/>

            </Left>
            <Center>
                <Logo>
                   SAM. 
                </Logo>
                
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </NavWrapper>
    </Container>
   
  )
}

export default Navbar