import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CampCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 15px;
  border: var(--glass-border);
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 245, 160, 0.5);
  }
`;

const CardBody = styled.div`
  flex-grow: 1;
`;

const camps = [
  {
    id: 1,
    title: '여름방학 AI 특강',
    period: '7월 20일 - 8월 20일',
    target: '초/중학생',
    description: 'Python과 함께하는 AI 첫걸음. 머신러닝 기초를 배우고 나만의 챗봇을 만듭니다.',
  },
  {
    id: 2,
    title: '겨울방학 알고리즘 캠프',
    period: '12월 15일 - 1월 15일',
    target: '고등학생/대학생',
    description: '자료구조, 알고리즘 핵심 이론과 실전 코딩 테���트 문제 풀이로 취업 경쟁력을 높입니다.',
  },
  {
    id: 3,
    title: '주말 Full-Stack 부트캠프',
    period: '상시 모집',
    target: '대학생/일반인',
    description: 'React, Node.js, AI API 연동까지. 자신만의 지능형 웹 서비스를 개발하는 실전 과정입니다.',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function CampList({ onCampSelect }) {
  return (
    <section id="camps">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="gradient-text">Our Core Programs</h2>
            <p className="lead text-white-50">미래를 이끌 당신을 위한 핵심 성장 프로그램을 만나보세요.</p>
          </Col>
        </Row>
        <Row>
          {camps.map((camp, index) => (
            <Col md={4} key={camp.id} className="mb-4">
              <CampCard
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index}
              >
                <CardBody>
                  <h4>{camp.title}</h4>
                  <p className="text-muted mb-2">{camp.period}</p>
                  <p>
                    <strong>대상:</strong> {camp.target}<br/>
                    <span className="text-white-50">{camp.description}</span>
                  </p>
                </CardBody>
                <Button className="gradient-btn mt-auto" onClick={() => onCampSelect(camp)}>
                  지금 신청
                </Button>
              </CampCard>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CampList;