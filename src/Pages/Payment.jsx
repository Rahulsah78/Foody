import React from "react";
import Layout from "../Components/Layout/Layout";

const Payment = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#fe8c00] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-lg shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Complete Payment
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Please fill in your details to proceed with the payment.
          </p>

          {/* Payment Form */}
          <form>
            <div className="mb-6">
              <label
                htmlFor="cardName"
                className="block text-sm font-medium text-gray-700"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="cardName"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                placeholder="Enter amount"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200 shadow-md"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
