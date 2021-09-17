import React from 'react'
import Styles from './Footer.module.css'
import { Row, Col, Container } from 'react-bootstrap'
import companyLogo from '../../assets/images/companyLogo.png'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
export default function Footer () {
  return (
    <Container fluid className={Styles.footerContainer}>
      <Row>
        <Col>
        <img src={companyLogo} alt='alt' />
        <div className={Styles.subHead}>
          <div className={Styles.info}>
            Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.
          </div>
        </div>
        </Col>
        <Col>
        <div className={Styles.header}>
          Information
        </div>
        <div className={Styles.subHead}>
          <div className={Styles.text}>
            About Us
          </div>
          <div className={Styles.text}>
            Contact Us
          </div>
          <div className={Styles.text}>
            Terms & Condition
          </div>
        </div>
        </Col>
        <Col>
        <div className={Styles.header}>
          Job Seekers
        </div>
        <div className={Styles.subHead}>
          <div className={Styles.text}>
            Create Account
          </div>
          <div className={Styles.text}>
            Job List
          </div>
          <div className={Styles.text}>
            FAQ
          </div>
        </div>
        </Col>
        <Col>
        <div className={Styles.header}>
          Employers
        </div>
        <div className={Styles.subHead}>
          <div className={Styles.text}>
            Create Account
          </div>
          <div className={Styles.text}>
            Post a Job
          </div>
          <div className={Styles.text}>
            FAQ
          </div>
        </div>
        </Col>
        <Col>
        <div className={Styles.header}>
          Social Media:
        </div>
        <div className={Styles.iconContainer}>
          <div className={Styles.iconBg}>
            <FiInstagram />
          </div>
          <div className={Styles.iconBg}>
            <FiTwitter />
          </div>
          <div className={Styles.iconBg}>
            <FiFacebook />
          </div>
          <div className={Styles.iconBg}>
            <FiLinkedin />
          </div>
        </div>
        </Col>
      </Row>
      <div className={Styles.copyright}>
        © Copyright Get-A-Job RMS 2019, All right reserved
      </div>
    </Container>
  )
}
