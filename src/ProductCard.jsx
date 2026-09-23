import React from "react";

const ProductCard = ({ plant, isAdded, onAddToCart }) => {
  return (
    <>
      <div className="product-card" >
        <img
          className="product-image "
          src={plant.image}
          alt={plant.name}
          loading="lazy"
        />
        <p className="product-title">{plant.name}</p>
        <span className="product-description">{plant.description}</span>
        <p className="product-price">R${plant.cost},00</p>
        <div className="button-container">
          {isAdded ? (
            <button className="btn-warning btn-disabled">
              Adicionado
            </button>
          ) : (
            <button className="product-button" onClick={() => onAddToCart(plant)}>
              Adicionar ao Carrinho
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
