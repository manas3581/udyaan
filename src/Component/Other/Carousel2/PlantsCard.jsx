import React from "react";
import Button from "./Button";

const PlantCard = ({ id, name, price, image}) => {
  return (
    <div className=" outline card-info cursor-pointer w-full sm:w-72 mx-auto flex flex-col items-center justify-between rounded-lg shadow-lg overflow-hidden">
      <div className="image relative w-full  min-h-48 overflow-hidden">
        <div className="offer absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
          63%
          <br />OFF
        </div>
        <img
          src={image}
          alt={name}
          className="zoom w-full h-full object-cover" 
        />
      </div>

      <div className="price mt-2 text-center w-full mb-4 px-2">
        <p className="mt-2 text-sm font-medium">
          {name}
        </p>
        <span className="actual-price text-green-600 font-bold mr-2">₹35</span> |
        <span className="strike-price text-gray-500 line-through text-sm">{price}</span>
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
          <Button />
        </div>
      </div>
    </div>
  );
};

export default PlantCard;