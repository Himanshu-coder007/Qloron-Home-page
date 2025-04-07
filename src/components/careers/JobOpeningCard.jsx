import React from 'react';

const JobOpeningCard = ({ title, type, location, experience, description, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {type}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                {location}
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {experience}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button
          onClick={onViewDetails}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Apply →
        </button>
      </div>
    </div>
  );
};

export default JobOpeningCard;