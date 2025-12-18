"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({
    email: undefined,
    password: undefined
  });

  // Track if user has interacted with fields
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false); // ✅ Added password touched

  // Password requirements state
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasNumber: false,
    hasSpecialChar: false,
    hasMinLength: false,
    hasUppercase: false
  });

  // ✅ Check if all password requirements are met
  const isPasswordValid = () => {
    return passwordRequirements.hasNumber && 
           passwordRequirements.hasSpecialChar && 
           passwordRequirements.hasMinLength && 
           passwordRequirements.hasUppercase;
  };

  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('Google login clicked');
};

  // Email validation
  const validateEmail = (value = '') => {
    const email = value.trim();

    if (!email) {
      return 'Email is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    return null;
  };

  // Password validation with requirements
 const validatePassword = (value: string) => {
  if (!value) {
    return 'Password is required';
  }
    
    // Check all requirements
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    
    setPasswordRequirements({
      hasNumber,
      hasSpecialChar,
      hasMinLength,
      hasUppercase
    });
    
    if (!hasNumber || !hasSpecialChar || !hasMinLength || !hasUppercase) {
      return 'Please meet all password requirements';
    }
    
    return undefined;
  };

  // Real-time validation jab user type kare
  const handleInputChange = (field: string, value: string) => {
  setFormData({ ...formData, [field]: value });
  
  // Clear error jab user type kare
  if (errors[field as keyof typeof errors]) {
    setErrors({ ...errors, [field]: undefined });
  }
    
    // Real-time password validation
    if (field === 'password') {
      setPasswordTouched(true); // ✅ Mark password as touched
      validatePassword(value);
    }
  };

  // Email validation when user leaves the field (onBlur)
 const handleEmailBlur = () => {
  setEmailTouched(true);
  const emailError = validateEmail(formData.email);
  if (emailError) {
    setErrors({ ...errors, email: emailError as any });
  }
};

  // ✅ Password blur handler
  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const handleLogin = (e:React.MouseEvent<HTMLButtonElement>   ) => {
    e.preventDefault();
    
    // ✅ Mark both fields as touched on login attempt
    setEmailTouched(true);
    setPasswordTouched(true);
    
  const newErrors: any = {};

// Email validate karo
const emailError = validateEmail(formData.email);
if (emailError) newErrors.email = emailError;

// Password validate karo
const passwordError = validatePassword(formData.password);
if (passwordError) newErrors.password = passwordError;

// Agar errors hain to set karo aur return
if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}
    
    // No errors - proceed with login
    console.log('Login data:', formData);
    alert('Login successful!');
  };

 const handleForgotPassword = (e: any) => {
  e.preventDefault();
  console.log('Forgot password clicked');
  // Forgot password logic yahan implement karein
};

 const handleSignUpClick = (e: any) => {
  e.preventDefault();
  console.log('Sign up clicked');
  // Sign up navigation yahan implement karein
};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">DD</span>
            </div>
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

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">Log In</h2>
              <p className="text-gray-700">Please add your credentials to login to your account.</p>
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full cursor-pointer flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:border-blue-600 hover:bg-gray-50 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-semibold text-gray-700">Google</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              {/* Email Input with Validation */}
              <div className="flex flex-col">
                <input
  type="email"
  placeholder="Example@gmail.com"
  value={formData.email}
  onChange={(e) => handleInputChange('email', e.target.value)}
  onBlur={handleEmailBlur}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin(e as any);
    }
  }}
  className={`w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 text-gray-900 placeholder:text-gray-400 transition-all duration-300 ${
    errors.email 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
  }`}
/>
                {errors.email && emailTouched && (
                  <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                )}
              </div>

              {/* Password Input with Validation - ✅ Red until all requirements met */}
              <div className="flex flex-col">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onBlur={handlePasswordBlur}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleLogin(e as any);
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 text-gray-900 placeholder:text-gray-400 transition-all duration-300 ${
                      passwordTouched && formData.password && !isPasswordValid()
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                    className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Show error message */}
                {errors.password && passwordTouched && (
                  <span className="text-red-500 text-xs font-medium mt-2">
                    {errors.password}
                  </span>
                )}
                
                {/* Password Requirements List */}
                {formData.password && (
                  <div className="mt-3 space-y-2">
                    <div className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      passwordRequirements.hasNumber ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <svg className={`w-4 h-4 flex-shrink-0 ${passwordRequirements.hasNumber ? 'text-green-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Must include a number</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      passwordRequirements.hasSpecialChar ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <svg className={`w-4 h-4 flex-shrink-0 ${passwordRequirements.hasSpecialChar ? 'text-green-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Must include a special character</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      passwordRequirements.hasMinLength ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <svg className={`w-4 h-4 flex-shrink-0 ${passwordRequirements.hasMinLength ? 'text-green-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Minimum 8 Characters</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      passwordRequirements.hasUppercase ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <svg className={`w-4 h-4 flex-shrink-0 ${passwordRequirements.hasUppercase ? 'text-green-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Must include at least 1 uppercase letter</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                <a 
  href="#" 
  onClick={(e) => handleForgotPassword(e)}
  className="text-sm text-blue-600 underline hover:text-blue-700 font-medium"
>
  Forgot Password?
</a>
              </div>

              <button
                onClick={handleLogin}
                className="w-full cursor-pointer py-3 bg-blue-600 text-white rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors duration-300"
              >
                Log In
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <a 
                href="#" 
                onClick={handleSignUpClick}
                className="text-blue-600 hover:underline hover:text-blue-700 font-semibold"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;