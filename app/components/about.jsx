import React from 'react'
// import "./globals.css";

export default function About() {
  return (
    <section id="about ">
      <div className='flex justify-between'>
      <div className="rv w-[45vw]">
        
        <div className="slbl" data-n="01">About</div>

        <h2 className="stitle">
          Who I <span className="sr">am</span>
          <span className="dim">.</span>
        </h2>

        <p className="atext">
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          <strong>Excepteur sint occaecat cupidatat non proident</strong>, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Sed ut perspiciatis unde omnis iste natus error.
        </p>

        <div className="aquote">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit."
        </div>

        <p className="atext" style={{ marginTop: 0 }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>

        {/* TAGS */}
        <div className="atags">
          <span className="pill">Problem Solver</span>
          <span className="pill">Detail-Oriented</span>
          <span className="pill">Systems Thinker</span>
          <span className="pill">Creative</span>
          <span className="pill">Collaborative</span>
          <span className="pill">Fast Learner</span>
          <span className="pill">Empathetic</span>
        </div>

      </div>

      {/* SECOND BLOCK */}
      <div className="rv  w-[45vw]" style={{ transitionDelay: ".15s" }}>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-n">5<sup>+</sup></div>
            <div className="stat-l">Years Experience</div>
          </div>

          <div className="stat-box">
            <div className="stat-n">40<sup>+</sup></div>
            <div className="stat-l">Projects Done</div>
          </div>

          <div className="stat-box">
            <div className="stat-n">20<sup>+</sup></div>
            <div className="stat-l">Happy Clients</div>
          </div>

          <div className="stat-box">
            <div className="stat-n">8</div>
            <div className="stat-l">Awards Won</div>
          </div>
        </div>
        <div className="exp-list">
      <div className="exp-item">
        <div className="exp-top"><span className="exp-role">ScamCallerLLM</span><span className="exp-yr"> 13 – 14 Mar</span></div>
        <div className="exp-co">Hack4Impact, IIIT Delhi</div>
        <div className="exp-d">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div className="exp-item">
        <div className="exp-top"><span name="exp-role">HomieSplit</span><span className="exp-yr">2020 – 2022</span></div>
        <div className="exp-co">PAYLOAD'26, IGTUW</div>
        <div className="exp-d">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
      </div>
      <div className="exp-item">
        <div className="exp-top"><span className="exp-role">ONOE Saksham</span><span className="exp-yr"> 5 – 12 Jan</span></div>
        <div className="exp-co">Hack4Delhi</div>
        <div className="exp-d">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</div>
      </div>
      
     </div>
     </div>
    </div>
    </section>
  )
}