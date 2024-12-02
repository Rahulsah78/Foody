import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";

const Payment = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { cardName: "", cardNumber: "", expiryDate: "", cvv: "", amount: "" };

    // Basic validation
    if (!cardName) newErrors.cardName = "Name on card is required.";
    if (!cardNumber) newErrors.cardNumber = "Card number is required.";
    else if (!/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = "Card number must be 16 digits.";
    if (!expiryDate) newErrors.expiryDate = "Expiry date is required.";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    if (!cvv) newErrors.cvv = "CVV is required.";
    else if (!/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be 3 digits.";
    if (!amount) newErrors.amount = "Amount is required.";
    else if (amount <= 0) newErrors.amount = "Amount must be a positive number.";

    setErrors(newErrors);

    // If there are no errors, proceed with the form submission
    if (!Object.values(newErrors).some((error) => error !== "")) {
      console.log("Payment submitted successfully!");
      // Proceed with the payment logic
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pb-5 bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#fe8c00] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-lg shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Complete Payment
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Please fill in your details to proceed with the payment.
          </p>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                id="cardName"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
              {errors.cardName && <p className="text-red-500 text-xs mt-2">{errors.cardName}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-2">{errors.cardNumber}</p>}
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
                {errors.expiryDate && <p className="text-red-500 text-xs mt-2">{errors.expiryDate}</p>}
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-2">{errors.cvv}</p>}
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {errors.amount && <p className="text-red-500 text-xs mt-2">{errors.amount}</p>}
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
