import React from 'react'

const Info = () => {
  return (
    <div>
      <div className="relative container mx-auto px-6 py-16 overflow-hidden">
        {/* Simplified Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 3 Main Blobs */}
          <div className="absolute top-1/5 left-1/6 w-24 h-24 rounded-full opacity-20 animate-blob1 bg-gradient-to-br from-green-300 to-blue-400"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-20 animate-blob2 bg-gradient-to-br from-orange-300 to-pink-400"></div>
          <div className="absolute bottom-1/4 left-1/5 w-28 h-28 rounded-full opacity-20 animate-blob3 bg-gradient-to-br from-yellow-300 to-purple-400"></div>
          
          {/* 2 Floating Geometric Shapes */}
          <div className="absolute top-1/6 right-1/5 w-16 h-16 opacity-20 animate-float4 bg-gradient-to-br from-purple-400 to-indigo-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-14 h-14 opacity-20 animate-float5 bg-gradient-to-br from-blue-400 to-cyan-400"></div>
          
          {/* 2 Moving Dots */}
          <div className="absolute top-1/4 right-1/6 w-6 h-6 rounded-full opacity-30 animate-move1 bg-gradient-to-br from-emerald-400 to-teal-400"></div>
          <div className="absolute bottom-1/5 left-1/3 w-8 h-8 rounded-full opacity-30 animate-move2 bg-gradient-to-br from-rose-400 to-red-400"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-12 md:pr-6 text-center md:text-left"> 
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-[#10B6C2]">Qloron</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Experience the power of our comprehensive IT services designed to guarantee your business's resounding success with <span className="text-blue-500 font-semibold">6+ years of experience</span>
            </p>
            
            <div className="text-gray-600 space-y-4">
              <p>
                <span className="text-indigo-600 font-bold">Qloron Technology</span>: <span className="text-purple-600">Empowering Success</span> through <span className="text-pink-600">Innovative IT Solutions</span>, Qloron Technology is a leading IT company based in Hyderabad, India.
              </p>
              <p>
                With a strong commitment to <span className="text-green-600 font-medium">excellence</span> and a passion for <span className="text-yellow-600 font-medium">technology</span>, we specialize in providing exceptional <span className="text-red-500 font-medium">software development</span> and <span className="text-teal-500 font-medium">outsourcing services</span> to clients worldwide.
              </p>
              <p>
                Our goal is to <span className="text-blue-600 font-medium">empower businesses</span> with innovative solutions that drive <span className="text-orange-500 font-medium">growth</span>, <span className="text-purple-500 font-medium">efficiency</span>, and <span className="text-green-500 font-medium">success</span>.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://qloron.com/assets/work-4m47bs_I.svg" 
              alt="About Qloron" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Blob animations */
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -30px) scale(1.1); }
          50% { transform: translate(30px, 40px) scale(0.9); }
          75% { transform: translate(-20px, 20px) scale(1.05); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 30px) scale(1.2); }
          50% { transform: translate(20px, -20px) scale(0.8); }
          75% { transform: translate(30px, 30px) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.15); }
          50% { transform: translate(-30px, 20px) scale(0.85); }
          75% { transform: translate(20px, 40px) scale(1.05); }
        }
        
        /* Floating animations */
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px) rotate(90deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 30px) rotate(180deg); }
        }
        
        /* Moving dot animations */
        @keyframes move1 {
          0% { transform: translate(0, 0); }
          25% { transform: translate(40px, 20px); }
          50% { transform: translate(20px, 40px); }
          75% { transform: translate(-20px, 30px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes move2 {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-30px, 20px); }
          50% { transform: translate(20px, -30px); }
          75% { transform: translate(30px, 20px); }
          100% { transform: translate(0, 0); }
        }
        
        /* Applying animations */
        .animate-blob1 { animation: blob1 8s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 10s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 6s ease-in-out infinite; }
        .animate-float5 { animation: float5 7s ease-in-out infinite; }
        .animate-move1 { animation: move1 15s linear infinite; }
        .animate-move2 { animation: move2 18s linear infinite; }
      `}</style>
    </div>
  )
}

export default Info;