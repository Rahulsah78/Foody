import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-[#AFF0E4]'>
            <img src="https://media4.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=6c09b952t3myb9a6xgp9smpnios3rdbio662b2a97z49uwsh&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="not_found" />
            <button className="px-6 py-3 bg-[#CC3333] text-[#FFF8EE] font-semibold text-lg rounded-lg shadow-md hover:bg-red-400 hover:shadow-lg transition duration-300">
                <Link to="/" className="w-full h-full block text-center">Go To Home Page</Link>
            </button>
        </div>
    )
}

export default NotFound
