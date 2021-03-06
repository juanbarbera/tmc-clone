import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

import tmc from '../assets/images/TMC.png';

const Background2 = styled.div` 
  z-index: 2;
  height: 100vh;
  background-color: rgb(0,50,71);
  position: fixed;
  width: 20vw;
  @media (max-width: 1350px) {
    width: auto;
    position: auto;
  }
`;

const CustomCloseIcon = styled(CloseIcon)`
  && {
    position: absolute;
    width: 8vh;
    height: 8vh;
    color: white;
    right: 1vw;
    top: 2vw;
    @media (min-width: 1350px) {
      display: none;
    }
  }
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
  @media (max-width: 1350px) {
      margin: 14vh 10vw 5vh 20px;
      width: 270px;
      padding-left: 0;
  }
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

export const SideNav = ({ toggleDrawer, openNavBar }) => {
  return (
    <Background2>
      <CustomCloseIcon onClick={toggleDrawer ? toggleDrawer(!openNavBar) : null}/>
      <Container>
        <Logo src={tmc} />
        <Areas>HOME</Areas>
        <Areas>EMPLOYENEURSHIP</Areas>
        <Areas>WORK WITH US</Areas>
        <Areas>CAREERS</Areas>
        <Areas>INDUSTRIES</Areas>
        <Areas>AREAS OF EXPERTISE</Areas>
        <Areas>NEWS & ARTICLES</Areas>
        <Areas>ABOUT TMC</Areas>
      </Container>
    </Background2>
  );
};