import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Client() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-stone-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl font-bold text-teal-900 mb-6 text-center">
            Client Dashboard
          </h1>
          <p className="text-gray-600 text-center">
            Welcome to the Client Dashboard. This page will be developed to manage your counseling sessions and profile.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Client;