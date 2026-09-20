import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import NavBar from "./NavBar";
import plants from "./plants.json";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false); 

  const plantArray = plants;

  const navLinks = [{ label: "Plantas", href: "#plants" }];

  const iconLink =
    "https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png";

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
   if(showCart === false){
        setShowCart(true)
   } else{
    setShowCart(false)
   }
  };

  
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="product-list-page">
      <NavBar links={navLinks} appName={"Paradise Nursery"} iconLink={iconLink}>
        <div className="cart-link-container">
          <a href="#" className="cart-link" onClick={handleCartClick}>
            <span className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="25"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </span>
          </a>
        </div>
      </NavBar>
      <main className="main_container">
        {!showCart ? (
          <div className="product-grid"></div>
        ) : (
          <CartItem onContinueShopping={handleContinueShopping} />
        )}
      </main>
    </div>
  );
}

export default ProductList;