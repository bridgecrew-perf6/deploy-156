import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";

const Container = styled.div`
background:#333;
color:#fff;
padding-top: 40px;
padding-bottom: 20px;
`
const Icons = styled.div`
display:flex;
justify-content:center;
`
const Icon = styled.div`
padding-left:6px;
`;
const Title = styled.p`
text-align:center;
font-size: 18px;
padding:5px;
`

const Footer = () => {
    return (
        <Container>
            <div className="container text-center pb-3">
                <div className="row pb-4">
                    
                    <div className="col-md-3">
                        <h1>rashidovDev</h1>
                        <h3>IT Company</h3>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <a>Pre sale FAQs</a>
                        <a>More search</a>
                        <a>Blog</a>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <NavLink  to="/products">Laptops</NavLink>
                        <a>Mobile Phones</a>
                        <a>Tablets</a>
                        <a>All Products</a>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <a>About Us</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <hr/>
            </div>

            <Icons>
                <Icon>
                <InstagramIcon/>
                </Icon>
                <Icon>
                <FacebookIcon/>
                </Icon>
                <Icon>
                <TwitterIcon/>
                </Icon>
                <Icon>
                <TelegramIcon/>
                </Icon>
                <Icon>
                <GoogleIcon/>
                </Icon>
            </Icons>

            <Title>
                Copyright&copy; All rights reserved
            </Title>
           

        </Container>
    )
}

export default Footer