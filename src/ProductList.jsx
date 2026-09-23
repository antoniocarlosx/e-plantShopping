import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import NavBar from "./NavBar";
import GoHomeBtn from "./GoHomeBtn";
import GoCartBtn from "./GoCartBtn";
import ProductCard from "./ProductCard"
import plants from "./plants.json";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)

  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  //const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = plants;

  const navLinks = plantsArray.map((item) => ({
    label: item.category,
    href: `#${item.category.toLowerCase().replace(/\s+/g, "-")}`,
  }));

  const iconLink =
    "https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png";

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
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

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)

   
  };

  return (
    <div className="product-list-page">
      <NavBar links={navLinks} appName={"Paradise Nursery"} iconLink={iconLink}>
        <div className="cart-link-container">
          <a href="#cart" className="cart-link" onClick={handleCartClick}>
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

      {!showCart ? (
        <main className="main-container">
          {plantsArray.map((categoryGroup, index) => {
            const sectionId = categoryGroup.category
              .toLowerCase()
              .replace(/\s+/g, "-");
              

            return (
              <section key={index} id={sectionId} className="section-container">
                <h2>{categoryGroup.category}</h2>

                <div className="product-list">
                  {categoryGroup.plants.map((plant) => (

                  
                    <ProductCard 
                    key={plant.id}
                    plant={plant}
                    isAdded={cartItems.some((item) => item.id === plant.id)}
                    onAddToCart={() => handleAddToCart(plant)}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          <div className="fixed-btns">
            <GoHomeBtn href={"#home"} />
            <GoCartBtn onAction={handleCartClick} />
          </div>
        </main>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
