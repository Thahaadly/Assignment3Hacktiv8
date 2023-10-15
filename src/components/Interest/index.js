import React from 'react';
import styled from 'styled-components';
import background from '../images/interest.jpg'

// Styled components for your Interest component
const InterestContainer = styled.div`
  background: url(${background}) no-repeat center;
  background-size: 100% 135%;
  padding: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #8A2BE2;
 font-size: 20px;
`;
const Interest = () => {
  return (
    <div id='interest'>
 <InterestContainer>
      <h1>Interest</h1>
    </InterestContainer>
    </div>
   
  );
}

export default Interest;


