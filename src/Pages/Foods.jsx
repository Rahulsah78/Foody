import { useEffect, useState } from "react";
import { BsCart, BsEye } from "react-icons/bs";
import Layout from "../Components/Layout/Layout";
import fooddata from "../Food/food.json";
import { HiAdjustments } from "react-icons/hi";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { addToCart } from '../Redux/AllSlices/CartSlice';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IoIosStar } from "react-icons/io";

const Foods = () => {
    const dispatch = useDispatch()
    // addtocart logic here
    const ADDTOCART = (e) => {
        dispatch(addToCart(e));
        toast.success("item is added in your cart")
    }

    // State for search input
    const [searchData, setSearchData] = useState("");
    // State for sorting
    const [sortOption, setSortOption] = useState("");

    // Function to handle input change
    const handleSearchChange = (e) => {
        setSearchData(e.target.value);
    };

    // Function to handle sorting change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Filtered and sorted food items based on search input and sorting option
    const filteredFoods = fooddata
        .filter((item) =>
            item.title.toLowerCase().includes(searchData.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "high-to-low") {
                return b.price - a.price; // Sort descending
            } else if (sortOption === "low-to-high") {
                return a.price - b.price; // Sort ascending
            }
            return 0; // No sorting
        });

    const cartdata = useSelector((state) => state);
    // console.log(cartdata)
    return (
        <Layout>
            
            <div className="min-h-screen bg-[#FFF8EE]">
                <div className="h-72 bg-cover bg-center bg-[url('/img/image_items_bg.jpg')]"></div>
                <div className="px-8 py-4 md:flex  items-center justify-between bg-white shadow-md rounded-lg w-full">
                    {/* Search form */}
                    <div className="w-full max-w-md">
                        <form className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Search your food"
                                value={searchData}
                                onChange={handleSearchChange}
                                className="text-[#cc3333] placeholder:text-[#cc3333] w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#CC3333]"
                            />

                        </form>
                    </div>

                    {/* Filter section */}
                    <div className="flex border-b-2 items-center space-x-4 py-2 px-4 bg-white shadow-sm rounded-lg">
                        {/* Filter icon and label */}
                        <div className="flex items-center text-gray-600 cursor-pointer hover:text-red-500 transition duration-200">
                            <HiAdjustments className="mr-2 text-xl" />
                            <span className="font-medium">Filter</span>
                        </div>

                        {/* Dropdown select */}
                        <select
                            value={sortOption}
                            onChange={handleSortChange}
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                        >
                            <option value="">Sort By Price</option>
                            <option value="high-to-low">High to Low</option>
                            <option value="low-to-high">Low to High</option>
                        </select>
                    </div>
                </div>

                {/* Cards here */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 p-5 md:px-16 pt-10">
                    {filteredFoods.map((item) => {
                        const discountedPrice = (item.price - (item.price * item.discount) / 100).toFixed(2);
                        return (
                            <div key={item.id} className="card cursor-pointer w-full sm:w-64 shadow-xl">
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                </figure>
                                <div className="card-body p-4">
                                    {/* Product Title */}
                                    <h2 className="card-title text-xl font-semibold text-gray-800 mb-2 truncate">{item.title}</h2>

                                    {/* Product Description */}
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>

                                    {/* Rating Section */}
                                    <div className="flex items-center text-[#cc3333] mb-3">
                                        <span className="mr-2 font-semibold text-lg">{item.Rating}</span>
                                        <IoIosStar className="text-[#cc3333]" />
                                    </div>

                                    {/* Price and Discounted Price */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="text-xl font-bold text-[#1c7c54]">
                                            NPR {(item.price - (item.price * item.discount) / 100).toFixed(2)}
                                        </span>
                                        <del className="text-sm text-gray-500">NPR {item.price}</del>
                                    </div>

                                    {/* Actions Section */}
                                    <div className="flex items-center justify-between">
                                        {/* View Product Button */}
                                        <Link to={`/ourfoods/${item.id}`}>
                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#cc3333] transition-all duration-300">
                                                <BsEye className="text-xl text-gray-700 hover:text-white" />
                                            </div>
                                        </Link>

                                        {/* Add to Cart Button */}
                                        <button
                                            onClick={() => ADDTOCART(item)}
                                            className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#cc3333] transition-all duration-300"
                                        >
                                            <BsCart className="text-xl text-gray-700 hover:text-white" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>


            </div>
        </Layout>
    );
};

export default Foods;
