import React from 'react';
import styled from 'styled-components';
import foto from '../images/msc.jpeg';
import photo from '../images/paskibrakandangan.jpg';
import basket from '../images/fotobasket.jpeg';

// Styled components for your Experience component
const ExperienceContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Optima', sans-serif; 
  color: #8A2BE2;
`;


const ExperienceListItem = styled.li`
  font-size: 16px;
  color: #8A2BE2;
  margin-left:300px;
  margin-right: 300px;
  margin-top: 40px;
`;
const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 60%;
  margin-top: 20px; 
  `;
const Experience = () => {
  return (
    <div id="experience">
<ExperienceContainer>
      <h1>Experience</h1>
     
      <Img src={foto} alt="thaha" />
        <ExperienceListItem>ini adalah kegiatan organisasi ketika melaksanakan lomba MSC CUP Tingkat Provinsi di tingkar SMA Sederajat. Disini saya menjadi anggota keamanan yang dimana bertugas meamankan supporter dan pengunjung</ExperienceListItem>
        <Img src={photo} alt="thaha" /> 
        <ExperienceListItem>ini adalah foto saya lomba paskibra tingkat provinsi. disini saya pertama kali lomba di luar kota dan menginap selama 2 hari tetapi ini bukan pertama kali saya mengikuti lomba paskibra. Saya merasa disini lah latihan keras bersungguh-sungguh dan menikmati hasilnya</ExperienceListItem>
        <Img src={basket} alt="thaha" /> 
        <ExperienceListItem>ini adalah foto saya lomba basket tingkat kota banjarmasin. foto ini adalah  pengalaman pertama saya dibasket disinilah saya belajar tentang kerjasama dan latihan keras.</ExperienceListItem>
   
    </ExperienceContainer>
  
    </div>
    );
}

export default Experience;
