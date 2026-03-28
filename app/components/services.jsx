import React from "react";
// import "./globals.css"

export const Services = () => {
  return (
    <section id="services">

      <div className="rv">
        <div className="slbl" data-n="03">Services</div>
        <h2 className="stitle">
          What I <span className="sr">offer</span>
          <span className="dim">.</span>
        </h2>
      </div>

      <div className="svc-grid">

        <div className="svc rv">
          <div className="svc-num">01</div>
          <span className="svc-icon">◈</span>
          <div className="svc-t">UI / UX Design</div>
          <div className="svc-d">Lorem ipsum dolor sit amet...</div>
          <ul className="svc-list">
            <li>User research & personas</li>
            <li>Wireframing & prototyping</li>
            <li>Usability testing</li>
            <li>Design systems</li>
            <li>Interaction design</li>
          </ul>
        </div>

        <div className="svc rv" style={{ transitionDelay: ".1s" }}>
          <div className="svc-num">02</div>
          <span className="svc-icon">⬡</span>
          <div className="svc-t">Web Development</div>
          <div className="svc-d">Duis aute irure dolor...</div>
          <ul className="svc-list">
            <li>React / Next.js apps</li>
            <li>Responsive interfaces</li>
            <li>Performance optimization</li>
            <li>API integration</li>
            <li>CMS & eCommerce</li>
          </ul>
        </div>

        <div className="svc rv" style={{ transitionDelay: ".2s" }}>
          <div className="svc-num">03</div>
          <span className="svc-icon">❋</span>
          <div className="svc-t">Brand Identity</div>
          <div className="svc-d">Excepteur sint occaecat...</div>
          <ul className="svc-list">
            <li>Logo & visual identity</li>
            <li>Brand guidelines</li>
            <li>Typography systems</li>
            <li>Color strategy</li>
            <li>Brand collateral</li>
          </ul>
        </div>

        <div className="svc rv" style={{ transitionDelay: ".3s" }}>
          <div className="svc-num">04</div>
          <span className="svc-icon">◎</span>
          <div className="svc-t">Motion Design</div>
          <div className="svc-d">Ut enim ad minim veniam...</div>
          <ul className="svc-list">
            <li>UI micro-animations</li>
            <li>Explainer videos</li>
            <li>Lottie animations</li>
            <li>CSS / GSAP motion</li>
            <li>After Effects</li>
          </ul>
        </div>

        <div className="svc rv" style={{ transitionDelay: ".4s" }}>
          <div className="svc-num">05</div>
          <span className="svc-icon">◉</span>
          <div className="svc-t">Creative Direction</div>
          <div className="svc-d">Sed ut perspiciatis unde...</div>
          <ul className="svc-list">
            <li>Campaign concepting</li>
            <li>Art direction</li>
            <li>Team leadership</li>
            <li>Pitch decks</li>
            <li>Visual storytelling</li>
          </ul>
        </div>

        <div className="svc rv" style={{ transitionDelay: ".5s" }}>
          <div className="svc-num">06</div>
          <span className="svc-icon">✦</span>
          <div className="svc-t">Consulting</div>
          <div className="svc-d">Nemo enim ipsam voluptatem...</div>
          <ul className="svc-list">
            <li>Design audits</li>
            <li>Product strategy</li>
            <li>Team workshops</li>
            <li>Roadmap planning</li>
            <li>1-on-1 mentoring</li>
          </ul>
        </div>

      </div>
    </section>
  );
};