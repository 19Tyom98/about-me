import React from 'react'
import '../components/About.css'
import Footer from './Footer'
import  '../components/Footer.css'
import { info } from './alllist';
import { LiaMapSolid } from "react-icons/lia";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGlobeEurope } from "react-icons/fa";
import { pick } from './alllist';
import { skyls } from './alllist';
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


export default function About() {
  return (
    <div className='About'>
        <div className="name_block">
            <h1>About Me</h1>
        </div>

        <div className="constructor">
        {
            info.map(item => {
              return <div className="about_information">
                <h2>{item.my_name}</h2>
                <p>{item.info}</p>
                <h3><LiaMapSolid /> {item.adres}</h3>
                <h3><BsTelephoneFill /> {item.number}</h3>
                <h3><IoMdMail /> {item.mail}</h3>
                <h3><FaGlobeEurope /> {item.ip}</h3>
              </div>
            })
        }

        {
          pick.map(it => {
            return <div className="image">
              <img src={it.pickchr} alt="ab_logo" />
            </div>
          })
        }

        {
          skyls.map(sky => {
            return <div className="skills_block">
                <h2>{sky.skyl_name}</h2>
                <p>{sky.inf}</p>
                <h3>{sky.na1} __  <SiHtml5 /> <hr /></h3>
                <h3>{sky.na2} __ <FaCss3 /> <hr /></h3>
                <h3>{sky.na3} __ <FaJsSquare /> <hr /></h3>
                <h3>{sky.na4} __ <FaReact /> <hr /></h3>
            </div>
          })
        }
        </div>
    </div>
  )
}
