import React from 'react';
import Layout from '../Components/Layout/Layout';

const SettingsPage = () => {
    return (
        <>
            <Layout>
                <div className="min-h-screen bg-[#FFF8EE]  flex justify-center items-center py-10 px-4">
                    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
                            Settings
                        </h2>
                        <form className="space-y-6">
                            {/* User Information Section */}
                            <div>
                                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter your username"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            {/* Password Change Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                                    Change Password
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="current-password" className="block text-gray-700 font-medium mb-1">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            id="current-password"
                                            placeholder="Current password"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="new-password" className="block text-gray-700 font-medium mb-1">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            id="new-password"
                                            placeholder="New password"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-1">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            placeholder="Confirm new password"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition duration-300"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SettingsPage;
