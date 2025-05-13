import React from 'react';
import { list, img } from './alllist';
import { write } from './alllist';

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3>Hello, 👋 It's Me</h3>
        <h1>Artyom Ghukasyan</h1>
        <h3>And I'm a Frontend Developer</h3>
       {
        write.map(wr => {
          return <p>  Hello, I am Artyom, and I am Front End developer specializing in both front-end and back-end programming. My goal is to create efficient, user-friendly, and visually appealing websites and applications that best meet user requirements.</p>
        })
       }
        <div className="item_block">
          {list.map((item, index) => (
            <a key={index} href={item.web} target="_blank" rel="noopener noreferrer">
              {item.ico}
            </a>
          ))}
        </div>

        <a href="/path/to/cv.pdf" download>
          <button>Download CV</button>
        </a>
      </div>

      <div className="my_pictures">
        {img.map((im, index) => (
          <img key={index} src={im.pic} alt="Profile" />
        ))}
      </div>
    </div>
  );
}
