 "use client";
 import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut labore et dolore magna aliqua.",
      author: "Artemisia Udinese",
      role: "Marketing Specialist",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut labore et dolore magna aliqua.",
      author: "Artemisia Udinese",
      role: "Marketing Specialist",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut labore et dolore magna aliqua.",
      author: "Artemisia Udinese",
      role: "Marketing Specialist",
      avatar: "https://i.pravatar.cc/150?img=9"
    }
  ];

  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center cursor-pointer px-4 py-2 rounded-full text-[14px] font-semibold bg-white text-[#2F52FD] hover:bg-[#2F52FD] hover:text-white  border border-blue-600">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[38px] font-bold text-center text-[#1F3241] mb-5">
          Experiences Shared by Our Clients
        </h2>

        {/* Description */}
        <p className="text-center text-[#616161] max-w-3xl mx-auto mb-10 text-base md:text-[14px] font-normal leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Testimonials Grid */}
        <div className=" bg-[#F7F8FF] p-7 rounded-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[20px] p-4   hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
                <div className="mb-6"><img src="left.svg" alt="" /></div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-7">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-[16px] text-[#1F3241] text-base  ">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;