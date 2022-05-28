import React from 'react';
import styled from "styled-components";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {mobile} from "../responsive"

const Container = styled.div`
width:90%;
margin: auto;
`;
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
text-align: center;
`;
const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${mobile({flexDirection:"column"})}
`;

const TopButton = styled.button`
padding: 10px;
width: 250px;
margin-bottom: 20px;
border: 1px solid #888;
background: transparent;
font-weight: 600;
font-size: 20px;
transition: 0.5s ease;
border-radius:5px;
&:hover {
  color: #fff;
  background: #777;
`;
const Texts = styled.div`

display:flex;
padding: 10px;
align-items: center;
text-align: center;
`;
const Text = styled.span`
align-items: center;
font-size: 25px;
margin-left: 15px;
`;

const Info = styled.div`
width: 65%;


`;
const Product = styled.div`
display: flex;
justify-content:space-around;
margin:10px;
${mobile({ flexDirection:"column", width:"100%"})}
`;
const ProductDetail = styled.div`
${mobile({width:"100%", flexDirection:"column"})}
display: flex;
align-items: center;
`;
const PriceDetail = styled.div`
align-items:center;
display: flex;
justify-content: center;
`;
const ProductName = styled.span`
margin-bottom: 20px;
font-size: 30px;
`;
const ProductId = styled.span`
font-size: 30px;
margin-bottom: 20px;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
margin-left:20px;
`;
const Image = styled.img`
${mobile({width:"300px",height:"400px"})}
width:300px;
height: 400px;
margin:10px;
border-radius: 10px;
`;

const Circle = styled.div`
padding: 5px;
cursor: pointer;
margin: 20px;
border-radius: 50%;
background-color: ${props => props.type === "plus" ? "red" : "blue"}
`;
const Hr = styled.hr`
border: none;
height: 1px;
`

const Bottom = styled.div`
display:flex;
align-items:center;
${mobile({flexDirection:"column"})}
`;

const Amount = styled.h3``;
const FullPrice = styled.h2``;

const Summary = styled.div`
${mobile ({width:"90%"})}
width: 35%;
border: 1px solid #111;
padding: 10px;
border-radius: 5px;
`;
const SummaryTitle = styled.div`
text-align: center;
margin: 10px;
font-size: 40px;
`;
const SummaryItems = styled.div`
display: flex;
justify-content: space-between;
font-size: 25px;
margin-bottom:25px;
font-weight:${props => props.type === "total" && 600}
`;
const SummaryProperty = styled.div``;
const SummaryValue = styled.div`

`;
const SummaryButton = styled.button`
width:100%;
border-radius:5px;
background: transparent;
border: 1px solid #111;
padding: 5px;
border-radius: 5px;
transition: 0.5s ease;
margin-top: 20px;
&:hover{
 background: #888;
 color: #fff;
 border: none;
}
`;

const Cart = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <Texts>
                    <Text> Shopping Bag(2)</Text>
                    <Text> Your Wishlist(0)</Text>
                </Texts>
                <TopButton>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={require("../assets/category/tabletc.jpg")} />
                            <Details>
                                <ProductName><b>Product:</b> IPhone </ProductName>
                                <ProductId> <b>ID:</b> 1 </ProductId>
                                <FullPrice><b>Full Price:</b> $1000</FullPrice>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                        <Circle > <RemoveOutlinedIcon className='add'/></Circle>
                        <Amount>2</Amount>
                         <Circle type="plus">  <AddOutlinedIcon className='add'/></Circle>
                        </PriceDetail>
                    </Product>
                </Info>
                
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItems>
                        <SummaryProperty>
                              SubTotal
                        </SummaryProperty>
                        <SummaryValue>
                              $1000
                        </SummaryValue>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryProperty>
                              Estimated Shipping 
                        </SummaryProperty>
                        <SummaryValue>
                               $500
                        </SummaryValue>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryProperty>
                              Shopping Discount
                        </SummaryProperty>
                        <SummaryValue>
                              -$100
                        </SummaryValue>
                    </SummaryItems>
                    <SummaryItems type="total">
                        <SummaryProperty>
                              Total
                        </SummaryProperty>
                        <SummaryValue >
                              $2500
                        </SummaryValue>
                    </SummaryItems>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
            <Hr />
           
        </Wrapper>   

    </Container>
  )
}

export default Cart;