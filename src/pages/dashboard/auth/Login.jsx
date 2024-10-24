import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { apiSignIn } from '../../../services/auth';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

const Login = () => {
    const [loading, setLoading] = useState(false); // State for loading
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when starting

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await apiSignIn({ email, password });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.accessToken);
                toast.success(`Welcome , ${email}!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // Redirect to the dashboard after showing the toast
            setTimeout(() => {
                // toast.dismiss(); // Dismiss the toast
                navigate("/dashboard/overview");
            }, 3000);  // Wait for 3 seconds before redirecting
            // navigate("/dashboard/overview");
            }
        } catch (error) {
            toast.error("Login failed. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <ToastContainer />

            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 overflow-auto">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login to Your Account</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                            placeholder="Enter your email"
                            name='email'
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                            placeholder="Enter your password"
                            name='password'
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <a href="#" className="text-sm text-teal-600 hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading} // Disable the button when loading
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12C4 6.48 8.48 2 14 2V0C7.37 0 2 5.37 2 12h2z"></path>
                                </svg>
                                Logging In...
                            </span>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-center">
                    <span className="text-gray-500">or</span>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    <button className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-all duration-300 ease-in-out font-semibold">
                        <FcGoogle className="mr-2 text-lg" /> Google
                    </button>

                    <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out font-semibold">
                        <FaFacebookF className="mr-2 text-lg" /> Facebook
                    </button>

                    <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out font-semibold">
                        <FaXTwitter className="mr-2 text-lg" /> Twitter
                    </button>
                </div>

                <p className="mt-6 text-center text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-teal-600 hover:underline font-semibold">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;