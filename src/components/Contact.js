import React, { useEffect } from 'react'
import './Contact.css'
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
  const img = [{img : './images/Usimg.png'}]
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
]

 const get_in = [
  {
      ver : 'Contact ME',
      verif : 'Get In Touch',
      name : 'Name',
      surname : 'Surname',
      emile : 'Email',
      massage : 'Message'
  }
]
  useEffect(() => {
    const styls = [
      document.querySelector('.name'),
      document.querySelector('.surname'),
      document.querySelector('.emile'),
      document.querySelector('.massage')
    ];
    const text = [
      document.querySelector('.text'),
      document.querySelector('.inputs_block'),
      document.querySelector('button')
    ];
    const coll = [
      document.querySelector('.col_block'),
      document.querySelector('.text_block'),
      document.querySelector('.col_mass'),
      ...document.querySelectorAll('.info_block'),
    ];
    const maps = [document.querySelector('.maps')]
    const pickchar = document.querySelector('.pickchar')
  
     setTimeout(() => {
      styls.forEach(elem => {
        elem.style.translate = 'none';
      });
      text.forEach(texts => {
        texts.style.translate = ('none');
        texts.style.transform = 'rotate(0deg)'
      });
      coll.forEach(col => {
        col.style.translate = ('none')
        col.style.transform = 'rotate(0deg)'
      });
      maps.forEach(map => {
        map.style.translate = ('none')
      });
      setTimeout(() => {
        pickchar.style.transform = 'translateY(0)'
      },2500)
     }, 1000);
  },[])

  return (
  <div className='contact_block'>
        {
          img.map(item => {
            return <div className="pickchar">
              <img src={item.img}alt="img" />
              <h2>Contact ME</h2>
            </div>
          })
        }
      <div className="contact_container">
          {
            get_in.map(get => {
              return <div className="inputs_block">
                <div className="text">
                  <h3>{get.ver}</h3>
                  <h2>{get.verif}</h2>
                  </div>
                  <div className="name">
                  <p>{get.name}</p>
                  <input type="text" placeholder='Your Name'/>
                  </div>
                  <div className="surname">
                  <p>{get.surname}</p>
                  <input type="text" placeholder='Your Surname'/>
                  </div>
                  <div className="emile">
                  <p>{get.emile}</p>
                  <input type="email" placeholder='Your Emaile'/>
                  </div>
                  <div className="massage">
                  <p>{get.massage}</p>
                  <textarea name="" placeholder='Massage'></textarea>
                  </div>
                  <button>Send Now</button>
              </div>
            })
          }
          <div className="col_block">
              <div className="text_block">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas est eligendi. Soluta et veritatis inventore fuga est. Inventore cumque aliquam iste minus quod <br /> voluptates at totam dolorem odio mollitia.</p>
              </div>
              <div className="col_mass">
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
              <div className="maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97584.0845024795!2d44.40616693897968!3d40.1533611969188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1740839062090!5m2!1sru!2sam" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
      </div>
    </div>
  )
}

