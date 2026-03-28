

export const Navbar = () => {
  return (
    
    <div className="fixed top-0 left-0 w-full z-50 bg-black/1 backdrop-blur-md border-white">
      
      <div className="flex justify-between items-center px-10 py-4">
        
        <div className=" text-white">Prince.exe</div>

        <ul className="flex gap-10 font-serif ">
          <li className=" text-white/50 hover:text-white/80">About me</li>
          <li className=" text-white/50 hover:text-white/80">Tech stack</li>
          <li className=" text-white/50 hover:text-white/80">Projects</li>
          <li className=" text-white/50 hover:text-white/80">Resources</li>
        </ul>

        <div className="px-5 py-2 border border-white/30 rounded-full text-white/60 bg-color-transparent hover:text-white hover:border-white transition cursor-pointer">
          Contact
        </div>

      </div>
    </div>
  )
}