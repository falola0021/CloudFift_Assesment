import React, { useRef } from 'react'
import Styles from './Recommended.module.css'
import { Container } from 'react-bootstrap'
import Paystack from '../../assets/images/paystack.png'
import Paystack2 from '../../assets/images/paystack2.png'
import Google from '../../assets/images/google.png'
import Fluetterwave from '../../assets/images/hr.png'
import Access from '../../assets/images/accessbank.jpeg'
import Slider from 'react-slick'
import { IoLocationOutline } from 'react-icons/io5'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
const jobs = [
  {
    id: '1',
    job: 'Full time',
    image: Paystack,
    jobType: 'QA Engineer',
    company: 'Paystack',
    apply: 'false',
    address: 'Lagos, Nigeria'

  },
  {
    id: '2',
    job: 'Part time',
    image: Google,
    jobType: 'Product Analyst',
    company: 'Google',
    apply: 'true',
    address: 'Lagos, Nigeria'

  },
  {
    id: '3',
    job: 'Full time',
    image: Fluetterwave,
    jobType: 'HR Manager',
    company: 'Flutterwave',
    apply: 'false',
    address: 'Lagos, Nigeria'

  },
  {
    id: '4',
    job: 'Part time',
    image: Access,
    jobType: 'QA Engineer',
    company: 'Access Bank',
    apply: 'true',
    address: 'Lagos, Nigeria'

  },
  {
    id: '5',
    job: 'Pary time',
    image: Paystack2,
    jobType: 'QA Engineer',
    company: 'Paystack',
    apply: 'false',
    address: 'Lagos, Nigeria'

  },
  {
    id: '6',
    job: 'Part time',
    image: Google,
    jobType: 'Product Analyst',
    company: 'Google',
    apply: 'true',
    address: 'Lagos, Nigeria'

  },
  {
    id: '7',
    job: 'Full time',
    image: Fluetterwave,
    jobType: 'HR Manager',
    company: 'Flutterwave',
    apply: 'false',
    address: 'Lagos, Nigeria'

  },
  {
    id: '8',
    job: 'Full time',
    image: Access,
    jobType: 'QA Engineer',
    company: 'Access Bank',
    apply: 'false',
    address: 'Lagos, Nigeria'

  }
]

export default function Recommended () {
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
    slidesToShow: 4,
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
        Recommended Jobs
      </div>
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {jobs.map((job, index) => {
           return (
             <div key={job.id} className={Styles.cardContainer}>
               <div className={Styles.card}>
                 <div className={Styles.part1}>
                   <div className={Styles.fulltime}>
                     {job.job}
                   </div>
                   <div className={Styles.image}>
                     < img className={Styles.img} src={job.image} alt='image' />
                   </div>
                   <div className={Styles.name}>
                     QA ENGINEER
                   </div>
                 </div>
                 <div className={Styles.part2}>
                   <div className={Styles.companyName}>
                     {job.company}
                   </div>
                   <div className={Styles.locationInfo}>
                     <div className={Styles.iconbox}>
                       <IoLocationOutline className={Styles.icon} />
                       <div className={Styles.address}>
                         {job.address}
                       </div>
                     </div>
                     <div className={job.apply == 'true' ? Styles.bg : Styles.nobg}>
                       Appply now
                     </div>
                   </div>
                 </div>
               </div>
             </div>)
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
