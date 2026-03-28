import React from 'react'
// import "./globals.css"
export const Projects = () => {
  return (
    <section id="projects">

      {/* HEADER */}
      <div className="proj-hdr rv">
        <div>
          <div className="slbl" data-n="04">Work</div>
          <h2 className="stitle">
            Selected <span className="sr">projects</span><span className="dim">.</span>
          </h2>
        </div>
        <a href="#">View all →</a>
      </div>

      {/* FEATURE 1 */}
      <div className="pfeat rv">
        <div className="pfeat-img">
          <div className="pfeat-nbg">01</div>
          <div className="pbadge">Featured</div>
        </div>

        <div className="pfeat-info">
          <div>
            <div className="pmeta">2025 — Brand & Digital</div>
            <div className="ptitle">Project Alpha — Full Rebrand</div>
            <div className="pdesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>

            <div className="ptags">
              <span className="ptag">Figma</span>
              <span className="ptag">React</span>
              <span className="ptag">Brand Identity</span>
              <span className="ptag">Motion</span>
            </div>
          </div>

          <a href="#" className="plink">View Case Study →</a>
        </div>
      </div>

      {/* FEATURE 2 (RTL FIXED) */}
      <div
        className="pfeat rv mt-[1px]"
        style={{ direction: "rtl" }}
      >
        <div
          className="pfeat-img"
          style={{ background: "var(--bg3)", direction: "ltr" }}
        >
          <div
            className="pfeat-nbg"
            style={{ color: "rgba(255,255,255,.03)" }}
          >
            02
          </div>

          <div
            className="pbadge"
            style={{ left: "auto", right: "1.5rem" }}
          >
            UI/UX
          </div>
        </div>

        <div
          className="pfeat-info"
          style={{ direction: "ltr" }}
        >
          <div>
            <div className="pmeta">2024 — Product Design</div>
            <div className="ptitle">Project Beta — SaaS Dashboard</div>
            <div className="pdesc">
              Duis aute irure dolor in reprehenderit...
            </div>

            <div className="ptags">
              <span className="ptag">Next.js</span>
              <span className="ptag">TypeScript</span>
              <span className="ptag">Design System</span>
            </div>
          </div>

          <a href="#" className="plink">View Case Study →</a>
        </div>
      </div>

      {/* FEATURE 3 */}
      <div className="pfeat rv mt-[1px]">
        <div
          className="pfeat-img"
          style={{ background: "#0f0f0f" }}
        >
          <div className="pfeat-nbg">03</div>
          <div className="pbadge">Mobile App</div>
        </div>

        <div className="pfeat-info">
          <div>
            <div className="pmeta">2024 — Mobile Design</div>
            <div className="ptitle">Project Gamma — iOS App</div>
            <div className="pdesc">
              Ut enim ad minima veniam...
            </div>

            <div className="ptags">
              <span className="ptag">iOS</span>
              <span className="ptag">Figma</span>
              <span className="ptag">Swift UI</span>
              <span className="ptag">Prototype</span>
            </div>
          </div>

          <a href="#" className="plink">View Case Study →</a>
        </div>
      </div>

      {/* SMALL GRID */}
      <div className="pg-sm rv mt-[1px]">

        {/* CARD 1 */}
        <div className="psm">
          <div className="psm-thumb">
            <div className="psm-n">04</div>
            <div className="psm-b">Web</div>
          </div>

          <div className="psm-t">Project Delta</div>
          <div className="psm-d">Lorem ipsum dolor sit amet...</div>

          <div className="psm-tags">
            <span className="psm-tag">React · Node.js · GraphQL</span>
          </div>

          <a href="#" className="plink text-[0.62rem] mt-4">Open →</a>
        </div>

        {/* CARD 2 */}
        <div className="psm">
          <div
            className="psm-thumb"
            style={{ background: "var(--bg4)" }}
          >
            <div className="psm-n">05</div>
            <div className="psm-b">Brand</div>
          </div>

          <div className="psm-t">Project Epsilon</div>
          <div className="psm-d">Duis aute irure dolor...</div>

          <div className="psm-tags">
            <span className="psm-tag">Illustrator · Brand · Print</span>
          </div>

          <a href="#" className="plink text-[0.62rem] mt-4">Open →</a>
        </div>

        {/* CARD 3 */}
        <div className="psm">
          <div
            className="psm-thumb"
            style={{
              background: "linear-gradient(135deg,#1a1a1a,#111)"
            }}
          >
            <div className="psm-n">06</div>
            <div className="psm-b">Motion</div>
          </div>

          <div className="psm-t">Project Zeta</div>
          <div className="psm-d">Excepteur sint occaecat...</div>

          <div className="psm-tags">
            <span className="psm-tag">After Effects · Lottie · Web</span>
          </div>

          <a href="#" className="plink text-[0.62rem] mt-4">Open →</a>
        </div>

      </div>

    </section>
  )
}
