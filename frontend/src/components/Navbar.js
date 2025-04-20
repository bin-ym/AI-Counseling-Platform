import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  // Determine redirect path based on user role
  const getHomePath = () => {
    if (userRole === 'admin') return '/admin';
    if (userRole === 'counselor') return '/counselor';
    if (userRole === 'client') return '/client';
    return '/'; // Default to homepage if not logged in
  };

  // Handle scrolling to a section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  // Handle scrolling to top when clicking Home or Logo
  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-teal-900 text-gray-100 p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div
          onClick={() => (userRole ? navigate(getHomePath()) : scrollToTop())}
          className="text-2xl font-bold cursor-pointer"
        >
          AI Counseling
        </div>
        <div className="space-x-4">
          <div
            onClick={() => (userRole ? navigate(getHomePath()) : scrollToTop())}
            className="hover:text-yellow-600 transition duration-300 cursor-pointer inline-block"
          >
            Home
          </div>
          {!userRole && (
            <>
              <div
                onClick={() => scrollToSection('about-us')}
                className="hover:text-yellow-600 transition duration-300 cursor-pointer inline-block"
              >
                About Us
              </div>
              <div
                onClick={() => scrollToSection('contact-us')}
                className="hover:text-yellow-600 transition duration-300 cursor-pointer inline-block"
              >
                Contact Us
              </div>
            </>
          )}
          {userRole ? (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-yellow-600 transition duration-300">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;