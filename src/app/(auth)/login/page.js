"use client"
import React, { useState } from 'react';

function LoginPage() {
    // Step 1: State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600">CORE360</h1>
            </div>

            {/* Login Box */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Email"
                        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Password input + toggle */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {/* Toggle button */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2 text-sm text-blue-600 focus:outline-none"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                    Login
                </button>

                <div className="mt-4 flex justify-between text-sm text-blue-600">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                    <a href="/register" className="hover:underline">Create Account</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
