import styled from "styled-components";
import React from 'react';
import {mobile} from "../responsive"

const Container = styled.div`
flex:1;
margin:5px;
position:relative;
`;
const Image = styled.img`
width: 100%;
height:450px;
justify-content:center;
border-radius:5px;
object-fit:cover;
border-radius:5px;
${mobile({height:"30vh"})}
`;
const Title = styled.div`
font-size:40px;
color:white;
font-weight:bold;
letter-spacing: 2px;
text-transform: uppercase;
`;
const Info = styled.div`
position: absolute;
width:100%;
height:100%;
top:10px;
left:10px;
`;
const Button = styled.button`
color:white;
font-size:20px;
padding:3px 5px;
border:1px solid white;
background: transparent;
border-radius: 5px;
transition: 0.5s ease;
`;

const CategoryItems = ({element}) => {
  return (
    <Container>
        <Image src={element.img}/>
        <Info>
            <Title>{element.title}</Title>
            <Button className="btn">Purchase Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItems