import React from 'react';
import styled from 'styled-components';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {mobile} from "../responsive"

const Container = styled.div`
${mobile({padding:"0px"})}
padding:30px;
width:70%;
margin: auto;
margin-bottom: 20px;
margin-top:10px
`;
const Wrapper = styled.div`
${mobile({flexDirection:"column"})}
display: flex;
justify-content: center;
`;
const ImgContainer = styled.div``;
const Image = styled.img`
${mobile({width:"100%" , height:"400px", marginTop:"50px"})}
width: 500px;
height: 500px;
border-radius:10px;
`;
const InfoContainer = styled.div`
align-items: center;
padding: 50px;
margin: auto;
`;
const Title = styled.h1`
margin-bottom: 30px;
font-weight:bold;
`;
const Desc = styled.div`
margin-bottom: 20px;
font-size: 17px;
`;
const Price = styled.p`
font-weight: 500;
font-size: 20px;
`;

const Button = styled.button`
   width: 150px;
   padding: 13px;
   margin-top: 10px;
   cursor: pointer;
   font-size:20px;
   background:transparent;
   border-radius:5px;
   font-weight:600;
   border:1px solid #777;
   transition:0.5s ease;

   &:hover {
       color: #fff;
       background:#777;
   }
`;

const AddContainer = styled.div`

`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
padding:3px;
border: 1px solid #111;
width: 80px;
border-radius: 5px;
`;
const Amount = styled.span`
font-size:30px;
`;

const Product = ({ item }) => {

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={require("../assets/category/iphone8.jpg")} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Iphone 8</Title>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Eligendi minima magnam adipisci iure a enim qui unde repellat
                        optio ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Eligendi minima magnam adipisci iure a enim qui unde repellat
                        optio ratione.
                    </Desc>
                    <Price>Price: $800</Price>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon />
                            <Amount>1</Amount>
                            <AddOutlinedIcon />
                        </AmountContainer>
                    </AddContainer>

                    <Button>Add to Cart</Button>
                </InfoContainer>
            </Wrapper>

        </Container>
    )
}

export default Product