import React from "react";
// import "./globals.css";

export const Skills = () => {
  return (
    <section id="skills">
      
      <div className="rv">
        <div className="slbl" data-n="02">Skills</div>
        <h2 className="stitle">
          What I <span className="sr">do</span>
          <span className="dim">.</span>
        </h2>
      </div>

      <div className="skills-lay">
        
        {/* LEFT SIDE */}
        <div className="rv" style={{ transitionDelay: ".1s" }}>
          <p className="skill-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna — a full-spectrum creative technologist.
          </p>

          <div className="bars">

            {[
              { name: "UI / UX Design", val: 95 },
              { name: "Frontend Development", val: 90 },
              { name: "Brand & Identity", val: 85 },
              { name: "Motion Design", val: 78 },
              { name: "Creative Direction", val: 88 },
              { name: "Photography", val: 72 },
            ].map((item, i) => (
              <div className="bar-item" key={i}>
                <div className="bar-top">
                  <span className="bar-name">{item.name}</span>
                  <span className="bar-pct">{item.val}%</span>
                </div>

                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${item.val}%` }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cats rv" style={{ transitionDelay: ".2s" }}>

          <div className="cat mt-[-8rem]">
            {/* <div className="cat-h">
              <span className="cat-n">Design Tools</span>
              <span className="cat-c">8 tools</span>
            </div>
            <div className="chips">
              <span className="chip on">Figma</span>
              <span className="chip">Adobe XD</span>
              <span className="chip">Sketch</span>
              <span className="chip">Illustrator</span>
              <span className="chip">Photoshop</span>
              <span className="chip">After Effects</span>
              <span className="chip on">Framer</span>
              <span className="chip">Webflow</span>
            </div>
          </div> */}</div>

          <div className="cat">
            <div className="cat-h">
              <span className="cat-n">Development</span>
              <span className="cat-c">10 tools</span>
            </div>
            <div className="chips">
              <span className="chip on">React</span>
              <span className="chip on">Next.js</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Node.js</span>
              <span className="chip">TailwindCSS</span>
              <span className="chip">GraphQL</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">Git</span>
              <span className="chip">Docker</span>
              <span className="chip">AWS</span>
            </div>
          </div>

          <div className="cat">
            <div className="cat-h">
              <span className="cat-n">Soft Skills</span>
              <span className="cat-c">6 skills</span>
            </div>
            <div className="chips">
              <span className="chip">Leadership</span>
              <span className="chip">Communication</span>
              <span className="chip on">Collaboration</span>
              <span className="chip">Time Management</span>
              <span className="chip">Critical Thinking</span>
              <span className="chip">Mentoring</span>
            </div>
          </div>

          <div className="cat">
            <div className="cat-h">
              <span className="cat-n">Languages</span>
              <span className="cat-c">4</span>
            </div>
            <div className="chips">
              <span className="chip on">English — Native</span>
              <span className="chip">Spanish — B2</span>
              <span className="chip">French — A2</span>
              <span className="chip">German — A1</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};