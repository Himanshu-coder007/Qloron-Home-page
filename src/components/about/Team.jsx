// src/components/about/Team.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Nikhilesh Mandal',
      position: 'CEO & Founder',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Lead Developer',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Marketing Director',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Team</h2>
          <p className="text-lg text-gray-600">Meet the talented people behind our success</p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 flex items-center justify-center bg-gray-100">
                  <FaUser 
                    size={80} 
                    className="text-gray-400"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{member.position}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <FaTwitter size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;