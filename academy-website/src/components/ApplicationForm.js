import React, { useState, useEffect, forwardRef } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { supabase } from '../supabaseClient';
import { motion } from 'framer-motion';

const ApplicationForm = forwardRef(({ selectedCamp }, ref) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  useEffect(() => {
    setStatus({ loading: false, error: null, success: false });
  }, [selectedCamp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCamp) {
      setStatus({ loading: false, error: "먼저 캠프를 선택해주세요.", success: false });
      return;
    }
    setStatus({ loading: true, error: null, success: false });

    try {
      const { error } = await supabase
        .from('applicants')
        .insert([{ 
            name: formData.name, 
            phone: formData.phone, 
            email: formData.email,
            camp_title: selectedCamp?.title
        }]);

      if (error) throw error;

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: false });
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <section id="apply" ref={ref}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="gradient-text">Join a Program</h2>
            <p className="lead text-white-50">미래를 향한 여정에 지금 바로 동참하세요.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              {status.success && (
                <Alert variant="success" onClose={() => setStatus(prev => ({...prev, success: false}))} dismissible>
                  <strong>신청 완료!</strong> 담당자가 곧 확인하고 연락드리겠습니다.
                </Alert>
              )}
              {status.error && (
                <Alert variant="danger" onClose={() => setStatus(prev => ({...prev, error: null}))} dismissible>
                  <strong>오류 발생!</strong> {status.error}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>선택한 캠프</Form.Label>
                  <Form.Control 
                    className="dark-input"
                    type="text" 
                    value={selectedCamp ? selectedCamp.title : '위에서 캠프를 선택해주세요.'} 
                    readOnly 
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>신청자 이름</Form.Label>
                      <Form.Control 
                        className="dark-input"
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} placeholder="이름" required 
                        disabled={!selectedCamp || status.loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                     <Form.Group className="mb-3">
                      <Form.Label>연락처</Form.Label>
                      <Form.Control 
                        className="dark-input"
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} placeholder="010-1234-5678" required 
                        disabled={!selectedCamp || status.loading}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>이메일</Form.Label>
                  <Form.Control 
                    className="dark-input"
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="email@example.com" required 
                    disabled={!selectedCamp || status.loading}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button className="gradient-btn" type="submit" size="lg" disabled={!selectedCamp || status.loading}>
                    {status.loading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        {' '}제출 중...
                      </>
                    ) : '최종 제출'}
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default ApplicationForm;
