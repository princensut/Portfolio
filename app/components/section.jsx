import React from 'react'
// import './globals.css'

export const Section = () => {
  return (
    <div className='bg-black'>
        <section id="hero" className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 relative overflow-hidden mb-[-2rem]">

  {/* <!-- Background Text --> */}
  <div className="hero-bg-num absolute inset-0 flex items-center justify-center">
    LI
  </div>

  {/* <!-- Content --> */}
  <div className="relative z-10">
    
    <div className="text-yellow-400 text-xs uppercase tracking-widest mb-6 flex items-center gap-4">
      <span className="block w-10 h-[1px] bg-yellow-400"></span>
      Full Stack Developer,
    </div>

    <h1 className="text-5xl md:text-8xl text-white font-extrabold leading-none mb-2">
      Prince <br></br>
      <span className="italic text-yellow-400 font-normal">Kumar.</span>
    </h1>

    <div className="flex flex-col md:flex-row justify-between mt-10 pt-6 border-t border-gray-800 gap-8">
      
      {/* <!-- Left --> */}
      <div>
        <p className="max-w-md hover:text-white hover:text-thin text-gray-400 text-sm leading-relaxed">
          I build fast, scalable, and user-focused web applications using modern technologies. Passionate about solving real-world problems and creating seamless digital experiences.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="#projects" className="  rounded-xs btn-a px-6 py-3 text-xs uppercase border border border-yellow-400 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400">
            View Work
          </a>
          <a href="#contact" className=" rounded-xs border border-gray-700 px-6 py-3 text-xs uppercase hover:border-white transition text-white ">
            Contact
          </a>
        </div>
      </div>

      {/* <!-- Right --> */}
      <div className="text-left md:text-right">
        <div className="italic text-xl text-white">Developer</div>
        <div className="text-xs uppercase text-gray-500 tracking-wider mt-1">
          📍 New Delhi, India 
        </div>
      </div>

    </div>
  </div>
</section>
<div className="mq-wrap border-t-6 border-b-6 border-yellow-400 ">
  <div className="mq-track  ">
     <span className='tag '>UI/UX Design</span>
    <span className='tag'>React</span>
    <span className='tag'>Next.js</span>
    <span className='tag'>Tailwind CSS</span>
    <span className='tag'>CSS</span>
    <span className='tag'>HTML</span>
    <span className='tag'>Javascript</span>
    <span className='tag'>MongoDB</span>
    <span className='tag'>Express.js</span>
    <span className='tag'>Python</span>
    <span className='tag'>Node.js</span>
    <span className='tag'></span>


    {/* <!-- DUPLICATE SAME CONTENT --> */}
    <span className='tag'>UI/UX Design</span>
    <span className='tag'>React</span>
    <span className='tag'>Next.js</span>
    <span className='tag'>Tailwind CSS</span>
    <span className='tag'>CSS</span>
    <span className='tag'>HTML</span>
    <span className='tag'>Javascript</span>
    <span className='tag'>MongoDB</span>
    <span className='tag'>Express.js</span>
    <span className='tag'>Python</span>
    <span className='tag'>Node.js</span>
    <span className='tag'></span>
  </div>
</div>
    </div>
  )
}
