import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Admin() {
  // Placeholder data for users (to be replaced with API data later)
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alex Brown', email: 'alex@example.com', status: 'Active' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-teal-900 text-gray-100 p-6">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/admin" className="text-gray-200 hover:text-yellow-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="text-gray-200 hover:text-yellow-600">
                Users
              </Link>
            </li>
            <li>
              <Link to="/admin/reports" className="text-gray-200 hover:text-yellow-600">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="text-gray-200 hover:text-yellow-600">
                Settings
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-stone-100 p-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Welcome Message */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            <p className="text-gray-600 mb-8">
              Welcome to the admin panel. Manage users, view reports, and configure settings here.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-gray-800">150</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Active Sessions</h3>
                <p className="text-3xl font-bold text-gray-800">45</p>
              </div>
            </div>

            {/* User Management Table */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">User Management</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-gray-800">Name</th>
                    <th className="py-2 text-gray-800">Email</th>
                    <th className="py-2 text-gray-800">Status</th>
                    <th className="py-2 text-gray-800">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="py-2 text-gray-600">{user.name}</td>
                      <td className="py-2 text-gray-600">{user.email}</td>
                      <td className="py-2 text-gray-600">{user.status}</td>
                      <td className="py-2">
                        <button className="text-teal-900 hover:text-yellow-600 mr-4">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-500">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;