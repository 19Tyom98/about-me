import React from 'react';
import { list, img } from './alllist';
import About from './About';

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3>Hello, 👋 It's Me</h3>
        <h1>Artyom Ghukasyan</h1>
        <h3>And I'm a Frontend Developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, voluptates ipsa! 
          Quae explicabo eius tempora sapiente non? Minima unde dignissimos earum velit.
        </p>

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
