import React, { useState } from 'react';
import JobOpeningCard from './JobOpeningCard';

const CurrentOpenings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    collegeEmail: '',
    personalEmail: '',
    address: '',
    mobile: '',
    college: '',
    qualification: '',
    department: '',
    semester: '',
    skills: '',
    applicationSource: '',
    applicationDepartment: '',
    internshipType: '',
    resume: null,
  });

  const jobOpenings = [
    {
      title: "Frontend Developer (React)",
      type: "Full-time",
      location: "Hyderabad",
      experience: "2+ years exp",
      description: "We're looking for an experienced React developer to join our product team.",
      fullDescription: "As a Frontend Developer, you'll be responsible for building and maintaining user interfaces using React.js. You'll work closely with our design and backend teams to create seamless user experiences. The ideal candidate has strong JavaScript skills and experience with modern frontend frameworks.",
      requirements: [
        "2+ years of professional React experience",
        "Proficiency in JavaScript (ES6+)",
        "Experience with state management (Redux, Context API)",
        "Familiarity with RESTful APIs",
        "Understanding of responsive design principles"
      ]
    },
    {
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years exp",
      description: "Help us create beautiful, intuitive interfaces for our enterprise clients.",
      fullDescription: "We're seeking a creative UX/UI Designer to join our team. You'll be responsible for designing user flows, wireframes, and high-fidelity mockups for our web and mobile applications. You should have a strong portfolio demonstrating your design process and problem-solving skills.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Understanding of user-centered design principles",
        "Experience conducting user research",
        "Ability to create design systems"
      ]
    }
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.collegeEmail.trim()) newErrors.collegeEmail = 'College email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.collegeEmail)) newErrors.collegeEmail = 'Invalid email format';
      if (!formData.personalEmail.trim()) newErrors.personalEmail = 'Personal email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalEmail)) newErrors.personalEmail = 'Invalid email format';
      if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
      else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number (10 digits required)';
      if (!formData.college.trim()) newErrors.college = 'College name is required';
      if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.department.trim()) newErrors.department = 'Department is required';
      if (!formData.semester.trim()) newErrors.semester = 'Semester is required';
      if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
      if (!formData.applicationSource) newErrors.applicationSource = 'Please select application source';
      if (!formData.applicationDepartment) newErrors.applicationDepartment = 'Please select department';
    }
    
    if (step === 2 && !formData.resume) {
      newErrors.resume = 'Resume is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setFormStep(1);
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      name: '',
      collegeEmail: '',
      personalEmail: '',
      address: '',
      mobile: '',
      college: '',
      qualification: '',
      department: '',
      semester: '',
      skills: '',
      applicationSource: '',
      applicationDepartment: '',
      internshipType: '',
      resume: null,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleNextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(prev => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobOpenings.map((job, index) => (
            <JobOpeningCard
              key={index}
              title={job.title}
              type={job.type}
              location={job.location}
              experience={job.experience}
              description={job.description}
              onViewDetails={() => handleViewDetails(job)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
                  <p className="text-gray-600">{selectedJob.type} • {selectedJob.location} • {selectedJob.experience}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Form Steps Indicator */}
              {!isSubmitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`flex flex-col items-center ${step < formStep ? 'text-green-600' : step === formStep ? 'text-blue-600 font-medium' : 'text-gray-400'}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${step <= formStep ? 'bg-blue-100' : 'bg-gray-100'} ${step === formStep ? 'border-2 border-blue-500' : ''}`}
                        >
                          {step}
                        </div>
                        <span className="text-xs mt-1">
                          {step === 1 ? 'Personal Info' : step === 2 ? 'Documents' : 'Review'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <div className="absolute top-1/2 h-1 bg-gray-200 w-full -z-10"></div>
                    <div
                      className="absolute top-1/2 h-1 bg-blue-500 transition-all duration-300 -z-10"
                      style={{ width: `${(formStep - 1) * 50}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Form Content */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { label: "Full Name", name: "name" },
                          { label: "College Email", name: "collegeEmail", type: "email" },
                          { label: "Personal Email", name: "personalEmail", type: "email" },
                          { label: "Mobile No.", name: "mobile", type: "tel" },
                          { label: "College", name: "college" },
                          { label: "Qualification/Education", name: "qualification" },
                        ].map(({ label, name, type = "text" }) => (
                          <div key={name}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                            <input
                              type={type}
                              name={name}
                              value={formData[name]}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={3}
                          className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { label: "Department", name: "department" },
                          { label: "Semester", name: "semester" },
                          { label: "Skills", name: "skills" },
                        ].map(({ label, name }) => (
                          <div key={name}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                            <input
                              name={name}
                              value={formData[name]}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Source of Application *</label>
                          <select
                            name="applicationSource"
                            onChange={handleChange}
                            value={formData.applicationSource}
                            className={`w-full px-3 py-2 border ${errors.applicationSource ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="">Select</option>
                            <option>LinkedIn</option>
                            <option>Internshala</option>
                            <option>College Reference</option>
                            <option>Other</option>
                          </select>
                          {errors.applicationSource && <p className="mt-1 text-sm text-red-600">{errors.applicationSource}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                          <select
                            name="applicationDepartment"
                            onChange={handleChange}
                            value={formData.applicationDepartment}
                            className={`w-full px-3 py-2 border ${errors.applicationDepartment ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          >
                            <option value="">Select</option>
                            <option>Software Development</option>
                            <option>IoT Hardware Development</option>
                            <option>Social Media</option>
                            <option>Graphics Design</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Project</option>
                            <option>Other</option>
                          </select>
                          {errors.applicationDepartment && <p className="mt-1 text-sm text-red-600">{errors.applicationDepartment}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Upload Documents</h4>
                      <div className={`border-2 ${errors.resume ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg p-6 text-center`}>
                        <div className="flex flex-col items-center">
                          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PDF or DOC (MAX. 10MB)</p>
                        </div>
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                        >
                          Select File
                        </label>
                        {formData.resume && (
                          <p className="mt-3 text-sm text-gray-700">
                            Selected file: <span className="font-medium">{formData.resume.name}</span>
                          </p>
                        )}
                        {errors.resume && <p className="mt-2 text-sm text-red-600">{errors.resume}</p>}
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Review Your Application</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Personal Information</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {[
                            { label: "Full Name", name: "name" },
                            { label: "College Email", name: "collegeEmail" },
                            { label: "Personal Email", name: "personalEmail" },
                            { label: "Mobile No.", name: "mobile" },
                            { label: "College", name: "college" },
                            { label: "Qualification", name: "qualification" },
                            { label: "Department", name: "department" },
                            { label: "Semester", name: "semester" },
                            { label: "Skills", name: "skills" },
                            { label: "Application Source", name: "applicationSource" },
                            { label: "Department Applied", name: "applicationDepartment" },
                          ].map(({ label, name }) => (
                            <div key={name} className="text-sm">
                              <p className="text-gray-500">{label}</p>
                              <p className="font-medium">{formData[name] || 'N/A'}</p>
                            </div>
                          ))}
                        </div>
                        <h5 className="font-medium mb-2">Documents</h5>
                        <div className="text-sm">
                          <p className="text-gray-500">Resume</p>
                          <p className="font-medium">{formData.resume ? formData.resume.name : 'No file selected'}</p>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                      >
                        Submit Application
                      </button>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
                        onClick={() => setFormStep((prev) => prev - 1)}
                      >
                        ← Back
                      </button>
                    ) : (
                      <div></div> // Empty div to maintain space
                    )}
                    {formStep < 3 ? (
                      <button
                        type="button"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                        onClick={handleNextStep}
                      >
                        Continue →
                      </button>
                    ) : null}
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for applying to the <strong>{selectedJob.title}</strong> position at our company. We've received your application and will review it carefully.
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    We'll contact you via email at <span className="font-medium">{formData.personalEmail}</span> within 5-7 business days.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 font-medium"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentOpenings;