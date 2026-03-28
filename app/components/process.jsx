import React from "react";
// import "./globals.css"

export const Process = () => {
  return (
    <section id="process">

      {/* HEADER */}
      <div className="rv">
        <div className="slbl" data-n="05">Process</div>
        <h2 className="stitle">
          How I <span className="sr">work</span><span className="dim">.</span>
        </h2>
      </div>

      {/* STEPS */}
      <div className="proc-steps">

        {/* STEP 1 */}
        <div className="proc-step rv">
          <div className="pstep-n">— 01</div>
          <div>
            <div className="pstep-title">🔍 Discovery & Research</div>
            <p className="pstep-d">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <div className="pstep-tools">
              <span className="ptool">Interviews</span>
              <span className="ptool">Surveys</span>
              <span className="ptool">Analytics</span>
              <span className="ptool">Competitor Analysis</span>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div
          className="proc-step rv"
          style={{ transitionDelay: ".1s" }}
        >
          <div className="pstep-n">— 02</div>
          <div>
            <div className="pstep-title">💡 Ideation & Strategy</div>
            <p className="pstep-d">
              Duis aute irure dolor in reprehenderit...
            </p>

            <div className="pstep-tools">
              <span className="ptool">Moodboards</span>
              <span className="ptool">Sitemap</span>
              <span className="ptool">User Flows</span>
              <span className="ptool">Workshops</span>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div
          className="proc-step rv"
          style={{ transitionDelay: ".2s" }}
        >
          <div className="pstep-n">— 03</div>
          <div>
            <div className="pstep-title">✏️ Design & Prototype</div>
            <p className="pstep-d">
              Ut enim ad minima veniam...
            </p>

            <div className="pstep-tools">
              <span className="ptool">Figma</span>
              <span className="ptool">Wireframes</span>
              <span className="ptool">Hi-Fi Mockups</span>
              <span className="ptool">Prototypes</span>
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div
          className="proc-step rv"
          style={{ transitionDelay: ".3s" }}
        >
          <div className="pstep-n">— 04</div>
          <div>
            <div className="pstep-title">⚙️ Development</div>
            <p className="pstep-d">
              Sed ut perspiciatis unde omnis iste natus error...
            </p>

            <div className="pstep-tools">
              <span className="ptool">React</span>
              <span className="ptool">Next.js</span>
              <span className="ptool">TypeScript</span>
              <span className="ptool">APIs</span>
            </div>
          </div>
        </div>

        {/* STEP 5 */}
        <div
          className="proc-step rv"
          style={{ transitionDelay: ".4s" }}
        >
          <div className="pstep-n">— 05</div>
          <div>
            <div className="pstep-title">🚀 Launch & Iterate</div>
            <p className="pstep-d">
              Nemo enim ipsam voluptatem quia voluptas...
            </p>

            <div className="pstep-tools">
              <span className="ptool">QA Testing</span>
              <span className="ptool">Deployment</span>
              <span className="ptool">Analytics</span>
              <span className="ptool">Feedback loops</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};