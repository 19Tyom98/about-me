import React from 'react'
import './Contact.css'
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";



export default function Contact() {

 const contact_col = [
    {
        logo : <BsTelephone />,
        name : 'Phone Number',
        ipee : '+374 41130297'
    },
    {
        logo : <AiOutlineMail />,
        name : 'Email Address',
        ipee : 'ghukasyantyom79@gmail.com'
    },
    {
    logo : <FaWhatsapp />,
    name : 'Whatsapp',
    ipee : '+374 41130297'
    },
    {
    logo : <IoLocationOutline />,
    name : 'Our Office',
    ipee : 'Respublic Of Armenia'
    },
];

const nkar2 = [{ nkar : 'https://c0.wallpaperflare.com/preview/912/739/608/black-coffee-break-break-time-brewed-coffee.jpg' }];


  return (
    <div className='contact_block'>
      <div className="name_page">
        <h1>Contact Me</h1>
      </div>

      <div className="constructor_block">
      <div className="text_contact">
        <h2>Hello World</h2>
        <p>Thank you for visiting my website. If you have any questions, suggestions, or simply wish to get in touch, I am always ready to hear from you. Your feedback is truly important to me, as it helps me grow, improve my services, and create a better experience for every visitor.

I am here to help—whether you are looking to collaborate, request a service, need technical support, or are just curious about my work.
Getting in touch is easy: simply use the contact details below.</p>
       </div>

       {
        nkar2.map(ite => {
          return <div className="pickchar">
            <img src={ite.nkar} alt="img" />
          </div>
        })
       }

        <div className="images">
             {
                 contact_col.map(col => {
                  return <div className="info_block">
                      {col.logo}
                      <h3>{col.name}</h3>
                      <p>{col.ipee}</p>
                  </div>
                 })
              }
       </div>
      </div>
    </div>
  )
}








