import React, { useState, useEffect } from 'react';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.email) {
      const allApplications = JSON.parse(localStorage.getItem('applications')) || [];
      const userApplications = allApplications.filter(app => 
        app.applicant.personalEmail === user.email
      );
      
      const statusOptions = ['Review', 'Shortlisted', 'Selected'];
      const applicationsWithStatus = userApplications.map(app => ({
        ...app,
        status: statusOptions[Math.floor(Math.random() * statusOptions.length)]
      }));
      
      setApplications(applicationsWithStatus);
      setLoading(false);
    }
  }, []);

  const handleWithdraw = (applicationId) => {
    if (window.confirm('Are you sure you want to withdraw this application?')) {
      const allApplications = JSON.parse(localStorage.getItem('applications')) || [];
      const updatedApplications = allApplications.filter(app => 
        !(app.applicant.personalEmail === applications.find(a => a.appliedAt === applicationId)?.applicant.personalEmail && 
          app.appliedAt === applicationId)
      );
      
      localStorage.setItem('applications', JSON.stringify(updatedApplications));
      setApplications(applications.filter(app => app.appliedAt !== applicationId));
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600">No applications found</h2>
          <p className="text-gray-500 mt-2">You haven't applied to any jobs yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Job Applications</h1>
      <div className="flex-grow overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="overflow-y-auto flex-grow shadow-md rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 uppercase tracking-wider">Position</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 uppercase tracking-wider">Applied On</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-6 text-left font-medium text-gray-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.map((application) => (
                  <tr key={application.appliedAt} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{application.jobTitle}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-gray-500">{formatDate(application.appliedAt)}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        application.status === 'Review' ? 'bg-blue-100 text-blue-800' :
                        application.status === 'Shortlisted' ? 'bg-purple-100 text-purple-800' :
                        application.status === 'Selected' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => handleWithdraw(application.appliedAt)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          application.status === 'Review' || application.status === 'Shortlisted'
                            ? 'bg-red-600 hover:bg-red-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={application.status === 'Selected' || application.status === 'Rejected'}
                      >
                        Withdraw
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;