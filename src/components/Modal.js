import { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1250px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 5px;
  border: 1px solid #ff4000;
  color: rgb(0,50,71);
  background-color: white;
  border-radius: 5px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
`;

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false)
  
  return (
    <>
      <Button onClick={() => setShouldShow(true)}>Open Modal</Button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={e => e.stopPropagation()}>
            {children}
            <Button onClick={() => setShouldShow(false)} style={{marginTop: '15px'}}>Close</Button>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  )
}