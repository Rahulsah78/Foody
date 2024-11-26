import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation before proceeding
        if (!data.name || !data.email || !data.password) {
            toast.error("All fields are required");
            return;
        }

        // Password validation (minimum length of 8 characters)
        if (data.password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;
        }

        let arr = JSON.parse(localStorage.getItem("UserLoginInfo") || "[]");
        arr.push(data);
        localStorage.setItem("UserLoginInfo", JSON.stringify(arr));

        setData({ name: "", email: "", password: "" });
        toast.success("Signup successful");
        navigate("/login");
    };

    const [showPassword, setShowPassword] = useState(false);

    // Toggle functionality
    const togglePasswordVisibility = (e) => {
        e.preventDefault(); // Prevent any unintended form submission
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FFF8EE]">
            {/* Close Button */}
            <div className="absolute top-24 right-24">
                <Link to={"/"}>
                    <button onClick={() => navigate("/")}>
                        <RxCross2 className="text-4xl cursor-pointer transition-transform duration-300 hover:rotate-[180deg]" />
                    </button>
                </Link>
            </div>

            {/* Glassmorphism Form */}
            <div className="bg-white animate__animated animate__fadeIn bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full max-w-md border border-white border-opacity-30">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            onChange={handleInput}
                            id="name"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white bg-opacity-30 text-gray-800 placeholder-gray-500"
                            placeholder="Enter your name"
                            value={data.name}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={handleInput}
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white bg-opacity-30 text-gray-800 placeholder-gray-500"
                            placeholder="Enter your email"
                            value={data.email}
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-800 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={handleInput}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white bg-opacity-30 text-gray-800 placeholder-gray-500"
                            placeholder="Enter your password"
                            value={data.password}
                        />
                        <div className="absolute top-10 right-5">
                            <button
                                type="button" // Prevents form submission
                                onClick={togglePasswordVisibility}
                                className="h-8 w-8 text-red-500 rounded-full focus:outline-none"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-3 w-full bg-[#cc3333] bg-opacity-80 text-white py-2 rounded-md font-medium"
                    >
                        Register
                    </button>
                </form>
                <p className="text-gray-600 text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
