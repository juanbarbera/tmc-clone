import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { RegularList } from './RegularList';
import { ClientListItem } from './ClientListItem'; 
import { Modal } from './Modal'; 
import { SideNav } from './SideNav';

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import kateSade from '../assets/images/kate-sade.webp';
import paulFiedler from '../assets/images/paul-fiedler.webp';
import paulFiedlerPlcHolder from '../assets/images/paul-fiedler-placeholder.webp';
import kateSadePlcHolder from '../assets/images/kate-sade-placeholder.webp';

const Background = styled.div`
  background-color: white;
  height: auto;
  width: 100%;
  color: white;
  font-family: 'DM Sans', sans-serif;
`;

const DrawerHamb = styled(MenuIcon)`
  && {
    position: absolute;
    width: 11vh;
    height: 11vh;
    color: white;
    left: 1vw;
    top: 2vw;
    @media (min-width: 1350px) {
      display: none;
    }
  }
`;

// receive image (imported) as prop. The image itself with have the logic.
// it will require: 
// onload event handler, small sized image

const Home = styled.div`
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${props => props.backgroundImg});
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 60% 50%;
`;

const Know = styled.p`
  font-weight: 700;
  font-size: 2.5em;
  text-align: center;
  text-transform: uppercase;
  width: auto;
  :before {
    content: '';
    background-color: #ff4000;
    width: auto;
    height: 5px;
    display: block;
  }
  :after {
    content: '';
    background-color: #ff4000;
    width: auto;
    height: 5px;
    display: block;
  }
  @media (max-width: 660px) {
    width: 90vw;
  }
`;

const Head = styled.p`
  margin-top: 5vh;
  padding-left: 3.7%;
  color: rgb(0,50,71);
  font-weight: 700;
  text-transform: uppercase;
  :before {
    content: '';
    border-left: 5px solid #ff4000;
    left: 0;
    margin-right: .8em;
  }
`;

const Parag = styled.div`
  margin: 3vh 0;
  padding: 0 3.7%;
  color: rgb(0,50,71);
  font-weight: 500;
`;

const Foot = styled.div`
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${props => props.backgroundImg});
  background-size: cover;
  background-position: 10% 55%;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;  
`;



const ExampleText = styled.p`
  color: black;
  margin: 10px 0 30px;
`;

const Example = () => {
  return (
    <ExampleText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget leo eget metus tristique luctus. Maecenas ut egestas arcu. Vestibulum vehicula, lectus a elementum ullamcorper, odio nulla mollis lectus, nec faucibus tellus sapien eu sapien. Integer ornare ex eu augue vulputate mollis. Morbi gravida massa vitae enim pellentesque, a consectetur augue tempus. Nunc ut ex sit amet mauris sodales sagittis in vel nunc. Curabitur ut risus arcu. Nulla scelerisque vulputate mauris, elementum varius ligula. Etiam vestibulum purus et accumsan gravida. Nulla porta, arcu vel rutrum pretium, odio sapien ullamcorper ex, sit amet ornare ex massa at urna. Nullam consectetur at augue commodo facilisis.
    </ExampleText>
  )
}

const useProgressiveImage = src => {  
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded 
}

export const Main = ({ clients }) => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const toggleDrawer = booleanValue => () => {
    setOpenNavBar(booleanValue);
  };

  const loadedPaul = useProgressiveImage(paulFiedler)
  const loadedKate = useProgressiveImage(kateSade)

  return (
    <Background>
      <DrawerHamb onClick={toggleDrawer(!openNavBar)}/>
      <Drawer
        anchor='left'
        open={openNavBar}
        transitionDuration={100}
        variant="persistent"
        elevation={64}
      >
        <SideNav toggleDrawer={toggleDrawer} openNavBar={openNavBar}/>      
      </Drawer>

      <Home backgroundImg={loadedPaul || paulFiedlerPlcHolder}>
        <Know>
          KNOW WHERE YOU'RE HEADED
        </Know>        
      </Home>
      
      <Head>
        Know Where You're Headed
      </Head>
      <Parag>
        The term Employeneurship might sound unfamiliar. It???s because we invented it. Not just as a word, but as a way of working, a paradigm even. Employeneurship is about thinking and acting like an entrepreneur, with the added security of employment. But more than anything, it is a guarantee for continuous development and the opportunity to really be fully responsible for the direction of your career.
      </Parag>
      <Head>
        DEVELOPING MORE THAN EXPERT KNOWLEDGE
      </Head>
      <Parag>
        Our unique Employeneurship model facilitates your development in the broadest sense of the word. For starters, instead of being bound to one company you can work at numerous places. All the while, TMC remains your home-base with a smart coaching program. So while you hone your ???hard??? technical expertise in a challenging series of projects, there is ample opportunity to work on ???soft??? aspects such as personal skills.
      </Parag>
      <Head>
        Some of our clients:
      </Head>
      <Parag>
        <RegularList 
          items={clients}
          resourceName="client"
          itemComponent={ClientListItem} />
      </Parag>      
      <Foot backgroundImg={loadedKate || kateSadePlcHolder}>
        <Know>Grow with us</Know>
      </Foot>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
        <Modal>
            <Example />
        </Modal>
      </div>      
      <Head>
        STEADY GROWTH NEEDS SECURITY
      </Head>
      <Parag>
        At TMC, you combine the security of a permanent contract with the opportunities that entrepreneurship offers. Free from the insecurities that come with running your own business, you???ll have more energy to focus on the job at hand and your longer-term aspirations. Making time for professional and personal growth is a great investment.
      </Parag>
      <Head>
        A REWARDING MODEL
      </Head>
      <Parag>
        Speaking of investment: Employeneurship offers both a stable salary and rewards for entrepreneurship. We are transparent about your project???s costs and turnover and will share the profits with you. Your TMC contract is tailor-made and takes your personal wishes and preferences into account. And to offer even more freedom of choice: in our Benefit Shop, you'll find extra flexibility (and fiscal advantages) regarding your fee.
      </Parag>
    </Background>
  )
}