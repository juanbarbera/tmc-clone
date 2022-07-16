import { RegularList } from './RegularList';
import { ClientListItem } from './ClientListItem'; 
import { Modal } from './Modal'; 
import styled from 'styled-components';

const Background = styled.div`
  background-color: white;
  height: auto;
  width: 100%;
  color: white;
  font-family: 'DM Sans', sans-serif;
`;

const Home = styled.div`
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('./imgs/paul-fiedler.jpg');
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wow = styled.p`
  font-weight: 700;
  font-size: 2.5em;
  text-transform: uppercase;
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
`;

const Head = styled.h3`
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

const Parag = styled.p`
  margin: 3vh 0;
  padding-left: 3.7%;
  color: rgb(0,50,71);
  font-weight: 500;
`;

const Foot = styled.div`
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('./imgs/kate-sade.jpg');
  background-size: cover;
  background-position: 10% 55%;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const OfferText = styled.p`
  color: black;
  margin: 10px 0 30px;
`;

const Offer = () => {
  return (
    <OfferText>Congratulations, you have been selected to integrate our team. We would like to offer you a position of Front-End Developer. We have sent you an e-mail with all the information.</OfferText>
  )
}

export const Main = ({ clients }) => {
  return (
    <Background>
      <Home>
        <Wow>
          KNOW WHERE YOU'RE HEADED
        </Wow>        
      </Home>
      <Head>
        Know Where You're Headed
      </Head>
      <Parag>
        The term Employeneurship might sound unfamiliar. It’s because we invented it. Not just as a word, but as a way of working, a paradigm even. Employeneurship is about thinking and acting like an entrepreneur, with the added security of employment. But more than anything, it is a guarantee for continuous development and the opportunity to really be fully responsible for the direction of your career.
      </Parag>
      <Head>
        DEVELOPING MORE THAN EXPERT KNOWLEDGE
      </Head>
      <Parag>
        Our unique Employeneurship model facilitates your development in the broadest sense of the word. For starters, instead of being bound to one company you can work at numerous places. All the while, TMC remains your home-base with a smart coaching program. So while you hone your ‘hard’ technical expertise in a challenging series of projects, there is ample opportunity to work on ‘soft’ aspects such as personal skills.
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
      <Foot>
        <Wow>Grow with us</Wow>
      </Foot>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
        <Modal>
            <Offer />
        </Modal>
      </div>      
      <Head>
        STEADY GROWTH NEEDS SECURITY
      </Head>
      <Parag>
        At TMC, you combine the security of a permanent contract with the opportunities that entrepreneurship offers. Free from the insecurities that come with running your own business, you’ll have more energy to focus on the job at hand and your longer-term aspirations. Making time for professional and personal growth is a great investment.
      </Parag>
      <Head>
        A REWARDING MODEL
      </Head>
      <Parag>
        Speaking of investment: Employeneurship offers both a stable salary and rewards for entrepreneurship. We are transparent about your project’s costs and turnover and will share the profits with you. Your TMC contract is tailor-made and takes your personal wishes and preferences into account. And to offer even more freedom of choice: in our Benefit Shop, you'll find extra flexibility (and fiscal advantages) regarding your fee.
      </Parag>
    </Background>
    
  )
}