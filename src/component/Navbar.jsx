import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';
import {mobile} from "../responsive"

const Container = styled.div`
height : 60px;
${mobile({height:"50px"})}
}
`
const Wrapper = styled.div`
${mobile({padding: "5px"})};
padding: 10px 70px;
display:flex;
justify-content:space-between
align-items:center;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
${mobile({ display: "none"})};
font-size: 14px;
cursor:pointer;
`
const SearchContainer = styled.div`
${mobile({ display: "none"})};
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding:5px;
`
const Input = styled.input`
border: none;
outline:none;
${mobile({width: "50px"})};
`

const Center = styled.div`
flex: 1;
`
const Logo = styled.h1`
${mobile({fontSize:"24px"})};
font-weight: bold;
text-align: center;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent:"center"})};
`
const MenuItem = styled.div`
   margin-left: 25px;
   font-size: 14px;
   cursor: pointer;
   ${mobile({ display: "none"})}
`


const Navbar = () => {
    return (
        <>'
        
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        E-COMMERCE
                    </Logo>
                </Center>
                <Right>
                    <NavLink className="nav-link2" to="/register"> Register</NavLink>
                    <NavLink className="nav-link2" to="/login"> Sign In</NavLink>
                    <MenuItem>
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>

                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
        </>
    )
}

export default Navbar