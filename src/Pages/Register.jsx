import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast for notifications

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'fullName') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!name) validationErrors.name = 'This field is required';
        if (!email) validationErrors.email = 'This field is required';
        if (!password) validationErrors.password = 'This field is required';

        // Password validation (minimum length of 8 characters)
        if (password && password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;  // Return early to prevent further submission
        }

        setErrors(validationErrors);

        // If no validation errors, proceed with form submission logic
        if (Object.keys(validationErrors).length === 0) {
            const newData = { name, email, password };
            let arr = JSON.parse(localStorage.getItem("UserLoginInfo") || "[]");
            arr.push(newData);
            localStorage.setItem("UserLoginInfo", JSON.stringify(arr));

            setData({ name: "", email: "", password: "" });
            toast.success("Signup successful");
            navigate("/login");
        }
    };
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Toggle password visibility
    const togglePasswordVisibility = (e) => {
        e.preventDefault(); // Prevents form submission
        setShowPassword((prev) => !prev);
    };



    return (
        <>
            <div className="absolute top-0 right-5 md:top-16 md:right-24 z-[999]">
                <button
                    onClick={() => navigate('/')}
                    className="text-3xl hover:rotate-180 transition-transform duration-300 ease-in-out"
                >
                    <RxCross1 />
                </button>
            </div>



            <div className="min-h-screen bg-[#FFF8EE] flex items-center justify-center overflow-hidden">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Create an Account
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={name}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                            />
                            {errors.name && (
                                <small className="text-red-500 text-sm">{errors.name}</small>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                            />
                            {errors.email && (
                                <small className="text-red-500 text-sm">{errors.email}</small>
                            )}
                        </div>

                        {/* Password */}
                        <div className='relative'>
                            <input
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                            />
                            <div className="absolute top-1 right-2">
                                <button
                                    type="button" // Prevents form submission
                                    onClick={togglePasswordVisibility}
                                    className="h-8 w-8 text-xl text-red-500 rounded-full focus:outline-none"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                            {errors.password && (
                                <small className="text-red-500 text-sm">{errors.password}</small>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-[#cc3333] text-white py-2 rounded-md transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Redirect to Login */}
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Already have an account?{' '}
                        <Link to={'/login'} className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
