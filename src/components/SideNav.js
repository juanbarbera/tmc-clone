import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  background-color: rgb(0,50,71);
  position: fixed;
  width: 20%;
`;

const Container = styled.div`
  padding-top: 2%;
`;

const Logo = styled.img`
  width: 90%;
  margin-top: 6vh;
  margin-bottom: 9vh;
  padding-left: 15%;
  cursor: pointer;
`;

const Areas = styled.div`
  font-family: 'DM Sans', sans-serif;;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 2rem;
  color: white;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
      color: #ff4000;
    } 
  :before { 
    content: '';
    border-left: 10px solid transparent;
    left: 0;
    margin-right: 20px;
    transition: border-color .5s;
  }      
  :hover:before {
      border-color: #ff4000;
    }
`;

export const SideNav = () => {
  return (
    <Background>
      <Container>
        <Logo src="./imgs/TMC.png" />
        <Areas>HOME</Areas>
        <Areas>EMPLOYENEURSHIP</Areas>
        <Areas>WORK WITH US</Areas>
        <Areas>CAREERS</Areas>
        <Areas>INDUSTRIES</Areas>
        <Areas>AREAS OF EXPERTISE</Areas>
        <Areas>NEWS & ARTICLES</Areas>
        <Areas>ABOUT TMC</Areas>
      </Container>
    </Background>
  );
};