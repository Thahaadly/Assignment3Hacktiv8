import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './components/utils/theme';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Award from './components/Award';
import Experience from './components/Experience';
import Interest from './components/Interest';
import Footer from './components/Footer';
import Contact from './components/contact';
import { BrowserRouter as Router } from "react-router-dom";



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Experience />
            <Skills />
            <Interest/>
            <Award />
          </Wrapper>
          <Contact/>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
