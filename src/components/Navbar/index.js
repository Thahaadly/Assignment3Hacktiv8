import React, { useState } from "react";
import { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import {Bio} from '../mydata/data';
import {
  Nav,
  NavLogo,
  Span,
  NavItems,
  NavLink,
  ButtonContainer,
  InstagramButton,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileMenuItems,
  MobileMenuLink,
  MobileMenuButton,
  MobileLink
} from './navbarstyle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavLogo to='/'>
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </NavLogo>
      <MobileIcon>
        <FaBars onClick={() => setIsOpen(!isOpen)} />
      </MobileIcon>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#experience'>Experience</NavLink>
        <NavLink href='#interest'>Interest</NavLink>
        <NavLink href='#award'>Award</NavLink>
      </NavItems>
      <ButtonContainer>
        <InstagramButton href={Bio.insta} target="_blank">Instagram Profile</InstagramButton>
      </ButtonContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuItems>
            <MobileMenuLink to="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileMenuLink>
            <MobileMenuLink to='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileMenuLink>
            <MobileMenuLink to='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileMenuLink>
            <MobileMenuLink to='#interest' onClick={() => setIsOpen(!isOpen)}>Projects</MobileMenuLink>
            <MobileMenuLink to='#award' onClick={() => setIsOpen(!isOpen)}>Education</MobileMenuLink>
            <MobileMenuButton
              href="your-instagram-profile-link"
              style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }}
              target="_blank"
            >
              Instagram Profile
            </MobileMenuButton>
          </MobileMenuItems>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
