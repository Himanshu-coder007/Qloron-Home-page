import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Content with padding to account for fixed navbar */}
      <main className="flex-grow pt-16"> {/* Adjust pt-16 based on your navbar height */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;