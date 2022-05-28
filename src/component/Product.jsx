import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
opacity:0;
display:flex;
position: absolute;
top:190px;
left:120px;
padding: 3px 10px;
border-radius:10px;
cursor: pointer;
`;

const Container = styled.div`
width:100vw;
height:300px;
position:relative;
opacity:rgba(0,0,0,0.2);

&:hover ${Info}{
    opacity:1;
} 
`;

const Border = styled.div`
margin:3px;
`

const Image = styled.img`
width:250px;
height: 250px;
border-radius:5px;


`;

const item = ({item}) => {
  return (
                 <div className="col-md-3">                        
                         <Container className='cont'> 
                         <Image className='image' src={item.img}/>
                         <Info className='info'>
                            <Border>
                                <SearchIcon/>
                            </Border>
                            <Border>
                                <ShoppingCartOutlinedIcon/>
                            </Border>
                            <Border>
                              <FavoriteBorderOutlinedIcon/>
                            </Border>
                         </Info>

                          </Container>
                  </div>
  )
}

export default item