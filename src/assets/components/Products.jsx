import React from "react";

function Products({val})
{
    return(
        <div className="w-64 h-72 mb-20 mr-20 ml-20 border-solid border-2 border-black">
            <img className="w-full h-full object-cover overflow-hidden " src= {val.image} alt="" />
            <h3 className="text-center font-semibold text-xl mb-3">{val.name}</h3>
            <button className="bg-yellow-300 text-black rounded w-full">Add to Cart</button>
        </div>
    );
}

export default Products;