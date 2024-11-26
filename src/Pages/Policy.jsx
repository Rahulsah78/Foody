import React from 'react';
import Layout from '../Components/Layout/Layout';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Layout>
                <div className="min-h-screen bg-[#FFF8EE] py-10 px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Privacy Policy</h1>
                        <p className="text-gray-600 mb-6">
                            We value your privacy. This Privacy Policy explains how we collect, use, and share information about you.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
                                <p className="text-gray-600 mt-2">
                                    We collect information you provide directly to us when you use our services, such as your name, email address, and payment information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">2. How We Use Information</h2>
                                <p className="text-gray-600 mt-2">
                                    We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about updates, promotions, and more.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">3. Sharing of Information</h2>
                                <p className="text-gray-600 mt-2">
                                    We do not share your personal information with third parties except as necessary to provide our services or as required by law.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">4. Your Rights</h2>
                                <p className="text-gray-600 mt-2">
                                    You have the right to access, correct, or delete your personal information. Please contact us if you would like to exercise any of these rights.
                                </p>
                            </div>

                            <p className="text-gray-600 mt-6">
                                For more details, please contact us at{' '}
                                <a href="mailto:privacy@example.com" className="text-indigo-600 hover:underline">
                                    privacy@example.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default PrivacyPolicyPage;
