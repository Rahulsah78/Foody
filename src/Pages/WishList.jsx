import { BsTrash, BsCartPlus } from "react-icons/bs";
import Layout from "../Components/Layout/Layout";

const Wishlist = () => {
    const wishlistItems = [
        {
            id: 1,
            imageUrl: "/img/salad.png",
            name: "Belgium waffles with strawberries",
            price: 150,
            quantity: 2,
        },
        {
            id: 2,
            imageUrl: "/chicken-skewers.jpg",
            name: "Chicken skewers",
            price: 150,
            quantity: 1,
        },
        // Add more items as needed
    ];

    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-10 md:py-16 bg-[#FFF8EE]">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Wishlist</h1>
                    <div className="w-full md:w-3/4 bg-white shadow-lg rounded-lg p-6 md:p-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#CC3333] text-white">
                                    <tr>
                                        <th className="py-3 px-4">Product</th>
                                        <th className="py-3 px-4">Product Name</th>
                                        <th className="py-3 px-4">Unit Price</th>
                                        <th className="py-3 px-4">Quantity</th>
                                        <th className="py-3 px-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistItems.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="py-4 px-6">
                                                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md shadow-md" />
                                            </td>
                                            <td className="py-4 px-6">{item.name}</td>
                                            <td className="py-4 px-6">${item.price}</td>
                                            <td className="py-4 px-6">{item.quantity}</td>
                                            <td>
                                                <button className="text-green-600 mr-4 hover:text-green-800">
                                                    <BsCartPlus className="text-2xl"/>
                                                </button>
                                                <button className="text-red-600 hover:text-red-800">
                                                    <BsTrash className="text-2xl"/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Wishlist;
