// "use client"

import "./globals.css";
import { Navbar } from "./components/navbar";
import { Section } from "./components/section";
import About from "./components/about";
import { Skills } from "./components/skills";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { Process } from "./components/process";
import { Stack } from "./components/stack";
import { Last } from "./components/last";
import Effects from "./effects"; // 👈 NEW
import { Contact } from "./components/contact";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <Navbar />

        {/* Client-side animations */}
        <Effects />

        <Section />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Stack />
        <Process />
        {/* <Stack /> */}
        <Contact />
        <Last />
      </body>
    </html>
  );
}