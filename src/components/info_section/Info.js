import React from 'react'
import Style from './Info.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import Image1 from '../../assets/images/Uber.png'
// import Image2 from '../../assets/images/9mobile.png'
// import Image3 from '../../assets/images/Zapier.png'
// import Image4 from '../../assets/images/Airtel.png'
// import Image5 from '../../assets/images/Google1.png'
// import Image6 from '../../assets/images/Accenture.png'
// import Image7 from '../../assets/images/Mckinsey.png'
// import Image8 from '../../assets/images/Flutterwave1.png'

import Partners from '../../assets/images/scshot.png'
import { BsArrowRight } from 'react-icons/bs'
export default function Info () {
  return (

    <Row className={Style.container}>
      <Col>
      <div className={Style.title1}>
        Over 1000+ jobs from top companies in our network
      </div>
      <div className={Style.text1}>
        Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy
        listings here.
      </div>
      <div className={Style.text1}>
        Over 1000+ jobs from top companies in our network Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality
        jobs so you won’t find old, duplicated, or spammy listings here. Organize and automate your job search while at home or on the go. We’ll deliver new, relevant
        jobs of interest straight to your inbox. Learn More
      </div>
      <div className={Style.text1}>
      </div>
      <div className={Style.learn}>
        <div className={Style.learntext}>
          Learn more
        </div>
        <BsArrowRight className={Style.icon} />
      </div>
      </Col>
      <Col>
      <img className={Style.image} src={Partners} />
      {/* <Row className={Style.row}>
                                                                                <Col sm={3}>
                                                                                <img src={Image4} className={Style.image} alt='image' />
                                                                                <img src={Image5} className={Style.image} alt='image' />
                                                                                </Col>
                                                                                <Col sm={2}>
                                                                                <img src={Image1} className={Style.image} alt='image' />
                                                                                <img src={Image2} className={Style.image} alt='image' />
                                                                                <img src={Image3} className={Style.image} alt='image' />
                                                                                </Col>
                                                                                <Col sm={2}>
                                                                                <img src={Image7} className={Style.image} alt='image' />
                                                                                <img src={Image8} className={Style.image} alt='image' />
                                                                                <img src={Image6} className={Style.image} alt='image' />
                                                                                </Col>
                                                                              </Row> */}
      </Col>
    </Row>

  )
}
