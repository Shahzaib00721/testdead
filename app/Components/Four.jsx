import React from 'react';
import { Share2, FileText, Shield, Lock } from 'lucide-react';

const SecuritySection = () => {
  const features = [
    {
      icon: <Share2 className="w-5 h-5" />,
      text: "All searches are 100% confidential —activity is never shared."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Fully encrypted reports"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Safe payment via trusted gateways (Stripe/PayPal)"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      text: "We comply with applicable data privacy and legal guidelines."
    }
  ];

  return (
    <div className="bg-[#2F52FD0A] from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  items-center">
          {/* Left Side - Images */}
          <div className="flex gap-4 sm:gap-6 justify-center mb-10 md:mb-0 lg:justify-start">
            {/* First Image - Lock on Phone */}
            <div className="w-[45%] sm:w-[240px] mt-8 sm:mt-12 ">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="lock.png"
                  alt="Security Lock"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                />
              </div>
            </div>

            {/* Second Image - Office Team */}
            <div className="w-[45%] sm:w-[240px] ">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="page.png"
                  alt="Professional Team"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center justify-center">
              <span className="px-4 py-1.5 text-[14px] cursor-pointer bg-[#2F52FD0A] border border-blue-600 text-[#2F52FD] hover:bg-blue-600 hover:text-white rounded-full  font-semibold">
                Security & Confidentiality
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#1F3241] leading-tight">
              Private. Secure. Confidential.
            </h2>
            <div className='h-0.5 w-70 sm:w-140 md:w-120 lg:w-125 bg-[#D6D6D6] '></div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 bg-[#2F52FD1A] rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <p className="text-[#1F3241] text-[18px] sm:text-base lg:text-[18px] font-medium leading-relaxed pt-2">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;