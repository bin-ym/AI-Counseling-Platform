import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Get Our Newsletter */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Get Our Newsletter</h3>
          <p className="text-gray-400">
            Stay updated with the latest insights on mental health and AI counseling.
          </p>
          {/* Placeholder for newsletter signup (can be implemented later) */}
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">About Us</h3>
          <p className="text-gray-400">
            AI Counseling Platform
            <br />
            E-mail:{' '}
            <a href="mailto:support@aicounseling.com" className="hover:text-yellow-600">
              support@aicounseling.com
            </a>
            <br />
            Phone Number:{' '}
            <a href="tel:+1234567890" className="hover:text-yellow-600">
            (+251) 112-516-884
            </a>
          </p>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-2.596 0-4.192 1.583-4.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://x.com" className="text-gray-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:test-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-1.896-.567-5.943-.567-7.615-.567s-5.719 0-7.615.567c-1.896.567-2.385 1.896-2.385 3.896v6.24c0 2 0.489 3.329 2.385 3.896 1.896.567 5.943.567 7.615.567s5.719 0 7.615-.567c1.896-.567 2.385-1.896 2.385-3.896v-6.24c0-2-.489-3.329-2.385-3.896zm-10.615 9.896v-6.24l6 3.12-6 3.12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-400 border-t border-gray-700 pt-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>
          Copyright © 2025 AI Counseling Platform. All Rights Reserved |{' '}
          <Link to="/privacy-policy" className="hover:text-yellow-600">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;