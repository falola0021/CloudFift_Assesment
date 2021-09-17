import React, { useRef } from 'react'
import Styles from './Testimonia.module.css'
import { Container } from 'react-bootstrap'
import Paystack from '../../assets/images/paystack.png'
import Paystack2 from '../../assets/images/paystack2.png'
import Google from '../../assets/images/google.png'
import Fluetterwave from '../../assets/images/hr.png'
import Access from '../../assets/images/accessbank.jpeg'
import Testimonia11 from '../../assets/images/testimonia.png'
import Tag from '../../assets/images/tag.png'
import Slider from 'react-slick'
// import { IoLocationOutline } from 'react-icons/io5'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
const testimonia = [
  {
    id: '1',
  
    name: 'Irma Black',
    role: 'HR Manager at MasterCard',
    testimony: 'The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me',
    picture: Tag

  },
  {
    id: '2',
  
    name: 'Jayson Roy',
    role: 'HR Manager at First Bank',
    testimony: 'The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me',
    picture: Tag

  },
  {
    id: '3',
  
    name: 'Allen Matt',
    role: 'HR Manager at First Bank',
    testimony: 'The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me',
    picture: Tag

  },
  
  
]

export default function Testimonia () {
  const slider = useRef()

  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Container className={Styles.container}>
      <div className={Styles.title}>
        What are our customers
        <br/> saying
      </div>
      
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {testimonia.map((testimony, index) => {
           return (
             <div key={testimony.id}>
               <div className={Styles.cardContainer}>
                 <img className={Styles.image} src={Testimonia11} />
                 <div className={Styles.namebox}>
                   <img className={Styles.tag} src={testimony.picture} />
                   <div className={Styles.testimony}>
             {testimony.testimony}
                   </div>
                   <div className={Styles.name}>
                       {testimony.name}
                   </div>
                   <div className={Styles.role}>
                      {testimony.role}
                   </div>
                 </div>
                 
               </div>
             </div>
           )
         })}
         
      </Slider>
      <div className={Styles.arrowContainer}>
                   <div className={Styles.arrowLeft} onClick={previous}>
                     <BsArrowLeft/>
                    
                   </div>
                    <div className={Styles.arrowRight} onClick={next}>
                       <BsArrowRight/>
                     </div>
                 </div>
    </Container>
  )
}
