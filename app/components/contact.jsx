"use client";
import React, { useState } from "react";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact">

      {/* LEFT SIDE */}
      <div className="rv">
        <div className="slbl" data-n="10">Contact</div>

        <h2 className="stitle">
          Let's <span className="sr">build</span><br />
          <span className="dim">something.</span>
        </h2>

        <div className="c-avail">
          <div className="dot"></div>
          Open to new projects
        </div>

        <a href="mailto:hello@loremipsum.com" className="c-email">
          hello@loremipsum.com
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="rv" style={{ transitionDelay: ".15s" }}>

        {/* form fields (same as yours) */}

        <button
          onClick={handleClick}
          className={`f-btn ${sent ? "bg-green-400" : ""}`}
        >
          {sent ? "Message Sent ✓" : "Send Message ↗"}
        </button>

      </div>
    </section>
  );
};