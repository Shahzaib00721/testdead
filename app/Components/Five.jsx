import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const DataReportSection = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-30 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="px-4 py-2 bg-white cursor-pointer hover:bg-[#2F52FD] hover:text-white border-1 border-blue-500 text-[#2F52FD] rounded-full text-[14px] font-semibold">
            Data Report
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#1F3241] text-center mb-5">
          See What You'll Get
        </h2>

        {/* Description */}
        <p className="text-[#616161] text-center text-[16px] sm:text-base max-w-2xl mx-auto font-medium mb-13">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Main Card */}
        <div className="bg-[#F7F8FF] rounded-2xl  p-6 sm:p-8 lg:p-10">
          
          {/* Name and Age */}
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#000000] mb-2.5">
              John Michael Davin
            </h3>
            <p className="text-[#000000] text-base font-medium sm:text-[20px]">
              Age: <span className="font-medium">75 Years</span>
            </p>
          </div>

          {/* Contact Info Cards */}   
          <div className="grid grid-cols-1 sm:grid-cols-3   mb-8">
            
            {/* Address */}
            <div className="bg-white rounded-l-[10px]  p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <p className="text-[#616161] text-[16px] leading-relaxed">
                1234 Oak Street, Austin, TX<br />78701
              </p>
            </div>

            {/* Email */}
            <div className="bg-white  p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <p className="text-[#616161]  text-[16px]">
                john.davis@email.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white  rounded-r-[10px] p-4 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <p className="text-[#616161]  text-[16px]">
                (512) 555-0123
              </p>
            </div>

          </div>

          {/* Family & Background Section */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Family & Associates */}
            <div className='bg-white p-4  rounded-[10px]'>
              <h4 className="text-[#2F52FD] font-semibold text-[18px] mb-3">
                Family & Associates
              </h4>
              <div className="space-y-2">
                <p className="text-[#616161] text-[16px]">
                  Sarah Davis (Spouse)
                </p>
                <p className="text-[#616161] text-[16px]">
                  Robert Davis (Father)
                </p>
                <p className="text-[#616161] text-[16px]">
                  8 more relatives found
                </p>
              </div>
            </div>

            {/* Background Summary */}
            <div className='bg-white p-4 rounded-[10px]' >
              <h4 className="text-[#2F52FD] font-semibold text-lg mb-3">
                Background Summary
              </h4>
              <div className="space-y-2">
                <p className="text-[#616161] text-[16px]">
                  <span className="font-semibold">Education:</span> UT Austin
                </p>
                <p className="text-[#616161] text-[16px]">
                  <span className="font-semibold">Property:</span> Homeowner
                </p>
                <p className="text-[#616161] text-[16px]">
                  <span className="font-semibold">Employment:</span> Tech Industry
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DataReportSection;
