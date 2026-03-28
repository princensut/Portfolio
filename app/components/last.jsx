import React from 'react'
// import "./globals.css"

export const Last = () => {
  return (
    <footer>
      <div className="ft-top">
        <div className="ft-logo">
          Lorem <span>Ipsum</span>
        </div>

        <ul className="ft-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="ft-bot">
        <div className="ft-copy">
          © 2026 Lorem Ipsum. All rights reserved.
        </div>

        <div className="ft-made">
          Designed &amp; built with <span>♥</span> in New York
        </div>
      </div>
    </footer>
  )
}