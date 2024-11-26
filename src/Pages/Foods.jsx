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

const Foods = () => {
    const dispatch = useDispatch()
    // addtocart logic here
    const ADDTOCART = (e)=>{
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

    const cartdata = useSelector((state) => state);
    // console.log(cartdata)
    return (
        <Layout>
            {isLoading && (
                <div className="absolute flex items-center justify-center top-0 left-0 h-[100vh]  z-[999] w-full bg-[#FFF8EE]">
                    <Loader />
                </div>
            )}
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
                    {filteredFoods.length > 0 ? (
                        filteredFoods.map((item) => (
                            <div key={item.id} className="card cursor-pointer  w-full sm:w-64 shadow-xl">
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">{item.title}</h2>
                                    <p className="text-black">{item.description}</p>
                                    <div className="card-actions flex items-center">
                                        <label className="text-2xl text-[#2A435D] font-bold">${item.price}</label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Link to={`/ourfoods/${item.id}`}>
                                            <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#CC3333]  transition duration-300">
                                                <BsEye className="text-2xl text-black hover:text-white" />
                                            </div>
                                        </Link>
                                        <div className="h-10 w-10 rounded-full flex items-center justify-center  hover:bg-[#CC3333] hover:text-red-500 transition duration-300">
                                            <button onClick={()=>ADDTOCART(item)}>
                                                <BsCart className="text-2xl text-black hover:text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center text-gray-500">
                            <div>No foods found matching your search.</div>
                        </div>
                    )}
                </div>


            </div>
        </Layout>
    );
};

export default Foods;
