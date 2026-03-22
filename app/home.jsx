"use client"
import React from 'react'
import { Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-bebas'
})

export const Home = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      
   
      <div
        className={`my-18 text-[22vh] flex justify-center font-black text-white bg-black font-mono`}
      >
        PRINCE KUMAR
      </div>

    </div>
  )
}