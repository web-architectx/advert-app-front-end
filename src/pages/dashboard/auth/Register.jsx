import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 overflow-auto">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4 leading-tight">Create an Account</h2>

                {/* Registration Form */}
                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 ease-in-out font-semibold"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="mt-4 flex items-center justify-center">
                    <span className="text-gray-500 font-medium leading-tight">or sign up with</span>
                </div>

                {/* Social Sign-Up Buttons (One Line) */}
                <div className="mt-4 flex justify-center gap-4">
                    <button
                        className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-300 font-semibold"
                    >
                        <FcGoogle className="mr-2 text-lg" /> Google
                    </button>

                    <button
                        className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out font-semibold"
                    >
                        <FaFacebookF className="mr-2 text-lg" /> Facebook
                    </button>

                    <button
                        className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out font-semibold"
                    >
                        <FaXTwitter className="mr-2 text-lg" /> Twitter
                    </button>
                </div>

                {/* Sign In Link */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-teal-600 hover:underline font-semibold">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;