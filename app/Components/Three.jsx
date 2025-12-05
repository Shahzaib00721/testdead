
import { Check } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    {
      feature: "Search Speed",
      deadbeat: "Under 30 seconds",
      other: "2-5 minutes",
      hasCheck: true
    },
    {
      feature: "Pricing Model",
      deadbeat: "Pay per report",
      other: "Monthly subscription",
      hasCheck: true
    },
    {
      feature: "Data Freshness",
      deadbeat: "Updated daily",
      other: "Updated monthly",
      hasCheck: true
    },
    {
      feature: "Customer Support",
      deadbeat: "24/7 Live chat",
      other: "Email only",
      hasCheck: true
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-white py-12 sm:py-16 lg:py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-10">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-4 py-1.5 cursor-pointer bg-white border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full text-[14px] font-semibold">
              Why Choose Us
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#1F3241] mb-5">
            Why People Trust Deadbeat Detective
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-[20px] text-center border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-white   ">
            <div className="px-5 sm:px-7 lg:px-9 py-5 border  sm:py-7">
              <h3 className="text-base sm:text-lg lg:text-[24px] font-semibold text-[#1F3241]">
                Features
              </h3>
            </div>
            <div className="px-5 sm:px-7 lg:px-9 py-5 sm:py-7 bg-[#F7F8FF]  border-t">
              <h3 className="text-base sm:text-lg lg:text-[24px] font-bold  text-[#2F52FD] ">
                Deadbeat Detective
              </h3>
            </div>
            <div className="px-5 bg-white sm:px-7 lg:px-9 py-5 border sm:py-7">
              <h3 className="text-base sm:text-lg lg:text-[24px] font-semibold text-gray-900">
                Other Services
              </h3>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Feature Name */}
                <div className="px-4 justify-center border-t  bg-white sm:px-5 lg:px-7 py-3 sm:py-4 lg:py-5 flex items-center">
                  <span className="text-[16px]  sm:text-[16px] text-[#1F3241] font-medium">
                    {item.feature}
                  </span>
                </div>

                {/* Deadbeat Detective Column */}
                <div className="px-4 justify-center border-t sm:px-5 lg:px-7 py-3  sm:py-4 lg:py-5 bg-[#F7F8FF]  flex items-center gap-2 sm:gap-3">
                  {item.hasCheck && (
                    <img src="Group 40.svg" alt="" />
                  )}
                  <span className="text-[16px]  text-center  sm:text-base  text-[#1F3241] font-semibold">
                    {item.deadbeat}
                  </span>
                </div>

                {/* Other Services Column */}
                <div className="px-4 justify-center border-t sm:px-5 lg:px-7 py-3 sm:py-4 lg:py-5 flex items-center">
                  <span className="text-[16px]  text-center sm:text-base text-[#1F3241] font-medium">
                    {item.other}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;