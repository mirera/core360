"use client"
import React, { useState } from 'react';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600">CORE360</h1>
            </div>

            {/* Register Box */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Register</h2>

                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Password field with toggle */}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2 text-sm text-blue-600 focus:outline-none"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    {/* Confirm password field with toggle */}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-2 text-sm text-blue-600 focus:outline-none"
                        >
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <a href="/onboarding">
                    <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                        Submit
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Register;
