// src/ContactPage.js

import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <img 
        src="./image/bg2.jpg" 
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      />
      <div className="relative z-10 container mx-auto p-6 lg:p-1
      2">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
              >
                Send
              </button>
            </form>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" /></svg>
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10L12 4m0 0l6 6m-6-6v16" /></svg>
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" /></svg>
              <span>123 Main Street, Anytown, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
