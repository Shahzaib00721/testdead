import React from 'react';

const WhoUsesThis = () => {
  const services = [
    {
      img: "/Frame.svg",
      title: "Family Law Attorneys",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/Frame (1).svg",
      title: "Single Parents",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/Frame (2).svg",
      title: "Collections Agencies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua."
    },
    {
      img: "/Frame (3).svg",
      title: "Private Investigators",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/Frame (4).svg",
      title: "Concerned Loved Ones",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/Frame (5).svg",
      title: "Single Parents",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className=" bg-[#2F52FD0A] from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-4 py-1.5 cursor-pointer hover:bg-blue-600 hover:text-white bg-[#2F52FD0A] border-1 border-blue-600 text-blue-600 rounded-full text-[16px] font-semibold">
              Who Uses This
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gray-900 mb-5">
            Who Is This Service For?
          </h2>
          
          {/* Description */}
          <p className="text-[#808080] text-[16px] sm:text-[16px] max-w-3xl mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white  rounded-[10px] p-6 sm:p-8  hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-100"
            >
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-4 mb-4">
                {/* Image */}
                <div className="  rounded-xl flex items-center justify-center flex-shrink-0">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-[48px] h-[48px] sm:w-[48px] h-[48px] object-contain" 
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-[20px] sm:text-xl font-bold text-[#1F3241]">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[#616161] text-[14px] sm:text-base  font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoUsesThis;