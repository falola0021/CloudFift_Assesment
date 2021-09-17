import React from 'react';
import Styles from './Home.module.css';
import Layer from '../../assets/images/layer.png';
import Man1 from '../../assets/images/man1.png';
import PaystackFaded from '../../assets/images/paystackFaded.png';
import GoogleFaded from '../../assets/images/googleFaded.png';
import KpmgFaded from '../../assets/images/kpmgFaded.png';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLocationOutline } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';
import Recommended from '../../components/recommended_jobs/Recommended';
import HowSection from '../../components/how_it_works/HowSection';
import Gallary from '../../components/partner_gallry/Gallary';
import Popular from '../../components/popular_category/Popular';
import Info from '../../components/info_section/Info';
import Testimonia from '../../components/testimonia/Tesimonia';
import Start from '../../components/get_started/Start';
export default function Home() {
  return (
    <div>
      <img className={Styles.layer} src={Layer} />
      <Container>
        <Row xs={1} md={1} lg={2}>
          <Col className={Styles.leftContainer}>
            <div className={Styles.findJob}>
              Find a <span className={Styles.job}>job</span> easily
            </div>
            <div className={Styles.text}>
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </div>
            <div className={Styles.inputBox}>
              <input
                className={Styles.input1}
                placeholder='Enter keywords, skill, interest'
              />
              <IoLocationOutline className={Styles.location} />
              <input className={Styles.input2} placeholder='location' />
              <span className={Styles.searchBox}>
                <BiSearchAlt className={Styles.search} />
              </span>
            </div>
            <div className={Styles.bottomVal}>
              <div className={Styles.trustBy}>Trusted by</div>
              <div className={Styles.trustImageBox}>
                <img
                  className={Styles.trustImagep}
                  src={PaystackFaded}
                  alt='image'
                />
                <img
                  className={Styles.trustImageg}
                  src={GoogleFaded}
                  alt='image'
                />
                <img
                  className={Styles.trustImagek}
                  src={KpmgFaded}
                  alt='image'
                />
              </div>
            </div>
          </Col>
          <Col className={Styles.rightContainer}>
            <div className={Styles.imageBox}>
              <img className={Styles.image} src={Man1} alt='no image' />
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Recommended />
      </div>
      <Container>
        <Row xs={1} md={1} lg={2}>
          <Col>
            <Gallary />
          </Col>
          <Col>
            <HowSection />
          </Col>
        </Row>
        <Popular />
      </Container>
      <Info />
      <Testimonia />
      <Start />
    </div>
  );
}
