''
import styled from "styled-components";


const Container = styled.div`
width:40%;
margin:auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding:30px;
border-radius: 6px;
margin-bottom:20px;
background:#f5fafd;
`;
const Title = styled.h1`
  margin-bottom: 30px;
`;
const Input = styled.input`
width:70%;
padding:7px;
border-radius:5px;
border:1px solid #111;
outline:none;
margin-bottom: 15px;
`;
const Text = styled.textarea`
padding:5px;
width:70%;
outline:none;
margin-bottom: 15px;
`;
const Button = styled.button`
width: 70%;
border:none;
background:#0D6EFD;
color:#fff;
padding:5px;
border-radius:5px;

&:hover {
  opacity:0.8;
}
`;
const Title1 = styled.div`
padding:15px;
font-size:20px;
font-weight:400;
margin:auto;
`;

const Newsletter = () => {
  return (
    <>
    <Container>
      <Title >
         For Questions
      </Title>
        <Input type="email" placeholder='Enter your email'/>
        <Text />
        <Button>
          Send
        </Button>    
    </Container>
   
    </>
  )
}

export default Newsletter