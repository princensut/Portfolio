import React from "react";
// import "./globals.css"

export const Stack = () => {
  return (
    <section id="stack">

      {/* HEADER */}
      <div className="rv">
        <div className="slbl" data-n="08">Stack</div>
        <h2 className="stitle">
          Tools I <span className="sr">trust</span>
          <span className="dim">.</span>
        </h2>
      </div>

      {/* GRID */}
      <div
        className="stk-grid rv mt-16"
        style={{ transitionDelay: ".1s" }}
      >

        <div className="stk-item">
          <div className="stk-ico">⚛</div>
          <div>
            <div className="stk-name">React</div>
            <div className="stk-cat">Frontend</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">▲</div>
          <div>
            <div className="stk-name">Next.js</div>
            <div className="stk-cat">Framework</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🔷</div>
          <div>
            <div className="stk-name">TypeScript</div>
            <div className="stk-cat">Language</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🎨</div>
          <div>
            <div className="stk-name">Figma</div>
            <div className="stk-cat">Design</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">💨</div>
          <div>
            <div className="stk-name">Tailwind</div>
            <div className="stk-cat">Styling</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🐘</div>
          <div>
            <div className="stk-name">PostgreSQL</div>
            <div className="stk-cat">Database</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🟢</div>
          <div>
            <div className="stk-name">Node.js</div>
            <div className="stk-cat">Backend</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">☁️</div>
          <div>
            <div className="stk-name">AWS</div>
            <div className="stk-cat">Cloud</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🔺</div>
          <div>
            <div className="stk-name">GraphQL</div>
            <div className="stk-cat">API</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🐙</div>
          <div>
            <div className="stk-name">GitHub</div>
            <div className="stk-cat">Version Control</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🎞</div>
          <div>
            <div className="stk-name">After Effects</div>
            <div className="stk-cat">Motion</div>
          </div>
        </div>

        <div className="stk-item">
          <div className="stk-ico">🐳</div>
          <div>
            <div className="stk-name">Docker</div>
            <div className="stk-cat">DevOps</div>
          </div>
        </div>

      </div>
    </section>
  );
};
