import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Loader from "../Loader/Loader";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (isLoading) {
          // Disable scrolling
          document.body.style.overflow = 'hidden';
        } else {
          // Enable scrolling
          document.body.style.overflow = 'auto';
        }
      }, [isLoading]);
    return (
        <>
            <Layout>
                {isLoading && (
                    <div className="absolute flex items-center justify-center top-0 left-0 h-[100vh]  z-[999] w-full bg-[#FFF8EE]">
                        <Loader />
                    </div>
                )}
                <div className="px-4 md:px-16 py-8 bg-[#FFF8EE]">
                    <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

                    {/* Contact Form */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <form className="bg-white p-8 shadow-lg rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-red-500">Get in Touch</h2>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border text-red-500 bg-[#FFF8EE] border-gray-300 rounded mt-1"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border text-red-500 bg-[#FFF8EE] border-gray-300 rounded mt-1"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-2 border text-red-500 bg-[#FFF8EE] border-gray-300 rounded mt-1"
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#CC3333] text-white px-4 py-2 rounded hover:bg-red-400 transition duration-200"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Map Section */}
                        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                            <iframe
                                title="Kalaiya Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5049184260466!2d84.83904331505772!3d27.02875838307548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39949bda3f4db11d%3A0x60c59d8e7b3a8ee2!2sKalaiya%2C%20Nepal!5e0!3m2!1sen!2snp!4v1663046390180!5m2!1sen!2snp"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Contact;
