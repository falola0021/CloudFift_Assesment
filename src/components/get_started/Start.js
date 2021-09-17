import React from 'react';
import Styles from './Start.module.css';
import Bg from '../../assets/images/getstarted.png';
import { Container, Row, Col } from 'react-bootstrap';
export default function Start() {
  return (
    <Container>
      <div className={Styles.container}>
        <Row xs={1} md={1} lg={2}>
          <Col></Col>
          <Col>
            <div className={Styles.title}>Get a Job you actually like</div>
            <div className={Styles.sub}>
              Create an account and start applying
            </div>
            <div className={Styles.button}>Get started</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
