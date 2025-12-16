import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What kind of information will I get in a report?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "Is it legal to use this service?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "Do I need to create an account?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "Will the person I search for know I'm looking?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "How much does a full report cost?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "How long does it take to get results?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "Is my payment information secure?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "Can I search for multiple people?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      question: "What makes your service different?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    }
  ];

  const leftColumnFaqs = faqs.slice(0, 5);
  const rightColumnFaqs = faqs.slice(5, 10);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const FAQItem = ({ faq, index, isOpen }) => (
    <div 
      className={`border rounded-[10px] transition-all duration-100  ${
        isOpen 
          ? 'border-blue-600 bg-blue-50' 
          : 'border-gray-200 bg-[#F7F8FF]  rounded-[15px] hover:border-gray-300'
      }`}
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center   justify-between p-4 text-left"
      >
        <span className={`font-semibold cursor-pointer text-base md:text-[22px] pr-4 ${
          isOpen ? 'text-[#1F3241]' : 'text-[#1F3241]'
        }`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-6 h-2 flex cursor-pointer items-center justify-center transition-transform duration-500 ${
          isOpen ? 'rotate-180' : ''
        }`}>
          {isOpen ? (
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 text-[#616161] text-sm md:text-[16px] leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center cursor-pointer px-6 py-2 rounded-full text-[16px] font-semibold bg-white text-[#2F52FD] hover:bg-[#2F52FD] hover:text-white border-1 border-[#2F52FD]">
            FAQ s
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[38px] font-bold text-center text-[#1F3241] mb-5">
          Have Questions?
        </h2>

        {/* Description */}  
        <p className="text-center text-[#616161] text-[16px] max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque facilisis. Nisi eu blandit nunc parturient adipiscing commodo.
        </p>

        {/* FAQ Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-7">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-7">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index + 5;
              return (
                <FAQItem
                  key={actualIndex}
                  faq={faq}
                  index={actualIndex}
                  isOpen={openIndex === actualIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;