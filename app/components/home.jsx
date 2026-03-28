"use client"
import React from 'react'
import { Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-bebas'
})

// ✅ Move array outside both components (or inside Home)


// ✅ Fixed Marquee component with return

// ✅ Home uses Marquee component + default export
export default function Home() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }} className='bg-black'>
      <div className={`${bebas.variable} my-18 text-[22vh] flex justify-center font-black text-white bg-black`}>
        PRINCE KUMAR
      </div>
      {/* <div className='bg-black '><Marquee /></div> */}
      <div className="abtme">
        
      </div>
    </div>
  )
}