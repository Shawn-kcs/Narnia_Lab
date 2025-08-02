import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  transition: all 0.3s ease-out;
  background: ${({ scrolled }) => (scrolled ? 'var(--glass-bg)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  -webkit-backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  border-bottom: ${({ scrolled }) => (scrolled ? 'var(--glass-border)' : 'none')};

  .navbar-brand, .nav-link {
    color: var(--text-color) !important;
    font-weight: 600;
    transition: color 0.2s ease;
    text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .nav-link:hover {
    color: var(--accent-color-1) !important;
  }
  
  .navbar-brand {
    font-weight: 700;
  }
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledNavbar scrolled={scrolled} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="gradient-text">NARNIA LAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor: 'rgba(255,255,255,0.1)'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">학원소개</Nav.Link>
            <Nav.Link href="#camps">캠프 목록</Nav.Link>
            <Nav.Link href="#apply">캠프 신청</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Header;
