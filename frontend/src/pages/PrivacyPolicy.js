import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-stone-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl font-bold text-teal-900 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-center">
            This is a placeholder for the Privacy Policy page. We are committed to protecting your privacy and ensuring your data is secure.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;