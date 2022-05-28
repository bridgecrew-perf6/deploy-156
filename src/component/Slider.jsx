import React, { useState } from 'react';
import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import sliderItems from "../data/slider";
import { NavLink } from 'react-router-dom';
import Products from './Products';
import Categories from './Categories';
import {mobile} from "../responsive"


const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   overflow:hidden;
   ${mobile({display: "none"})}
`
const Arrow = styled.div`
   width: 50px;
   height:50px;
   background-color: #999;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items:center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props => props.direction === "left" && "10px"};
   right: ${props => props.direction === "right" && "10px"};
   margin:auto;
   cursor:pointer;
   opacity: 0.7;
   z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transition:all 2s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Image = styled.img`
  width:600px;
  height:500px;
  align-items: center;
  margin-right:10px;
  margin-left: 50px;
  padding: 30px;
  justify-content: center;
`;

const Slide = styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items:center;
background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
flex: 1;
height:100%
`
const InfoContainer = styled.div`
flex: 1;
`
const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing:2px;
`;
const Button = styled.button`
   padding: 13px 18px;
   margin:10px;
   cursor: pointer;
   font-size:20px;
   background:transparent;
   border-radius:5px;
   font-weight:600;
   border:1px solid #777;
   transition:0.5s ease;
`;


const Slider = () => {

   const [slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction) => {

     if(direction === "left"){
       setSlideIndex (slideIndex > 0 ? slideIndex - 1 : 3)
     }
     else{
       setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
     }
   };

  return (
    <>
    
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex} >
        {
          sliderItems.map(element => (
          <Slide bg={element.bg} key={element.id}>
          <ImgContainer>
               <Image src={element.img}/>
          </ImgContainer>
          <InfoContainer>
             <Title>{element.title}</Title>
             <Desc>{element.desc}</Desc>
             <NavLink className="nav-link1" to="/products"> Show Now</NavLink>
          </InfoContainer>
          </Slide>
        )) }
          
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon/>
      </Arrow>
    </Container>
    <Categories />

  
    </>
   

  )
}

export default Slider