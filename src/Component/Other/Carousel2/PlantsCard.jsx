import React from "react";
import Button from "./Button";

const PlantCard = () => {
  return (
    <div className="card-info cursor-pointer w-64  mx-auto flex flex-col items-center justify-between border rounded-lg shadow-lg overflow-hidden">
      <div className="image relative w-full h-2/3">
        <div className="offer absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
          63%
          <br />OFF
        </div>
        <img
          src="plant_images/1.avif" // Use forward slashes for paths
          alt="Hibiscus"
          className="zoom w-full h-full object-cover rounded"
        />
      </div>

      <div className="price mt-2 text-center w-full mb-4">
        <p className="mt-2 text-sm font-medium">
          Hibiscus Double (any colour) in 4 Inch Nursery Bag
        </p>
        <span className="actual-price text-green-600 font-bold mr-2">₹35</span>
        <span className="strike-price text-gray-500 line-through text-sm">₹219</span>
        <br />
        <span className="review text-yellow-500 mt-1 inline-block">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="fa fa-star checked mr-0.5"></span>
          ))}{" "}
          <span role="img" aria-label="star">🌟🌟🌟🌟🌟</span>
          <span className="text-gray-700 text-sm pr-2">
            49 Reviews 
          </span>
        </span>
        <br />
       <div className="mb-6 mt-4">
       <Button/>
       </div>
      </div>
    </div>
  );
};

export default PlantCard;