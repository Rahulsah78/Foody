import React from 'react';
import Layout from '../Components/Layout/Layout';

const HelpPage = () => {
    return (
        <>
            <Layout>
                <div className="min-h-screen bg-[#FFF8EE] py-10 px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Help Center</h1>
                        <p className="text-gray-600 mb-6">
                            Welcome to our Help Center! Find answers to common questions and get the support you need.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Frequently Asked Questions</h2>
                                <div className="bg-gray-50 p-4 rounded-lg border">
                                    <h3 className="font-medium text-gray-700">Q1: How do I reset my password?</h3>
                                    <p className="text-gray-600 mt-2">
                                        To reset your password, go to the login page, click on "Forgot Password," and follow the instructions to reset it.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg border mt-4">
                                    <h3 className="font-medium text-gray-700">Q2: How do I update my profile information?</h3>
                                    <p className="text-gray-600 mt-2">
                                        Navigate to your profile settings by clicking on your profile icon. From there, you can update your information.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Support</h2>
                                <p className="text-gray-600">
                                    If you need further assistance, please contact our support team by emailing us at{' '}
                                    <a href="mailto:support@example.com" className="text-indigo-600 hover:underline">
                                        support@example.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default HelpPage;
