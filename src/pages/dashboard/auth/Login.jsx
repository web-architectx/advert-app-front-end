import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { apiSignIn } from '../../../services/auth';

const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get("email")
        const password = formData.get("password");
        console.log("email :", email, "password :", password);

        const response = await apiSignIn({ email, password });
        // console.log(response.data);
        if(response.status===200){
            localStorage.setItem("token",response.data.accessToken)
        }

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 overflow-auto">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login to Your Account</h2>

                {/* Email/Password Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                            placeholder="Enter your email"
                            name='email'
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                            placeholder="Enter your password"
                            name='password'
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-gray-600">
                            {/* <input type="checkbox" className="form-checkbox text-teal-600" />
                            <span className="ml-2 text-sm">Remember me</span> */}
                        </label>
                        <a href="#" className="text-sm text-teal-600 hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 ease-in-out"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="mt-6 flex items-center justify-center">
                    <span className="text-gray-500">or</span>
                </div>

                {/* Social Sign-Up Buttons (One Line) */}
                <div className="mt-6 flex justify-center gap-4">
                    <button
                        className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-all duration-300 ease-in-out font-semibold"
                    >
                        <FcGoogle className="mr-2 text-lg" /> Google
                    </button>

                    <button
                        className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out font-semibold"
                    >
                        <FaFacebookF className="mr-2 text-lg" /> Facebook
                    </button>

                    <button
                        className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out font-semibold"
                    >
                        <FaXTwitter className="mr-2 text-lg" /> Twitter
                    </button>
                </div>

                {/* Sign-up Link */}
                <p className="mt-6 text-center text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-teal-600 hover:underline font-semibold">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;