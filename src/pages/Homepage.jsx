import React from "react";
import Customer from "../components/home/Customer";
import GetInTouch from "../components/home/GetInTouch";
import WhyChooseUs from "../components/home/WhyChooseUs";
import WhyWeStandOut from "../components/home/Whywestandout";

const Homepage = () => {
  const features = [
    {
      number: "1",
      title: "Expertise & Experience",
      description:
        "We bring a wealth of expertise and years of experience in the industry, ensuring that we deliver top-notch solutions tailored to your unique business needs.",
    },
    {
      number: "2",
      title: "Customized Solutions",
      description:
        "We understand that every business is unique. Our team works closely with you to understand your requirements and provide customized solutions that align with your goals and objectives.",
    },
    {
      number: "3",
      title: "Skilled Team",
      description:
        "Our team comprises highly skilled professionals who are experts in their respective fields. They stay updated with the latest industry trends and technologies to deliver cutting-edge solutions.",
    },
    {
      number: "4",
      title: "Quality & Precision",
      description:
        "We have strong focus on delivering high-quality solutions. Our rigorous quality assurance processes ensure that the end product meets the highest standards of performance, functionality, and security.",
    },
    {
      number: "5",
      title: "Timely Delivery",
      description:
        "We value your time and understand the importance of meeting deadlines. Our team is committed to delivering projects on time, ensuring that you can launch and implement your solutions without delay.",
    },
    {
      number: "6",
      title: "Competitive Pricing",
      description:
        "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.",
    },
    {
      number: "7",
      title: "Client-Centric Approach",
      description:
        "We believe in putting our clients first. Every decision we make is guided by how it will benefit your business and help you achieve your objectives.",
    },
    {
      number: "8",
      title: "Long-Term Partnership",
      description:
        "We believe in building long-term relationships with our clients. Our goal is to become your trusted technology partner, supporting your growth and providing ongoing support and maintenance.",
    },
    {
      number: "9",
      title: "Positive Track Record",
      description:
        "Our track record speaks for itself. We have a history of successful projects and satisfied clients who have achieved their business goals with our assistance.",
    },
    {
      number: "10",
      title: "Finish the Project",
      description:
        "The project is completed and we give it to our customer. We also ask for customer's feedback to continuously improve our services.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section with Full Screen Height */}
      <section className="relative h-screen w-full">
        {/* Background Image with Full Screen Height */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.ceo-review.com/wp-content/uploads/2022/03/Business-Success.jpg')",
          }}
        ></div>

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#055A79] opacity-70"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                OUR CREATIVITY IS YOUR SUCCESS
              </h1>
              <p className="text-lg text-white mb-8">
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="px-8 py-3 bg-[#26D6EB] hover:bg-opacity-90 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section with Hero.png - Extra Large Size */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <img
              src="/Hero.png"
              alt="Hero Graphic"
              className="h-64 md:h-80 lg:h-96 w-auto"
              style={{
                minWidth: "400px",
                maxWidth: "90vw",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />


      {/* Customer Section */}
      <section>
        <Customer/>
      </section>

       {/* Why We Stand Out Section */}
       <WhyWeStandOut />

       {/* Get In Touch Section */}
       <section className="py-16 px-4">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Homepage;
