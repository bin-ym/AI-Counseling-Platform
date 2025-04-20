import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../assets/images/hero-image.jpg';
import AboutImage from '../assets/images/about-image.jpg';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling "Read More"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Contact form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-stone-100 py-20 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Life Doesn’t Have to Be a Constant Balancing Act
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Manage anxiety and live your best life with our AI-powered counseling platform.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center bg-teal-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={HeroImage}
                alt="Life doesn’t have to be a constant balancing act"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <svg className="absolute top-0 left-0 w-32 h-32 text-teal-900 opacity-10" fill="currentColor" viewBox="0 0 100 100">
              <path d="M0 50 C 50 0, 50 100, 100 50 S 50 0, 0 50 Z" />
            </svg>
          </div>
        </section>

        {/* Services Section (What We Offer) */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI-Powered Counseling */}
              <div className="bg-stone-100 p-6 rounded-lg shadow-md">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-teal-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">AI-Powered Counseling</h3>
                <p className="text-gray-600">
                  Personalized mental health support using advanced AI technology.
                </p>
              </div>
              {/* 24/7 Access */}
              <div className="bg-stone-100 p-6 rounded-lg shadow-md">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-teal-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v5l4.28 2.54.72-1.21-3.5-2.08V7H11z" />
                </svg>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">24/7 Access</h3>
                <p className="text-gray-600">
                  Support available anytime, anywhere, at your convenience.
                </p>
              </div>
              {/* Secure & Private */}
              <div className="bg-stone-100 p-6 rounded-lg shadow-md">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-teal-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9v3H4v10h16V12h-1V9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5v3H7V9c0-2.76 2.24-5 5-5zm-1 12h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                </svg>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is protected with top-tier security measures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-16 bg-teal-950 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={AboutImage}
                alt="About AI Counseling"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-200 mb-4">
                AI Counseling is dedicated to revolutionizing mental health support through cutting-edge artificial intelligence. Our mission is to provide accessible, empathetic, and evidence-based counseling to individuals worldwide, helping them navigate life’s challenges with confidence.
              </p>
              {isExpanded && (
                <div className="text-gray-200 mb-4">
                  <p>
                    Founded in 2023, AI Counseling was born out of a vision to bridge the gap between technology and mental wellness. Our team of experts in AI, psychology, and user experience design has worked tirelessly to create a platform that understands and responds to the unique needs of each user.
                  </p>
                  <p className="mt-4">
                    We leverage advanced natural language processing (NLP) and machine learning algorithms to deliver personalized support. Whether you’re dealing with anxiety, stress, or simply seeking personal growth, our AI is here to guide you 24/7, offering insights and strategies rooted in proven therapeutic techniques.
                  </p>
                  <p className="mt-4">
                    At AI Counseling, we prioritize your privacy and security. All interactions are encrypted, and your data is handled with the utmost care, ensuring a safe space for you to explore your emotions and goals.
                  </p>
                </div>
              )}
              <button
                onClick={toggleReadMore}
                className="inline-flex items-center text-yellow-600 hover:text-yellow-500 underline"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <svg
                  className={`w-5 h-5 ml-2 transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8l-6 6h12l-6-6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 text-yellow-600 opacity-10">
            <svg fill="currentColor" viewBox="0 0 100 100">
              <path d="M0 50 C 50 0, 50 100, 100 50 S 50 0, 0 50 Z" />
            </svg>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-stone-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovative Technology */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-teal-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14h-2v6l5.5 3.5.75-1.23-4.5-2.67V6z" />
                </svg>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Innovative Technology</h3>
                <p className="text-gray-600">
                  Cutting-edge AI tailored for mental health support.
                </p>
              </div>
              {/* User-Friendly */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-teal-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.83-5.83c-.55.55-1.44.55-1.99 0L12 12.99l-1.84 1.84c-.55.55-1.44.55-1.99 0s-.55-1.44 0-1.99L10.01 11l-1.84-1.84c-.55-.55-.55-1.44 0-1.99s1.44-.55 1.99 0L12 9.01l1.84-1.84c.55-.55 1.44-.55 1.99 0s.55 1.44 0 1.99L13.99 11l1.84 1.84c.55.55.55 1.44 0 1.99z" />
                </svg>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">User-Friendly</h3>
                <p className="text-gray-600">
                  Simple, intuitive platform for all users.
                </p>
              </div>
              {/* Affordable Access */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-teal-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V8h2v6z" />
                </svg>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Affordable Access</h3>
                <p className="text-gray-600">
                  Quality support at an accessible price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="bg-stone-100 p-4 rounded-lg">
                <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z" />
                  </svg>
                  How does AI counseling work?
                </summary>
                <p className="text-gray-600 mt-2">
                  Our AI analyzes your input to provide personalized mental health support, offering insights and recommendations based on proven therapeutic techniques.
                </p>
              </details>
              <details className="bg-stone-100 p-4 rounded-lg">
                <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z" />
                  </svg>
                  Is my data secure?
                </summary>
                <p className="text-gray-600 mt-2">
                  Yes, we use industry-standard encryption to ensure your data is protected and confidential.
                </p>
              </details>
              <details className="bg-stone-100 p-4 rounded-lg">
                <summary className="flex items-center font-semibold text-gray-800 cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z" />
                  </svg>
                  Can I access the platform on mobile?
                </summary>
                <p className="text-gray-600 mt-2">
                  Absolutely! Our platform is fully responsive and accessible on all devices.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="py-16 bg-stone-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact Info */}
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-4">
                  We’re here to help! Reach out to us with any questions or concerns.
                </p>
                <p className="text-gray-600">
                  <span className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-teal-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z" />
                    </svg>
                    Email:{' '}
                    <a href="mailto:support@aicounseling.com" className="text-teal-900 hover:text-yellow-600 ml-1">
                      support@aicounseling.com
                    </a>
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-teal-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                    </svg>
                    Phone:{' '}
                    <a href="tel:+1234567890" className="text-teal-900 hover:text-yellow-600 ml-1">
                      (123) 456-7890
                    </a>
                  </span>
                </p>
              </div>
              {/* Contact Form */}
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="flex items-center text-gray-700 font-medium mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-900'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center text-gray-700 font-medium mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z" />
                      </svg>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-900'
                      }`}
                      placeholder="Your Email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="flex items-center text-gray-700 font-medium mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V4l8 5 8-5z" />
                      </svg>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-900'
                      }`}
                      placeholder="Your Message"
                      rows="4"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center w-full justify-center bg-teal-900 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm-2 4h20v2H2v-2zm2 4h16v2H4v-2zm-2 4h20v2H2v-2z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;