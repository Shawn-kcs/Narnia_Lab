import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col>
            <p className="text-white-50 mb-0">
              &copy; {new Date().getFullYear()} Narnia Academy. All Rights Reserved.
            </p>
            <p className="text-white-50 small">
              Designed for the Future of Education.
            </p>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
