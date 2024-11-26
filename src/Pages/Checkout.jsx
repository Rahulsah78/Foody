import Layout from "../Components/Layout/Layout";

const Checkout = () => {
  
  return (
    <>
      <Layout>
        <div className="bg-[#FFF8EE] min-h-screen py-16">
          {/* Checkout Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-[#cc3333]">Checkout</h1>
            <p className="text-sm text-gray-500">Complete your order</p>
          </div>

          {/* Checkout Form */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Section: Shipping Address */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Shipping Address</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Rahul" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-gray-700">Address</label>
                    <input type="text" id="address" name="address" placeholder="kalaiya" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700">City</label>
                    <input type="text" id="city" name="city" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-gray-700">Zip Code</label>
                    <input type="text" id="zip" name="zip" placeholder="xxxxxx" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                  </div>
                </form>
              </div>

              {/* Right Section: Order Summary */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Replace with dynamic cart items */}
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Product Name</p>
                    <p className="text-gray-700">$50.00</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">$5.00</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700 font-semibold">Total</p>
                    <p className="text-gray-700 font-semibold">$55.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800">Payment Information</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" placeholder="xxxx-xxxx-xxxx" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="expiry" className="block text-gray-700">Expiry Date</label>
                  <input type="text" id="expiry" name="expiry" placeholder="xxxx" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-700">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="xx-xx" className="w-full p-3 mt-1 border border-gray-300 rounded-md" />
                </div>
              </form>
            </div>

            {/* Button to Submit */}
            <div className="mt-8 text-center">
              <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300">
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
