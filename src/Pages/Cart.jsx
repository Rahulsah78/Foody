import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, decreaseQuantity, emptycartitem } from '../Redux/AllSlices/CartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track login status
    const allCartItem = useSelector((state) => state.CartSlice.carts); // Fetch cart items from Redux store

    // Check if user is logged in
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('UserLoginInfo')) || [];
        setIsUserLoggedIn(users.length > 0);
    }, []);

    // IncreaseQuantity
    const handleIncreaseQuantity = (item) => {
        dispatch(addToCart(item)); // Pass the entire item
    };

    // decreaseQuantity
    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id)); // Pass only the id
    };

    // deleteitem to cart
    const handleDeleteCart = (e) => {
        dispatch(removeToCart(e));
        toast.success("Item removed from your cart");
    };

    // emptycarts
    const handleemptycart = () => {
        dispatch(emptycartitem());
        toast.success("Your cart is empty");
    };

    // Calculate total price
    useEffect(() => {
        let totalPrice = 0;
        allCartItem.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
    }, [allCartItem]);

    return (
        <Layout>
            <div className="bg-[#FFF8EE]">
                {/* Background Image Banner */}
                <div className="h-72 bg-cover bg-center bg-[url('/img/image_items_bg.jpg')]"></div>

                <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-10 md:py-16 bg-[#FFF8EE]">
                    <h1 className="text-3xl font-semibold mb-6 text-center">
                        My Cart ({allCartItem.length})
                    </h1>

                    {/* Main Cart Container */}
                    <div className="w-full md:w-3/4 bg-white shadow-lg rounded-lg p-6 md:p-8">
                        {/* Table Structure */}
                        <div className="overflow-x-auto">
                            {allCartItem && allCartItem.length > 0 ? (
                                <table className="w-full text-left">
                                    <thead className="bg-[#CC3333] text-white">
                                        <tr>
                                            <th className="py-3 px-4">Product</th>
                                            <th className="py-3 px-4">Product Name</th>
                                            <th className="py-3 px-4">Unit Price</th>
                                            <th className="py-3 px-4">Quantity</th>
                                            <th className="py-3 px-4">Total</th>
                                            <th className="py-3 px-4">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allCartItem.map((item) => (
                                            <tr key={item.id} className="border-b">
                                                <td className="py-5">
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-16 h-16 object-cover rounded-md shadow-md"
                                                    />
                                                </td>
                                                <td className="py-4 px-6 font-bold">{item.title}</td>
                                                <td className="py-4 px-6 font-semibold">${item.price}</td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center">
                                                        <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-200 text-gray-700 px-2 rounded-l">-</button>
                                                        <span className="px-4">{item.quantity}</span>
                                                        <button onClick={() => handleIncreaseQuantity(item)} className="bg-gray-200 text-gray-700 px-2 rounded-r">+</button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 font-semibold">
                                                    ${ (item.price * item.quantity).toFixed(2) }
                                                </td>
                                                <td className="py-4 px-6">
                                                    <button onClick={() => handleDeleteCart(item.id)} className="text-red-600 text-2xl hover:text-red-800">
                                                        <BsTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-10 text-lg font-medium">
                                    <img className="md:h-[17vw] md:w-[17vw]" src="https://www.babyday.in/static/media/cart-empty.27846abe.gif" alt="Cart Empty" />
                                    <p>Your cart is empty</p>
                                </div>
                            )}
                        </div>

                        {/* Coupon Code and Subtotal Section */}
                        {allCartItem && allCartItem.length > 0 && (
                            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                                <div className="mb-4">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="font-medium text-gray-700">Subtotal:</span>
                                        <span className="text-gray-800">${total}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between border-t pt-2 mb-4">
                                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                                    <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
                                    <button onClick={handleemptycart} className="flex items-center justify-center gap-2 bg-red-500 text-white text-sm sm:text-base px-3 py-2 rounded-md hover:bg-red-600 transition duration-300 w-full sm:w-auto">
                                        Clear Cart
                                    </button>
                                    {isUserLoggedIn ? (
                                        <button className="bg-green-500 text-white text-sm sm:text-base px-3 py-2 rounded-md hover:bg-green-600 transition duration-300 w-full sm:w-auto">
                                            <Link to={'/check_out_page'}>Proceed to Checkout</Link>
                                        </button>
                                    ) : (
                                        <p className="text-red-500 text-lg">Please login to proceed with checkout</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
