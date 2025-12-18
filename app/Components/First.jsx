import React from 'react';
import { Check } from 'lucide-react';

const HowItWorksSection = () => {
  
 


  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:pb-30  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="">
          <span  className="inline-block px-5 py-2.5 cursor-pointer mb-4 text-[14px]  bg-white text-blue-600 hover:bg-blue-600 hover:text-white  font-semibold rounded-full border-1 border-blue-600">
            How It Works
          </span>
        </div>

        {/* Heading and Description Row */}
        <div className=" w-fit flex flex-col lg:flex-row justify-between items-start gap-3 mb-3 ">
          {/* Main Heading */}
          
          <h2 className="text-3xl sm:text-4xl lg:text-[37px] font-bold text-[#1F3241] leading-tight lg:w-[48%]">
            How Deadbeat Detective Works
          </h2>

          {/* Description Text */}
          <div className="text-[#616161] text-[16px] sm:text-[16px]  lg:text-[15px] leading-relaxed lg:w-[48%]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua. Ut enim ad
            </p>
          </div>
        </div>

        {/* Content Grid with justify-between */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 items-center">
          {/* Left Side - Steps with Timeline */}
          <div className="w-full lg:w-[48%] relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] sm:left-[19px] top-12 bottom-12 w-[2px] bg-blue-700 hidden sm:block"></div>
            
            <div className="space-y-10 sm:space-y-12">
              {/* Step 1 */}
              <div className="flex gap-5 pt-3 sm:gap-6 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-2xl sm:text-2xl lg:text-[24px] font-bold text-[#1F3241] mb-1 sm:mb-2">
                    Enter Their Info
                  </h3>
                  <p className="text-[#616161] font-medium text-[16px]lg:text-[15px] leading-relaxed">
                    Just a name and location — or get more specific with email/phone.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5 sm:gap-6 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold text-[#1F3241] mb-1 sm:mb-2">
                    Get Instant Results
                  </h3>
                  <p className="text-[#616161] text-sm sm:text-base lg:text-[15px] leading-relaxed">
                    View the report instantly — no waiting, no subscriptions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5 sm:gap-6 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold text-[#1F3241] mb-1 sm:mb-2">
                    Purchase Report
                  </h3>
                  <p className="text-[#616161] text-sm sm:text-base lg:text-[15px] leading-relaxed">
                    Unlock all personal data available for your use
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Only */}
          <div className="w-full lg:w-[48%]">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="log.png" 
                alt="Business meeting" 
                className="w-[621px] h-[280px] sm:h-[320px] lg:h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;