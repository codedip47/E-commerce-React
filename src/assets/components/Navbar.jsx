import React from "react";

function Navbar()
{
    return(
        <div className="w-full h-16 bg-black flex justify-between p-3 px-6">
            <div>
                <h1 className="text-3xl font-bold text-yellow-400">My React Store</h1>
            </div>
            <div className="flex gap-10 text-l text-yellow-400">
                <button className=" bg-yellow-300 text-black px-4 rounded">Add Products</button>
                <button className=" bg-yellow-300 text-black px-4 rounded">Cart</button>
            </div>
        </div>
    );
}   

export default Navbar;