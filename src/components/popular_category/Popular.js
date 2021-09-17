import React from 'react'
import Styles from './Popular.module.css'
import { Row, Col } from 'react-bootstrap'
import Icon1 from '../../assets/icons/oilandgas.png'
import Icon2 from '../../assets/icons/healthcare.png'
import Icon3 from '../../assets/icons/Accounting.png'
import Icon4 from '../../assets/icons/Account.png'
import Icon5 from '../../assets/icons/art-design.png'
import Icon6 from '../../assets/icons/laptop.png'
import Icon7 from '../../assets/icons/surface1.png'
import Icon8 from '../../assets/icons/screen.png'
const data = [
  {
    id: '1',
    icon: Icon1,
    title: 'Oil and Gas ',
    subtitle: ' (20 new jobs )'

  },
  {
    id: '2',
    icon: Icon2,
    title: 'Healthcare',
    subtitle: '(10 new jobs )'

  },
  {
    id: '3',
    icon: Icon3,
    title: 'Education',
    subtitle: '(10 new jobs )'

  },
  {
    id: '4',
    icon: Icon4,
    title: 'Accounting',
    subtitle: '(10 new jobs )'

  },
  {
    id: '5',
    icon: Icon5,
    title: 'Design, Art and Multimedia',
    subtitle: '(20 new jobs )'

  },
  {
    id: '6',
    icon: Icon6,
    title: 'Technology ',
    subtitle: '(10 new jobs )'

  },
  {
    id: '7',
    icon: Icon7,
    title: 'Security',
    subtitle: '(10 new jobs )'

  },
  {
    id: '8',
    icon: Icon8,
    title: 'Data Analyst',
    subtitle: '(10 new jobs )'

  }
]

export default function Popular () {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        Popular Categories
      </div>
      <Row className={Styles.row}>
        {data.map((item, index) => {
           return (
             <Col key={item.id} sm={3} className={Styles.col}>
             <div className={Styles.imgbox}>
               <img className={Styles.img} src={item.icon} alt='img' />
             </div>
             <div className={Styles.title}>
               {item.title}
             </div>
             <div className={Styles.subtitle}>
               {item.subtitle}
             </div>
             </Col>
           )
         })}
      </Row>
    </div>
  )
}
