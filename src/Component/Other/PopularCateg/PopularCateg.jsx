import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularCateg.css";

// Import images
import popcat1 from "/popcat1.avif";
import popcat2 from "/popcat2.avif";
import popcat3 from "/popcat3.avif";
import popcat4 from "/popcat4.avif";
import popcat5 from "/popcat5.avif";
import popcat6 from "/popcat6.avif";

const PopularCateg = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, name: "Flowering Plants", image: popcat1, path: "/browse/flowering-plants" },
    { id: 2, name: "Indoor Plants", image: popcat2, path: "/browse/indoor-plants" },
    { id: 3, name: "Potted Plants", image: popcat3, path: "/browse/potted-plants" },
    { id: 4, name: "Special Plant Combos", image: popcat4, path: "/browse/special-plant-combos" },
    { id: 5, name: "Pots", image: popcat5, path: "/browse/pots" },
    { id: 6, name: "Soil & More", image: popcat6, path: "/browse/soil-and-more" },
  ];

  return (
    <div className="popular-categories-container">
      <h2 className="popular-categories-title">Popular Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-item" onClick={() => navigate(category.path)}>
            <div className="category-image-container">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
            </div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCateg;

