import React, { useEffect } from 'react';
import './Contact.css';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
  const img = [{ img: '/images/Usimg.png' }];

  const contact_col = [
    { logo: <BsTelephone />, name: 'Phone Number', ipee: '+374 41130297' },
    { logo: <AiOutlineMail />, name: 'Email Address', ipee: 'ghukasyantyom79@gmail.com' },
    { logo: <FaWhatsapp />, name: 'Whatsapp', ipee: '+374 41130297' },
    { logo: <IoLocationOutline />, name: 'Our Office', ipee: 'Republic of Armenia' },
  ];

  const get_in = [{
    ver: 'Contact ME',
    verif: 'Get In Touch',
    name: 'Name',
    surname: 'Surname',
    emile: 'Email',
    massage: 'Message'
  }];

  useEffect(() => {
    const elements = [...document.querySelectorAll('.contact-name, .contact-surname, .contact-email, .contact-message, .text, .inputs_block, .col_block, .col_mass, .text_block, .info_block, .maps, button')];
    const pickchar = document.querySelector('.pickchar');

    setTimeout(() => {
      elements.forEach(el => {
        if (!el) return;
        el.style.translate = 'none';
        el.style.transform = 'rotate(0deg)';
      });
      if (pickchar) {
        setTimeout(() => {
          pickchar.style.transform = 'translateY(0)';
        }, 2500);
      }
    }, 1000);
  }, []);

  return (
    <div className='contact_block'>
      {img.map((item, index) => (
        <div className="pickchar" key={index}>
          <img src={item.img} alt="Contact" />
          <h2>Contact ME</h2>
        </div>
      ))}

      <div className="contact_container">
        {get_in.map((get, index) => (
          <div className="inputs_block" key={index}>
            <div className="text">
              <h3>{get.ver}</h3>
              <h2>{get.verif}</h2>
            </div>

            <div className="contact-name">
              <p>{get.name}</p>
              <input type="text" placeholder='Your Name' />
            </div>
            <div className="contact-surname">
              <p>{get.surname}</p>
              <input type="text" placeholder='Your Surname' />
            </div>
            <div className="contact-email">
              <p>{get.emile}</p>
              <input type="email" placeholder='Your Email' />
            </div>
            <div className="contact-message">
              <p>{get.massage}</p>
              <textarea placeholder='Message'></textarea>
            </div>
            <button>Send Now</button>
          </div>
        ))}

        <div className="col_block">
          <div className="text_block">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas est eligendi...</p>
          </div>

          <div className="col_mass">
            {contact_col.map((col, index) => (
              <div className="info_block" key={index}>
                {col.logo}
                <h3>{col.name}</h3>
                <p>{col.ipee}</p>
              </div>
            ))}
          </div>

          <div className="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d390336.17246012646!2d44.488567!3d40.15339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1746471379093!5m2!1sru!2sam" width="600" height="450"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
