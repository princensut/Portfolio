"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const ring = document.getElementById("curR");

    let mx = 0, my = 0, rx = 0, ry = 0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.left = mx + "px";
        cur.style.top = my + "px";
      }
    };

    document.addEventListener("mousemove", move);

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      requestAnimationFrame(loop);
    };
    loop();

    // Hover effects
    const elements = document.querySelectorAll(
      "a,button,.chip,.pill,.svc,.psm,.tcard,.stk-item,.num-box"
    );

    const onEnter = () => {
      if (cur && ring) {
        cur.style.width = "14px";
        cur.style.height = "14px";
        ring.style.width = "60px";
        ring.style.height = "60px";
      }
    };

    const onLeave = () => {
      if (cur && ring) {
        cur.style.width = "8px";
        cur.style.height = "8px";
        ring.style.width = "36px";
        ring.style.height = "36px";
      }
    };

    elements.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Scroll reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");

          e.target.querySelectorAll(".bar-fill").forEach(b => {
            setTimeout(() => {
              b.style.width = b.dataset.w + "%";
            }, 200);
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".rv").forEach(el => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", move);
      elements.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cur" className="cursor"></div>
      <div id="curR" className="cursor-ring"></div>
    </>
  );
}