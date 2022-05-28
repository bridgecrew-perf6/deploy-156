import React from 'react'
import styled from 'styled-components';
import Products from '../component/Products';

const Container = styled.div`
`;
const Title = styled.div`
`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 650;
`
const Select = styled.select`
padding: 8px;
background: transparent;
border:1px solid #111;
border-radius: 3px;
margin-left: 10px;
`;
const Option = styled.option`

`;
const ProductList = () => {
  return (
    <>
    <Container>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
             <Select>
                 <Option disabled selected>Mobile Phones</Option>
                 <Option >Tablets</Option>
                 <Option >Laptops</Option>
             </Select>
             <Select>
                 <Option disabled selected>Mobile Phones</Option>
                 <Option >Tablets</Option>
                 <Option >Laptops</Option>
             </Select>
             </Filter>
        </FilterContainer>
     </Container>
    <Products />
    </>
  )
}

export default ProductList;