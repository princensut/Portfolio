import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Home } from "./home";

import { Poppins } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '900'] })

const bebas = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: '400' 
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={poppins.className}>
        
        <Navbar />
        
        <Home />
        
        {/* ✅ important for routing */}
        {children}
        
        <Footer />

      </body>
    </html>
  );
}