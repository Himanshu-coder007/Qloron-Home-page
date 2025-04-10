// Stack.js
import React from "react";

// Technologies with names and CORS-friendly image URLs
const mobileTech = [
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#61DAFB",
  },
  {
    name: "JAVA",
    image:
      "https://qloron.com/assets/java-B1cugfie.svg",
    bgColor: "#FFFFFF",
    textColor: "#049EF4",
  },
  {
    name: "Kotlin",
    image:
      "https://qloron.com/assets/kotlin-DU8Eh2UU.svg",
    bgColor: "#FFFFFF",
    textColor: "#339933",
  },
  {
    name: "Flutter",
    image:
      "https://qloron.com/assets/flutter-BGBtcDqw.svg",
    bgColor: "#FFFFFF",
    textColor: "#02569B",
  },
  {
    name: "Ionic",
    image:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%3e%3cpath%20d='M50%2025C50%2038.8071%2038.8071%2050%2025%2050C11.1929%2050%200%2038.8071%200%2025C0%2011.1929%2011.1929%200%2025%200C38.8071%200%2050%2011.1929%2050%2025ZM4.47619%2025C4.47619%2036.335%2013.665%2045.5238%2025%2045.5238C36.335%2045.5238%2045.5238%2036.335%2045.5238%2025C45.5238%2013.665%2036.335%204.47619%2025%204.47619C13.665%204.47619%204.47619%2013.665%204.47619%2025Z'%20fill='%23478AFF'/%3e%3ccircle%20cx='24.9998'%20cy='25.0001'%20r='8.33333'%20fill='%23478AFF'/%3e%3ccircle%20cx='40.0002'%20cy='7.49992'%20r='3.66667'%20fill='%23478AFF'%20stroke='white'/%3e%3c/svg%3e",
    bgColor: "#FFFFFF",
    textColor: "#FFCA28",
  },
  {
    name: "Dart",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/1024px-Dart-logo.png",
    bgColor: "#FFFFFF",
    textColor: "#0083C9",
  },
];

const webTech = [
  {
    name: "HTML",
    image:
      "https://qloron.com/assets/html-BYrraOFD.svg",
    bgColor: "#FFFFFF",
    textColor: "#E44D26",
  },
  {
    name: "CSS",
    image:
      "https://qloron.com/assets/css-CcNQHZyi.svg",
    bgColor: "#FFFFFF",
    textColor: "#264DE4",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#F0DB4F",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#61DAFB",
  },
  {
    name: "Angular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#DD0031",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#3178C6",
  },
  {
    name: "Material Design",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/1200px-Google_Material_Design_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#757575",
  },
  {
    name: ".NET",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#512BD4",
  },
];

const desktopTech = [
  {
    name: "Angular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#B52E31",
  },
  {
    name: "Java",
    image:
      "https://qloron.com/assets/java-B1cugfie.svg",
    bgColor: "#FFFFFF",
    textColor: "#007396",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#61DAFB",
  },
  {
    name: ".NET",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#512BD4",
  },
];

const backendTech = [
  {
    name: "Node Js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#339933",
  },
  {
    name: "PHP",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#777BB4",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#3776AB",
  },
  {
    name: "SQL",
    image:
      "https://qloron.com/assets/sql-ghJHJqla.svg",
    bgColor: "#FFFFFF",
    textColor: "#336791",
  },
  {
    name: "Mongo DB",
    image:
      "https://qloron.com/assets/mongodb-BhtmPpQi.svg",
    bgColor: "#FFFFFF",
    textColor: "#47A248",
  },
  {
    name: "Java",
    image:
      "https://qloron.com/assets/java-B1cugfie.svg",
    bgColor: "#FFFFFF",
    textColor: "#007396",
  },
  {
    name: ".NET",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#512BD4",
  },
  {
    name: "Spring Boot",
    image:
      "https://www.clipartmax.com/png/middle/117-1171017_spring-logo-spring-framework-logo.png",
    bgColor: "#FFFFFF",
    textColor: "#339933",
  },
];

// Technology card component for consistency
const TechCard = ({ tech }) => {
  return (
    <div
      className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent transform hover:-translate-y-1"
      style={{ 
        backgroundColor: tech.bgColor,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
        <img
          src={tech.image}
          alt={tech.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDEzSDEzVjE5SDE1VjE1SDE5VjEzTTIxIDIxSDNWM0gyMVYyMU0xOSA5VjVIMTVWOUgxOU0xMyA5VjVIOVY5SDEzTTkgMTVWMTlIMTNWMTVIOVoiLz48L3N2Zz4=";
          }}
        />
      </div>
      <span
        className="text-md px-3 py-1 rounded-full font-medium"
        style={{
          color: "#000000",
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {tech.name}
      </span>
    </div>
  );
};

// Final component
export default function Stack() {
  return (
    <div className="text-center px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Built With <span className="text-[#0092B8]">Modern Technologies</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Our team leverages cutting-edge technologies to deliver high-quality
          software solutions. From frontend to backend, we use the best tools
          for the job to ensure performance, scalability, and maintainability.
        </p>

        <div className="flex flex-col gap-16">
          {/* Mobile Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-[#0092B8]">
                Mobile Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {mobileTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-[#0092B8]">
                Web App Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {webTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-[#0092B8]">
                Desktop App Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {desktopTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Backend Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-[#0092B8]">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {backendTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}