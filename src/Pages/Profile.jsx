import Layout from "../Components/Layout/Layout";

const Profile = () => {
    return (
        <>
            <Layout>

                <div className="min-h-screen bg-[#FFF8EE] p-8">
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h2 className="text-2xl font-semibold text-[#CC3333] mb-4">Profile</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Basic Information Section */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-700 mb-4">Basic Information</h3>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="David Matin"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Contact Number</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="+880 1630 2250 15"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="shaheen.au2@gmail.com"

                                        />
                                    </div>
                                </div>

                                {/* Contact Information Section */}
                                <div>
                                    {/* <h3 className="text-lg font-medium text-gray-700 mb-4">Contact Information</h3> */}

                                    <div className="mb-4">
                                        <label className="block text-gray-700">Country</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="Country Name"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Postcode</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="112233"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">City</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="City Name"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Full Address</label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                            placeholder="Kalaiya, Nepal"

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-gray-100 border-t">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300">
                                Save Setting
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Profile;
