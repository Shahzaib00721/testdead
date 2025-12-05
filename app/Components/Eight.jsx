import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const features = [
    "Get the phone number",
    "Look up current address",
    "Find verified emails",
  ];

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-20">
      <div className="max-w-7xl mx-auto bg-[#F7F8FF] rounded-[15px] py-10 md:py-16 px-4 md:px-8">

        {/* 🔹 TOP LINE */}
       

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#1F3241] text-center mb-5">
          Stop Waiting. Start Collecting
        </h2>

        {/* Description */}
        <p className="text-[#616161] text-center max-w-2xl mx-auto text-[16px] leading-relaxed mb-12">
          Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi
          pellentesqu facilisis. Nisi eu blandit nunc parturient adipiscing
          commodo.
        </p>
      <div className="w-full h-[1px] bg-[#E4E4E4] mb-7"></div>
        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-14 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src="Frame (6).svg" className="cursor-pointer" alt="" />
              <span className="text-gray-800 font-bold text-sm sm:text-base lg:text-[22px]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* 🔹 BOTTOM LINE */}
        <div className="w-full h-[1px] bg-[#E4E4E4] mt-7"></div>

        {/* CTA Button */}
        <div className="flex justify-center mt-15">
          <button className="group flex items-center cursor-pointer gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold text-base rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
            Start Your Search Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CTASection;
