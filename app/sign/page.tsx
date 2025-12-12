"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Link } from 'lucide-react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // Google OAuth integration yahan implement karein
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreeToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  const handleSignUp = () => {
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Sign up data:', formData);
    alert('Account created successfully!');
    // Sign up logic yahan implement karein
  };

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
    if (errors[field]) {
      setErrors({...errors, [field]: undefined});
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FF] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-8">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <img src="img1 (4).png" alt="" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Find Anyone Who Owes You Money<br />in Less Than 60s.
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Instantly search public records, liens, and legal disputes with a click.
              Deadbeat Detective brings transparency to your fingertips so
              you're never left in the dark.
            </p>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="bg-white rounded-2xl  p-8 lg:p-18">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
              <p className="text-gray-600">Create your account to get started.</p>
            </div>

            {/* Google Sign Up Button */}
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border-1 border-gray-400 rounded-[12px] hover:border-blue-600 hover:bg-gray-50 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-semibold cursor-pointer text-gray-700">Sign up with Google</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Sign Up Form */}
            <div className="space-y-8">
              {/* Full Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-2 border border-gray-400 rounded-[12px] outline-none focus:ring-2 text-gray-900 placeholder:text-gray-400 ${
                    errors.fullName 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-2 border border-gray-400 rounded-[12px] outline-none focus:ring-2 text-gray-900 placeholder:text-gray-400 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-full px-4 py-2 border border-gray-400 rounded-[12px] outline-none focus:ring-2 text-gray-900 placeholder:text-gray-400 ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">{errors.password}</span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-full px-4 py-2 border border-gray-400 rounded-[12px] outline-none focus:ring-2 text-gray-900 placeholder:text-gray-400 ${
                      errors.confirmPassword 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm mt-1">{errors.confirmPassword}</span>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex flex-col">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => {
                      setAgreeToTerms(e.target.checked);
                      if (errors.terms) {
                        setErrors({...errors, terms: undefined});
                      }
                    }}
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Terms and Conditions
                    </button>
                    {' '}and{' '}
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Privacy Policy
                    </button>
                  </span>
                </label>
                {errors.terms && (
                  <span className="text-red-500 text-sm mt-1">{errors.terms}</span>
                )}
              </div>

              <button
                onClick={handleSignUp}
                className="w-full py-2 bg-blue-600 text-white rounded-[12px] cursor-pointer font-semibold text-base hover:bg-blue-700 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center text-gray-600">
              Already have an account?{' '}

            
                <button className="text-blue-600 cursor-pointer hover:text-blue-700 font-semibold">
                  Log In
                </button>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;