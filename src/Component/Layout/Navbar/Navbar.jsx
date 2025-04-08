import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faMapMarkerAlt,
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 


import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [location, setLocation] = useState("560079 Bangalore");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Navigation dropdown data
  const navDropdowns = {
    plants: {
      title: "Plants",
      columns: [
        {
          title: "Flower Plants",
          links: [
            {
              name: "Summer Flowering Plants",
              path: "/browse/summer-flowering",
            },
            {
              name: "Flowering Perennial Plants",
              path: "/browse/perennial",
            },
            { name: "Flowering Decor Plants", path: "/browse/decor" },
            {
              name: "Winter Flowering Plants",
              path: "/browse/winter-flowering",
            },
            { name: "White Flower Plants", path: "/browse/white" },
            { name: "Red Flower Plants", path: "/browse/red" },
            {
              name: "Fragrant Flowering Plants",
              path: "/browse/fragrant",
            },
            { name: "Yellow Flower Plants", path: "/browse/yellow" },
          ],
        },
        {
          title: "Indoor Plants",
          links: [
            { name: "Large Indoor Plants", path: "/browse/indoor-large" },
            {
              name: "Beautiful Table Top Plants",
              path: "/browse/indoor-table-top",
            },
            { name: "Large Decor Plants", path: "/browse/indoor-decor" },
          ],
        },
        {
          title: "Potted Plants",
          links: [{ name: "Potted Plants", path: "/browse-potted" }],
        },
        {
          title: "Herbs Medicinal Plants and Vegetables",
          links: [
            {
              name: "Vegetable Plants",
              path: "/browse/herbs-vegetables-vegetable",
            },
            {
              name: "Herbs And Medicinal Plants",
              path: "/browse/herbs-vegetables-medicinal",
            },
          ],
        },
        {
          title: "Special Plant Combos",
          links: [{ name: "Special Plant Combos", path: "/browse/combos" }],
        },
      ],
      extraColumns: [
        {
          title: "Cactus and Succulents",
          links: [
            {
              name: "Succulents",
              path: "/browse/cactus-succulents-succulents",
            },
            { name: "Cactus", path: "/browse/cactus-succulents-cactus" },
          ],
        },
        {
          title: "Low Maintenance Plants",
          links: [
            { name: "Low Maintenance Plants", path: "/browse-low-maintenance" },
          ],
        },
        {
          title: "Rare Exotic Plants",
          links: [{ name: "Rare Exotic Plants", path: "/browse-rare-exotic" }],
        },
        {
          title: "Oxygen Generating Air Purifying Plants",
          links: [{ name: "Oxygen Plants", path: "/browse-oxygen-plants" }],
        },
        {
          title: "Wellbeing Plants",
          links: [
            { name: "Vastu Plants", path: "/browse-wellbeing-vastu" },
            {
              name: "Creativity Booster Plants",
              path: "/browse/wellbeing/creativity",
            },
            { name: "Mood Booster Plants", path: "/browse-wellbeing-mood" },
            {
              name: "Positive Energy Plants",
              path: "/browse/wellbeing-energy",
            },
          ],
        },
      ],
      moreColumns: [
        {
          title: "Outdoor Plants",
          links: [
            { name: "Outdoor Foliage Plants", path: "/browse/outdoor-foliage" },
            { name: "Outdoor Decor Plants", path: "/browse/outdoor-decor" },
            { name: "Large Outdoor Plants", path: "/browse/outdoor-large" },
            { name: "Grass", path: "/browse/outdoor-grass" },
          ],
        },
        {
          title: "Plants by Location",
          links: [
            { name: "Terrace Plants", path: "/browse/by-location-terrace" },
            {
              name: "Plants for Bathroom",
              path: "/browse/by-location-bathroom",
            },
            { name: "Plants for Bedroom", path: "/browse/by-location-bedroom" },
            {
              name: "Plants for Study Room",
              path: "/browse/by-location/study",
            },
            { name: "Plants for Kitchen", path: "/browse/by-location-kitchen" },
            {
              name: "Plants for Living Room",
              path: "/browse/by-location-living-room",
            },
            { name: "Plants for Office", path: "/browse/by-location-office" },
            {
              name: "Plants for Low Light Balconies",
              path: "/browse/by-location-low-light-balconies",
            },
            {
              name: "Plants for Bright Light Balconies",
              path: "/browse/by-location-bright-light-balconies",
            },
          ],
        },
        {
          title: "Plants by Season",
          links: [
            { name: "Perennial Plants", path: "/browse/by-season-perennial" },
            { name: "Monsoon Plants", path: "/browse/by-season-monsoon" },
            { name: "Winter Plants", path: "/browse/by-season-winter" },
            { name: "Summer Plants", path: "/browse/by-season-summer" },
          ],
        },
        {
          title: "Good Luck Plants",
          links: [{ name: "Good Luck Plants", path: "/browse-good-luck" }],
        },
        {
          title: "Insect Repellent Plants",
          links: [
            {
              name: "Lizard Repellent Plants",
              path: "/browse/insect-repellent-lizard",
            },
            {
              name: "Mosquito Repellent Plants",
              path: "/browse/insect-repellent-mosquito",
            },
          ],
        },
      ],
      additionalColumns: [
        {
          title: "Fruit Plants",
          links: [{ name: "Fruit Plants", path: "/browse/fruit" }],
        },
        {
          title: "Plants of the Month",
          links: [{ name: "Plants of the Month", path: "/browse/month" }],
        },
        {
          title: "Hanging Plants",
          links: [{ name: "Hanging Plants", path: "/browse/hanging" }],
        },
        {
          title: "Desert Plants",
          links: [{ name: "Desert Plants", path: "/browse/desert" }],
        },
        {
          title: "Bonsai Plants",
          links: [{ name: "Bonsai Plants", path: "/browse/bonsai" }],
        },
        {
          title: "Trees",
          links: [{ name: "Trees", path: "/browse/trees" }],
        },
        {
          title: "Religious and Sacred Plants",
          links: [
            { name: "Religious and Sacred Plants", path: "/browse/religious" },
          ],
        },
        {
          title: "Climbers And Creepers",
          links: [{ name: "Climbers And Creepers", path: "/browse/climbers" }],
        },
      ],
    },
    pots: {
      title: "Pots",
      columns: [
        {
          title: "Pots by Material",
          links: [
            { name: "Ceramic Pots", path: "/browse/pots-ceramic" },
            { name: "Plastic Pots", path: "/browse/pots-plastic" },
            { name: "Terracotta Pots", path: "/browse/pots-terracotta" },
            { name: "Metal Pots", path: "/browse/pots-metal" },
          ],
        },
        {
          title: "Pots by Size",
          links: [
            { name: "Small Pots", path: "/browse/pots-small" },
            { name: "Medium Pots", path: "/browse/pots-medium" },
            { name: "Large Pots", path: "/browse/pots-large" },
          ],
        },
      ],
    },
    soil: {
      title: "Soil & More",
      columns: [
        {
          title: "Soil",
          links: [
            { name: "Potting Soil", path: "/browse/soil-potting" },
            { name: "Garden Soil", path: "/browse/soil-garden" },
            { name: "Cactus Mix", path: "/browse/soil-cactus" },
          ],
        },
        {
          title: "Fertilizers",
          links: [
            {
              name: "Organic Fertilizers",
              path: "/browse/soil-organic-fertilizers",
            },
            {
              name: "Chemical Fertilizers",
              path: "/browse/soil-chemical-fertilizers",
            },
          ],
        },
      ],
    },
    homeDecor: {
      title: "Home Decor Plants",
      columns: [
        {
          title: "Indoor Decor",
          links: [
            { name: "Table Plants", path: "/browse/home-decor-table" },
            { name: "Floor Plants", path: "/browse/home-decor-floor" },
            { name: "Hanging Plants", path: "/browse/home-decor-hanging" },
          ],
        },
        {
          title: "Special Collections",
          links: [
            { name: "Office Plants", path: "/browse/home-decor-office" },
            { name: "Bedroom Plants", path: "/browse/home-decor-bedroom" },
            { name: "Living Room Plants", path: "/browse/home-decor-living" },
          ],
        },
      ],
    },
    seeds: {
      title: "Seeds",
      columns: [
        {
          title: "Flower Seeds",
          links: [
            {
              name: "Annual Flower Seeds",
              path: "/browse/seeds-annual-flowers",
            },
            {
              name: "Perennial Flower Seeds",
              path: "/browse/seeds-perennial-flowers",
            },
          ],
        },
        {
          title: "Vegetable Seeds",
          links: [
            {
              name: "Leafy Vegetable Seeds",
              path: "/browse/seeds-leafy-vegetables",
            },
            {
              name: "Root Vegetable Seeds",
              path: "/browse/seeds-root-vegetables",
            },
            {
              name: "Fruit Vegetable Seeds",
              path: "/browse/seeds-fruit-vegetables",
            },
          ],
        },
      ],
    },
    tools: {
      title: "Tools",
      columns: [
        {
          title: "Gardening Tools",
          links: [
            { name: "Hand Tools", path: "/browse-tools-hand" },
            { name: "Watering Tools", path: "/browse-tools-watering" },
            { name: "Pruning Tools", path: "/browse-tools-pruning" },
          ],
        },
        {
          title: "Plant Care",
          links: [
            { name: "Pesticides", path: "/browse-tools-pesticides" },
            { name: "Plant Supports", path: "/browse-tools-supports" },
          ],
        },
      ],
    },
    gifting: {
      title: "Gifting",
      columns: [
        {
          title: "Occasion",
          links: [
            { name: "Birthday Gifts", path: "/browse/gifting-birthday" },
            { name: "Anniversary Gifts", path: "/browse/gifting-anniversary" },
            {
              name: "Housewarming Gifts",
              path: "/browse/gifting-housewarming",
            },
          ],
        },
        {
          title: "Recipients",
          links: [
            { name: "Gifts for Family", path: "/browse/gifting-family" },
            { name: "Corporate Gifts", path: "/browse/gifting-corporate" },
          ],
        },
      ],
    },
    bulkGifting: {
      title: "Bulk Gifting",
      columns: [
        {
          title: "Corporate",
          links: [
            { name: "Office Plants", path: "/browse/bulk-gifting-office" },
            { name: "Event Plants", path: "/browse/bulk-gifting-events" },
          ],
        },
        {
          title: "Special Occasions",
          links: [
            { name: "Wedding Favors", path: "/browse/bulk-gifting-wedding" },
            {
              name: "Anniversary Celebrations",
              path: "/browse/bulk-gifting-anniversary",
            },
          ],
        },
      ],
    },
    others: {
      title: "Others",
      columns: [
        {
          title: "Accessories",
          links: [
            { name: "Plant Stands", path: "/browse/others-stands" },
            { name: "Plant Hangers", path: "/browse/others-hangers" },
            { name: "Planters", path: "/browse/others-planters" },
          ],
        },
        {
          title: "Decor",
          links: [
            { name: "Garden Ornaments", path: "/browse/others-ornaments" },
            { name: "Indoor Decor", path: "/browse/others-indoor-decor" },
          ],
        },
      ],
    },
    sale: {
      title: "Sale",
      columns: [
        {
          title: "Plants on Sale",
          links: [
            { name: "Indoor Plants Sale", path: "/browse/sale-indoor" },
            { name: "Outdoor Plants Sale", path: "/browse/sale-outdoor" },
            { name: "Pots on Sale", path: "/browse/sale-pots" },
          ],
        },
        {
          title: "Seasonal Sales",
          links: [
            { name: "Monsoon Sale", path: "/browse/sale-monsoon" },
            { name: "Summer Sale", path: "/browse/sale-summer" },
            { name: "Flash Sale", path: "/browse/sale-flash" },
          ],
        },
      ],
    },
    bestSellers: {
      title: "Best Sellers",
      columns: [
        {
          title: "Most Popular",
          links: [
            {
              name: "Most Popular Plants",
              path: "/browse/best-sellers-popular-plants",
            },
            {
              name: "Most Popular Pots",
              path: "/browse/best-sellers-popular-pots",
            },
          ],
        },
        {
          title: "Featured Collections",
          links: [
            {
              name: "Air Purifying Collection",
              path: "/browse/best-sellers-air-purifying",
            },
            {
              name: "Low Maintenance Collection",
              path: "/browse/best-sellers-low-maintenance",
            },
          ],
        },
      ],
    },
  };

  return (
    <div className="navbar-container">
      {/* Top bar with social icons and delivery message */}
      <div className="top-bar">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/urvann.india"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/groups/217942056914835"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.youtube.com/c/UrvannAcademy"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.linkedin.com/company/urvann/"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=919599585773&text&type=phone_number&app_absent=0"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="mailto:customersupport@urvann.com"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://in.pinterest.com/urvann_india/"
            className="social-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
        <div className="delivery-message">
          ✨ Free Next Day Delivery on Orders Received by 7 PM ✨
        </div>
      </div>

      {/* Main navbar with logo, search and actions */}
      <div className="main-navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo.avif" alt="Nurvann Logo" />
          </Link>
        </div>

        <div className="location-selector">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{location}</span>
          <button className="change-btn">(Change)</button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search by Products" />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="nav-actions">
          <Link to="/help" className="help-btn">
            GET HELP
          </Link>
          <Link to="/login" className="login-btn">
            LOGIN
          </Link>
          <Link to="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Navigation menu */}
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`} ref={dropdownRef}>
        <ul className="menu-items">
          {Object.keys(navDropdowns).map((key) => (
            <li
              key={key}
              className={`menu-item dropdown ${
                activeDropdown === key ? "active" : ""
              }`}
              onClick={() => toggleDropdown(key)}
            >
              <Link to={`/${key}`} onClick={(e) => e.preventDefault()}>
                {navDropdowns[key].title}
              </Link>
              <FontAwesomeIcon icon={faChevronDown} />

              {activeDropdown === key && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {navDropdowns[key].columns &&
                      navDropdowns[key].columns.map((column, index) => (
                        <div key={index} className="dropdown-column">
                          <h3>{column.title}</h3>
                          <ul>
                            {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link to={link.path}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {navDropdowns[key].extraColumns &&
                      navDropdowns[key].extraColumns.map((column, index) => (
                        <div key={`extra-${index}`} className="dropdown-column">
                          <h3>{column.title}</h3>
                          <ul>
                            {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link to={link.path}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {navDropdowns[key].moreColumns &&
                      navDropdowns[key].moreColumns.map((column, index) => (
                        <div key={`more-${index}`} className="dropdown-column">
                          <h3>{column.title}</h3>
                          <ul>
                            {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link to={link.path}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {navDropdowns[key].additionalColumns &&
                      navDropdowns[key].additionalColumns.map(
                        (column, index) => (
                          <div
                            key={`additional-${index}`}
                            className="dropdown-column"
                          >
                            <h3>{column.title}</h3>
                            <ul>
                              {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link to={link.path}>{link.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                  </div>
                </div>
              )}
            </li>
          ))}

          <li className="menu-item">
            <Link to="/browse/plant-stands">Plant Stands</Link>
          </li>

          <li className="menu-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
