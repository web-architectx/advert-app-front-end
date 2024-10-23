import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { apiSignUp } from '../../../services/auth';

const Register = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault() //prevent page from reloading 
        try {
            //prepare data to be sent to backend
            const formData = new FormData(event.target) //helps get data from the form
            const name = formData.get("name")
            const email = formData.get("email")
            const password = formData.get("password")
            const role = formData.get("role")
            //data validation
            //
            // console.log("name",name)
            const payload = { name: name, email: email, password: password, role: role }; //if key and value are the same, you can use just one name
            // const payload ={name,email,password,role:"vendor"};  just one name
            const response = await apiSignUp(payload)
            console.log(response.data)
            // Toast.sccess
            navigate("/login")
        } catch (error) {
            //toast / consolelog
            console.log(error)                                                                                                                                  
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 overflow-auto">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4 leading-tight">Create an Account</h2>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Confirm Password</label>
                        <input
                            name='password'
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg leading-tight"
                            placeholder="Confirm your password"
                        />
                    </div>
                    {/* role */}
                    <div>
                        <label className="block text-gray-700 font-medium">Role</label>
                        <select
                            name="role"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        >
                            <option value="">Select a Role</option>
                            <option value="user">User</option>
                            <option value="vendor">Vendor</option>

                        </select>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 ease-in-out font-semibold"
                    >
                        {/* {loading ? "loading" : "Register"} */}
                        {/* {console.log('you clicked me')} */}
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