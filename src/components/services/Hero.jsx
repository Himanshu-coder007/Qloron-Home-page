import React from 'react'

const Hero = () => {
  return (
    <div 
      className="relative h-[60vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15660.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-[#0DAAB8] opacity-70"></div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="px-[40px] py-[10px] text-white text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WE PROVIDE WIDE RANGE OF CREATIVE SERVICES</h1>
          <button className="mt-8 bg-white text-[#0DABBA] px-6 py-3 rounded-md font-semibold w-fit hover:bg-opacity-90 transition cursor-pointer">
            Free Consulation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;