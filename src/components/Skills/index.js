import React, { Component } from 'react';
import styled from 'styled-components';
import htmlImage from '../images/html.jpg';
import phpImage from '../images/php.png';
import javascriptImage from '../images/Logo-Javascript.png';


const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #2F4F4F;
  padding: 100px;
`;

const StyledText = styled.div`
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  color: #fff;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SkillItem = styled.li`
  background-color: #8A2BE2;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const SkillImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 40%;
  margin-top: 30px;
`;

class SkillsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillLevel: 'HTML',
    };
  }

  changeSkillLevel = (newLevel) => {
    this.setState({ skillLevel: newLevel });
  }

  render() {
    let SkillDescription = '';

    if (this.state.skillLevel === 'HTML') {
      SkillDescription = 'Saya menggunakan HTML untuk membuat sebuah Website portfolio menggunakan HTML dan CSS sebagai UAS saya di perkuliahan';
    } else if (this.state.skillLevel === 'PHP') {
      SkillDescription = 'Saya menggunakan PHP untuk membuat sebuah website penjualan minuman yang bernama Starbucek yang memuat CRUD dan menggunakan beberapa database';
    } else if (this.state.skillLevel === 'Javascript') {
      SkillDescription = 'Saya belajar menggunakan Javascript untuk membuat sebuah website penjualan minuman yang bernama Starbucek. Javascript yang ada pada web saya menggunakan function javascript';
    }

    let skillImage = htmlImage; // Default image

    if (this.state.skillLevel === 'PHP') {
      skillImage = phpImage;
    } else if (this.state.skillLevel === 'Javascript') {
      skillImage = javascriptImage;
    }

    return (
      <CenteredContainer>
        <div id='skills'>
          <StyledText>
            <h1>Skills</h1>
            <p>{SkillDescription}</p>
            <SkillImage src={skillImage} alt={this.state.skillLevel} />
            <SkillList>
              <SkillItem onClick={() => this.changeSkillLevel('HTML')}>HTML</SkillItem>
              <SkillItem onClick={() => this.changeSkillLevel('PHP')}>PHP</SkillItem>
              <SkillItem onClick={() => this.changeSkillLevel('Javascript')}>Javascript</SkillItem>
            </SkillList>
          </StyledText>
        </div>
      </CenteredContainer>
    );
  }
}

export default SkillsComponent;
