import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
width: 100%;
height: 100vh;  
display:flex;
justify-content: center;
`;
const Reg = styled.div`
${mobile({width:"80%",height:"360px"})}
width: 35%;
height: 50%;
padding:20px;
margin: auto;
border: 1px solid #111;
display: flex;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
margin-bottom: 30px;
`
const Input = styled.input`
padding: 10px;
margin-bottom: 20px;
width:80%;
outline: none;
`;
const Button = styled.button`
padding: 10px;
margin-bottom: 20px;
width:80%;
border: 1px solid #888;
background: transparent;
font-weight: 600;
font-size: 20px;
transition: 0.5s ease;

&:hover {
  color: #fff;
  background: #777;
}
`;

const Login = () => {
    
  return (
    <>
   
    <Container>
           
          <Reg>
            <Title>Login</Title>
         
            <Input type="text" placeholder='Enter your username'/>
            <Input type="password" placeholder='Enter your password'/>
            <Button>
            Login
            </Button>
          </Reg>
          
    </Container>
    </>
  )
}

export default Login;