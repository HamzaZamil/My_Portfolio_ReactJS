import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <section id="skills">
      <div className="container-four">
        <div className="title">
          <h1>My Skills</h1>
        </div>
        <div className="list">
          <div className="skill-box">
            <div className="skill-name">
              <div className="icons-one">
                <i className="fa-brands fa-html5 skill-icon"></i>
              </div>
              <h3>HTML 5</h3>
            </div>
            <p>"Structuring web content with semantic elements."</p>
          </div>
          <div className="skill-box">
            <div className="skill-name">
              <div className="icons-one">
                <i className="fa-brands fa-css3-alt skill-icon"></i>
              </div>
              <h3>CSS 3</h3>
            </div>
            <p>"Styling websites with layout and design."</p>
          </div>
          <div className="skill-box">
            <div className="skill-name">
              <div className="icons-one">
                <i className="fa-solid fa-pen skill-icon"></i>
              </div>
              <h3>Script Writing</h3>
            </div>
            <p>"Crafting engaging, compelling scripts for storytelling."</p>
          </div>
          <div className="skill-box">
            <div className="skill-name">
              <div className="icons-one">
                <i className="fa-brands fa-php skill-icon"></i>
              </div>
              <h3>PHP</h3>
            </div>
            <p>"Versatile server-side language for web development."</p>
          </div>
          <div className="skill-box">
            <div className="skill-name">
              <div className="icons-one">
                <i className="fa-brands fa-laravel skill-icon"></i>
              </div>
              <h3>Laravel</h3>
            </div>
            <p>"Elegant PHP framework for modern applications"</p>
          </div>
          <div className="skill-box">
            <div className="skill-name">
              <div className="icons-one">
                <i className="fa-brands fa-react skill-icon"></i>
              </div>
              <h3>React</h3>
            </div>
            <p>"Dynamic JavaScript library for interactive UIs."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
