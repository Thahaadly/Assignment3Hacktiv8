import React from "react";
import styled from "styled-components";
import paskib from '../images/juarapaskib.jpeg';
import basket from '../images/juarabasket.jpeg';

const AwardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Optima', sans-serif; 
  color: #fff;
  background-color: #2F4F4F;
`;

const AwardList = styled.ul`
  list-style: disc;
  margin-left: 20px;
  padding: 0;
  display: flex;
`;

const AwardListItem = styled.li`
  font-size: 14px;
  color: #fff;
`;
const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 450px;
  border-radius: 60%;
  margin-top: 30px; 
  `;

  const Award = () => {
    return (
      <div id="award">
  <AwardContainer>
        <h1>Award</h1>
        <AwardList>
        <Img src={paskib} alt="thaha" />
          <AwardListItem>ini adalah foto saya kejuaraan paskibra tingkat SMA Sederajat</AwardListItem>
          <Img src={basket} alt="thaha" /> 
          <AwardListItem>ini adalah foto saya lomba basket tingkat Prodi fakultas MIPA</AwardListItem>
        </AwardList>
      </AwardContainer>
      </div>
      );
    }
    
export default Award;