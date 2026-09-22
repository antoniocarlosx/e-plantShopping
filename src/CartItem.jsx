import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = (cart) => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.cost * item.quantity;
    });
    return totalAmount;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e)
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const totalCostItem = +item.cost * item.quantity;
  
    return totalCostItem;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>Valor Total do Carrinho</h2>
      {cart ? (
        <span>R$ {calculateTotalAmount(cart)},00</span>
      ) : (
        <span>Carrinho Vazio</span>
      )}
      <div className="cart-grid">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">R$ {item.cost},00</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: R$ {calculateTotalCost(item)},00
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
         <button onClick={ () => window.print()} className="print-btn">Baixar Orçamento (PDF)</button>
        <br />
        <button className="get-started-button1">Pagar</button>
      </div>
    </div>
  );
};

export default CartItem;
