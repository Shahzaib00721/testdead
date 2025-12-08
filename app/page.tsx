"use client"; 
import First from './Components/First';
import Second from './Components/Second';
import Three  from './Components/Three';
import Four  from './Components/Four';
import Five from './Components/Five';
import Six from './Components/Six';
import Seven from './Components/Seven';
import Eight from './Components/Eight';
import Nine from './Components/Nine';
import React, { useState } from 'react';

const DeadbeatDetective = () => {
  const [activeTab, setActiveTab] = useState('Name');
  const [formData, setFormData] = useState({
    name: '',
    location: ''
  });
  
  // Validation errors state - ye errors store karega
  const [errors, setErrors] = useState<{
    name?: string;
    location?: string;
    phone?: string;
    email?: string;
    address?: string;
  }>({});

  const [advancedData, setAdvancedData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    ageGroup: '',
    state: '',
    city: '',
    email: '',
    phone: '',
    relativeFirstName: '',
    relativeLastName: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const tabs = ['Name', 'Phone', 'Email', 'Address'];
  
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Use Cases', id: 'use-cases' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'FAQs', id: 'faqs1' }
  ];

  // Validation functions - har field ke liye alag validation
  
  // Name validation - kam se kam 2 characters chahiye
  const validateName = (value: string): string | undefined => {
    if (!value.trim()) {
      return 'Name is required';
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return undefined;
  };

  // Phone validation - 10 digits ki US phone number
  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) {
      return 'Phone number is required';
    }
    // Remove spaces, dashes, parentheses
    const cleanedPhone = value.replace(/[\s\-\(\)]/g, '');
    if (!/^\d{10}$/.test(cleanedPhone)) {
      return 'Phone number must be 10 digits';
    }
    return undefined;
  };

  // Email validation - proper email format
  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  };

  // Address validation - kam se kam 5 characters
  const validateAddress = (value: string): string | undefined => {
    if (!value.trim()) {
      return 'Address is required';
    }
    if (value.trim().length < 5) {
      return 'Address must be at least 5 characters';
    }
    return undefined;
  };

  // Location validation - optional field
  const validateLocation = (value: string): string | undefined => {
    // Location optional hai, agar fill kiya to kam se kam 2 characters
    if (value.trim() && value.trim().length < 2) {
      return 'Location must be at least 2 characters';
    }
    return undefined;
  };

  // Real-time validation jab user type kare
  const handleInputChange = (field: 'name' | 'location', value: string) => {
    // Update form data
    setFormData({ ...formData, [field]: value });
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  // Handle search with full validation
  const handleSearch = () => {
    const newErrors: typeof errors = {};
    
    // Active tab ke hisaab se validate karo
    switch(activeTab) {
      case 'Name':
        const nameError = validateName(formData.name);
        if (nameError) newErrors.name = nameError;
        break;
      
      case 'Phone':
        const phoneError = validatePhone(formData.name);
        if (phoneError) newErrors.phone = phoneError;
        break;
      
      case 'Email':
        const emailError = validateEmail(formData.name);
        if (emailError) newErrors.email = emailError;
        break;
      
      case 'Address':
        const addressError = validateAddress(formData.name);
        if (addressError) newErrors.address = addressError;
        break;
    }
    
    // Location validate karo (optional)
    const locationError = validateLocation(formData.location);
    if (locationError) newErrors.location = locationError;
    
    // Agar errors hain to set karo aur return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // No errors - proceed with search
    alert(`Searching for: ${formData.name || 'Any'} in ${formData.location || 'Any Location'}`);
    console.log('Search Data:', formData);
    
    // Clear form after successful search (optional)
    // setFormData({ name: '', location: '' });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (showAdvancedSearch) {
      setAdvancedData(prev => ({
        ...prev,
        firstName: formData.name,
        city: formData.location 
      }));
    }
  }, [showAdvancedSearch]);

  return (
    <div className="min-h-screen  font-sans bg-[#F7F8FF] mt-8 ">
      <div className='sticky top-0 left-0 right-0 bg-[#F7F8FF]  h-7'></div>
      {/* Navigation Bar */}
      <nav className={`
        transition-all duration-300 z-50
        ${isScrolled 
          ? 'fixed top-6 left-6 right-6 bg-white/95 backdrop-blur-md shadow-xl rounded-[15px] h-[50px] sm:h-[101px]' 
          : 'absolute top-10 sm:top-12 left-7 sm:left-12 right-6 sm:right-12 bg-white shadow-md rounded-[15px] sm:rounded-[15px] h-[50px] sm:h-[101px]'}
      `}>
        <div className={`
          mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300
          ${isScrolled ? 'max-w-7xl' : 'max-w-7xl'}
        `}>
          <div className="flex justify-between items-center h-[50px] sm:h-[101px]">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <img className='w-[100px] sm:w-[140px] h-[33px] sm:h-[46px] cursor-pointer' src="img1 (4).png" alt="" onClick={() => scrollToSection('home')} />
              </div>
            </div>

            <div className="hidden md:flex items-center font-sans font-semibold gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#616161] hover:text-blue-600 text-[14px] font-semibold transition-colors relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 cursor-pointer py-2 text-blue-600 font-semibold text-[16px]  border border-blue-600 rounded-[10px] w-[87px] h-[48px] hover:bg-blue-50 transition-colors">
                Log In
              </button>
              <button className="px-4 cursor-pointer py-2 bg-blue-600 text-white font-semibold text-[16px] rounded-[10px] w-[100px] h-[48px] hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-gray-700"></span>
                  <span className="w-full h-0.5 bg-gray-700"></span>
                  <span className="w-full h-0.5 bg-gray-700"></span>
                </div>
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-white p-6 border-t border-gray-200 mt-2 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 text-[14px] font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <button className="w-full px-6 cursor-pointer py-2 text-blue-600 font-medium text-sm border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Log In
                </button>
                <button className="w-full px-6 cursor-pointer py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Home */}
      <div id="home" className="max-w-7xl mx-auto px-4 md:px-6 py-8 sm:py-16 lg:py-20 pt-22 sm:pt-36 lg:pt-55">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Find <span className="text-blue-600">Anyone</span> Who Owes You
          </h1>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 sm:mb-5 leading-tight">
            Money — <span className="text-blue-600">Instantly</span>.
          </h1>
          <p className="text-gray-600 text-sm sm:text-[17px] md:px-40 font-normal sm:font-medium mb-13 px-4">
            Instantly search public records, liens, and legal disputes with a click. <span className='font-bold'> Deadbeat Detective</span> <br/>
            brings transparency to your <span className="font-bold">fingertips</span> so you're never left in the dark.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-7xl mx-auto">
          <div className={`
            flex gap-4 bg-white w-fit px-3 pt-3 sm:gap-12 rounded-tl-[10px] rounded-tr-[10px] border border-gray-200 overflow-x-auto
            transition-all duration-500
            ${showAdvancedSearch ? 'max-h-0 opacity-0 mb-0 overflow-hidden' : 'max-h-20 opacity-100'}
          `}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Clear errors when switching tabs
                  setErrors({});
                  setFormData({ name: '', location: '' });
                }}
                className={`
                  pb-1 sm:pb-4 text-[16px] sm:text-[16px] transition-all duration-300 relative whitespace-nowrap cursor-pointer
                  ${activeTab === tab 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-500 hover:text-gray-900'}
                `}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className={`
            bg-white rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] border shadow-md 
            px-4 sm:px-8 pb-6 sm:pb-8 pt-6 sm:pt-8
            transition-all duration-500
            ${showAdvancedSearch ? 'border-1 border-blue-600 p-4' : ''}
          `}>
            {/* Basic Search Fields */}
            <div className={`
              transition-all duration-500
              ${showAdvancedSearch ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-96 opacity-100'}
            `}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-3 sm:gap-5 items-start">
                {/* First Input with Error - active tab ke mutabiq placeholder */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={activeTab}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`
                      w-full px-4 py-3 text-black border rounded-[10px] text-base sm:text-lg outline-none transition-all duration-300
                      ${errors.name || errors.phone || errors.email || errors.address
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'}
                      placeholder:text-gray-400 hover:border-gray-400
                    `}
                  />
                  {/* Error message display - agar error hai to dikhao */}
                  {(errors.name || errors.phone || errors.email || errors.address) && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.name || errors.phone || errors.email || errors.address}
                    </span>
                  )}
                </div>

                {/* Location Input with Error */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="City/State or ZIP"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`
                      w-full px-4 py-3 text-black border rounded-[10px] text-base sm:text-lg outline-none transition-all duration-300
                      ${errors.location
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'}
                      placeholder:text-gray-400 hover:border-gray-400
                    `}
                  />
                  {errors.location && (
                    <span className="text-red-500 text-sm mt-1">{errors.location}</span>
                  )}
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full lg:w-auto cursor-pointer px-8 sm:px-17 py-3 bg-blue-600 text-white rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-blue-700 active:scale-95 whitespace-nowrap mt-0 lg:mt-0"
                >
                  Search Now
                </button>
              </div>
            </div>
            
            {!showAdvancedSearch && (
              <div className="text-center sm:text-right mt-4 sm:mt-8">
                <button
                  onClick={() => setShowAdvancedSearch(true)}
                  className="text-gray-600 text-sm hover:text-gray-900 underline hover:underline transition-colors duration-300 cursor-pointer"
                >
                  Advanced Search
                </button>
              </div>
            )}

            {/* Advanced Search Section */}
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${showAdvancedSearch ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
            `}>
              <div className="md:pt-3 px-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Advanced Search</h3>
                  <button
                    onClick={() => setShowAdvancedSearch(false)}
                    className="text-gray-600 text-sm hover:text-gray-900 hover:underline transition-colors duration-300 cursor-pointer"
                  >
                    Show Basic Search
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">  
                  <input
                    type="text"
                    placeholder="First Name"
                    value={advancedData.firstName}
                    onChange={(e) => setAdvancedData({...advancedData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Middle Name"
                    value={advancedData.middleName}
                    onChange={(e) => setAdvancedData({...advancedData, middleName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={advancedData.lastName}
                    onChange={(e) => setAdvancedData({...advancedData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Age Group:</label>
                  <div className="flex flex-wrap gap-2">
                    {['18-25', '26-39', '40-49', '50-59', '60+'].map((age) => (
                      <button
                        key={age}
                        onClick={() => setAdvancedData({...advancedData, ageGroup: age})}
                        className={`px-4 py-2 border rounded-lg text-sm transition-colors cursor-pointer ${
                          advancedData.ageGroup === age 
                            ? 'border-blue-600 bg-blue-50 text-blue-600' 
                            : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="State"
                    value={advancedData.state}
                    onChange={(e) => setAdvancedData({...advancedData, state: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={advancedData.city}
                    onChange={(e) => setAdvancedData({...advancedData, city: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={advancedData.email}
                    onChange={(e) => setAdvancedData({...advancedData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={advancedData.phone}
                    onChange={(e) => setAdvancedData({...advancedData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Relative First Name"
                    value={advancedData.relativeFirstName}
                    onChange={(e) => setAdvancedData({...advancedData, relativeFirstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Relative Last Name"
                    value={advancedData.relativeLastName}
                    onChange={(e) => setAdvancedData({...advancedData, relativeLastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      console.log('Advanced Search Data:', advancedData);
                      alert(`Advanced Search:\nName: ${advancedData.firstName} ${advancedData.middleName} ${advancedData.lastName}\nAge: ${advancedData.ageGroup}\nLocation: ${advancedData.city}, ${advancedData.state}`);
                    }}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works"><First /></div>
      <div id="use-cases"><Second /></div>
      <div id="why-us"><Three /></div>
      <Four />
      <Five />
      <Six />
      <div id="faqs1"><Seven /></div>
      <Eight />
      <Nine />
    </div>
  );
};

export default DeadbeatDetective;