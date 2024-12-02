import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Fooddata from "../Food/food.json";
import { useState } from "react";
import { addToCart } from "../Redux/AllSlices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodDetails = () => {
  const { foodId } = useParams();

  // Find the food item based on the URL parameter
  const food = Fooddata.find((item) => item.id === parseInt(foodId));

  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [showAlternateImage, setShowAlternateImage] = useState(false);

  const dispatch = useDispatch();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  if (!food) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }

  const handleAddToCart = (food) => {
    dispatch(addToCart(food));
    toast.success("Item added to cart");
  };

  // Calculate discounted price
  const discountedPrice = (food.price - (food.price * food.discount) / 100).toFixed(2);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-[#FFF8EE] px-4 py-8 md:px-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-4xl">
          {/* Image Section with Zoom Effect */}
          <div
            className="w-full md:w-1/2 flex items-center justify-center overflow-hidden relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={showAlternateImage ? food.alternateImg : food.img}
              alt={food.title}
              className="w-full cursor-crosshair max-h-96 object-cover rounded-md shadow-md transition-transform duration-300 ease-out"
              style={{
                transform: isHovering ? `scale(1.5)` : "scale(1)",
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{food.title}</h1>
            <p className="text-lg md:text-xl font-semibold text-gray-600">Rating: ⭐ {food.rating} / 5</p>
            <div className="flex items-center gap-10">
              <p className="text-xl">
                Npr{discountedPrice}
              </p>
              <del className="font-semibold text-red-500">
                npr {food.price}
              </del>
            </div>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">{food.description}</p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => handleAddToCart(food)}
                className="h-10 px-6 bg-red-500 hover:bg-red-600 text-white text-sm md:text-base font-medium rounded-md transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoodDetails;
