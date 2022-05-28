import styled from "styled-components";
import React from 'react';
import category from '../data/categories';
import CategoryItems from './CategoryItems';
import {mobile} from "../responsive";
const Container = styled.div`
display: flex;
padding: 10px;
margin:0 30px;
justify-content: space-between;
${mobile({padding: "0px"})}
`

const Categories = () => {
  return (
    <Container>
     {category.map( (element) => (
         <CategoryItems element={element} key={element.id}/>
     ))}
    </Container>
  )
}

export default Categories;