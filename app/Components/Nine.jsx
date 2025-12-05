import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-8">
          {/* Brand Section */}
          <div className="space-y-7">
            <div className="flex items-center space-x-2">
              
              <div>
                <img className='w-[187px] h-[62px]' src="img1 (4).png" alt="" />
              </div>
            </div>
            <p className="text-[16px] text-[#616161]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className="flex space-x-3 mb-5">
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='md:pl-14 mb-5'>
            <h3 className="text-[20px] font-semibold text-[#2F52FD] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Why Us</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Who Uses this</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Security</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Use Cases</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className='md:pl-8 mb-5'>
            <h3 className="text-[20px] font-semibold text-[#2F52FD] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Data Sources</a></li>
              <li><a href="#" className="text-sm text-[#616161] hover:text-gray-900 transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className=''>
            <h3 className="text-[20px] font-semibold text-[#2F52FD] mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#616161] flex-shrink-0 mt-0.5" />
                <span className="text-[16px] text-[#616161]">843, Apple Lane Peoria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#616161] flex-shrink-0" />
                <span className="text-[16px] text-[#616161]">+1 - 202 - 555 - 0153</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#616161] flex-shrink-0" />
                <span className="text-[16px] text-[#616161]">tripnavigator@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">©</span>
            </span>
            <span className='text-[16px] text-[#1F3241]'>Copyright @ 2024, All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}