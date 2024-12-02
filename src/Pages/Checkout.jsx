import { Link } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { useSelector } from "react-redux";

const Checkout = () => {
  const allCartItem = useSelector((state) => state.CartSlice.carts); // Fetch cart items from Redux store
  console.log(allCartItem);

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
                  {/* Loop over cart items to display dynamic product info */}
                  {allCartItem.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <h4>knknknknk</h4>
                    </div>
                  ))}

                  {/* Shipping and Total */}
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">$5.00</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700 font-semibold">Total</p>
                    <p className="text-gray-700 font-semibold">
                      ${allCartItem.reduce((total, item) => total + item.price, 0) + 5}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Button to Submit */}
            <div className="mt-8 text-center">
              <Link to={'/payment'}>
                <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300">
                  Complete Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
