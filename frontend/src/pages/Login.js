import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Hardcoded credentials
    const credentials = [
      { email: 'tigist.birhanu@gmail.com', password: '1234', role: 'admin', redirect: '/admin' },
      { email: 'mihret.tsegaye@gmail.com', password: '1234', role: 'counselor', redirect: '/counselor' },
      { email: 'abrham.melese@gmail.com', password: '1234', role: 'client', redirect: '/client' },
    ];

    const user = credentials.find(
      (cred) => cred.email === formData.email && cred.password === formData.password
    );

    if (user) {
      // Store user role in local storage
      localStorage.setItem('userRole', user.role);
      setErrors({});
      navigate(user.redirect);
    } else {
      setErrors({ general: 'Invalid email or password' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-stone-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-teal-900 mb-6 text-center">Login</h1>
            {errors.general && (
              <p className="text-red-500 text-sm mb-4 text-center">{errors.general}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
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
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-900'
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-teal-900 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Login
              </button>
            </form>
            <p className="text-gray-600 mt-4 text-center">
              Don’t have an account?{' '}
              <Link to="/register" className="text-teal-900 hover:text-yellow-600">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;