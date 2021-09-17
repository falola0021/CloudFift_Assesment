import React from 'react'
import Styles from './HowSection.module.css'
import Check from '../../assets/images/check.png'
const data = [
  {
    id: '1',
    icon: '',
    title: '',
    message: 'Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.'

  },
  {
    id: '2',
    icon: <Check/>,
    title: 'Search Jobs',
    message: 'We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.'

  },
  {
    id: '3',
    icon: <Check/>,
    title: 'Create a Profile and Get Noticed',
    message: 'Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.'

  },

  {
    id: '4',
    icon: <Check/>,
    title: 'Apply for jobs',
    message: ' Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.'

  }
]
export default function HowSection () {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        How it works
      </div>
      {data.map((item, index) => {
         return (
           <div key={item.id} className={Styles.desc}>
             <div className={Styles.descBox}>
               <img src={item.icon && Check} className={Styles.image} />
               <div className={Styles.title}>
                 {item.title && item.title}
               </div>
             </div>
             <div className={Styles.message}>
               {item.message}
             </div>
           </div>
           )
       })}
    </div>
  )
}
