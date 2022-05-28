import React from 'react';
import allProducts from "../data/allProducts";
import Product from './Product';
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
${mobile({width:"90%", margin:"auto",paddingLeft:"60px"})}
`

const Products = () => {
  return (
      <>   
         <Container>

          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                  <h1 className='border-bottom text-center fs-1 my-3'>Products</h1>
                  </div>
              </div>
              <div className="row">
              {allProducts.map((item) => (
             <Product item={item} key={item.id} />
              ))}
              </div>
          </div>
         </Container>
          
        

    </>
  )
}

export default Products