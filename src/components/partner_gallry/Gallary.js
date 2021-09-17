import React from 'react'
import Style from './Gallary.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from '../../assets/images/lady1.png'
import Image2 from '../../assets/images/man3.png'
import Image3 from '../../assets/images/man4.png'
export default function Gallary () {
  return (

    <Row className={Style.container}>
      <Col>
      <div className={Style.box}>
        <img className={Style.img} src={Image2} src={Image1} />
        <div className={Style.text}>
          Product Analyst <span>@ Paystack</span>
        </div>
      </div>
      <div className={Style.box}>
        <img className={Style.img} src={Image2} src={Image3} />
        <div className={Style.text}>
          Securities Trader <span>@ Mckinnesy</span>
        </div>
      </div>
      </Col>
      <Col>
      <div className={Style.box}>
        <img className={Style.img} src={Image2} />
        <div className={Style.text}>
          HR Manager<span>@ Paystack</span>
        </div>
      </div>
      </Col>
    </Row>

  )
}
