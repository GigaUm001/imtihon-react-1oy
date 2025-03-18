import React from 'react'
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Nav = () => {
    return (
        <div className='w-[1200px] mx-auto'>

            <nav className='flex items-center justify-between '>
                <div className="text-2xl font-bold">Exclusive</div>

                <ul className='flex gap-[20px] items-center justify-center'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-full px-3 py-2">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="outline-none text-sm w-40"
                        />
                        <FaSearch className="text-gray-500" />
                    </div>

                    <div className="relative">
                        <FaHeart className="text-xl cursor-pointer text-gray-600" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
                    </div>
                    <FaShoppingCart className="text-xl cursor-pointer text-gray-600" />
                    <FaUser className="text-xl cursor-pointer text-gray-600" />
                </div>
            </nav>
        </div>
    )
}

export default Nav