import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCode, FaUsers } from 'react-icons/fa';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: var(--secondary-color);
`;

const FeatureCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 15px;
  border: var(--glass-border);
  padding: 2.5rem 2rem;
  text-align: center;
  height: 100%;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--accent-color-1), var(--accent-color-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "최고의 강사진",
    description: "실무 경험이 풍부한 현업 개발자들이 직접 가르치는 깊이 있는 교육을 경험하세요."
  },
  {
    icon: <FaCode />,
    title: "실무 중심 커리큘럼",
    description: "최신 기술 트렌드를 반영한 프로젝트 중심의 커리큘럼으로 실전 능력을 키웁니다."
  },
  {
    icon: <FaUsers />,
    title: "소수 정예 클래스",
    description: "개인별 맞춤 피드백이 가능한 환경에서 학습 효과를 극대화하고 함께 성장합니다."
  }
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

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="gradient-text">Why Narnia Academy?</h2>
            <p className="lead text-white-50">단순한 코딩 교육을 넘어, 창의적인 문제 해결 능력을 갖춘 미래의 리더를 양성합니다.</p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index} className="mb-4">
              <FeatureCard
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <IconWrapper>{feature.icon}</IconWrapper>
                <h4>{feature.title}</h4>
                <p className="text-white-50">{feature.description}</p>
              </FeatureCard>
            </Col>
          ))}
        </Row>
      </Container>
    </AboutSection>
  );
}

export default About;
