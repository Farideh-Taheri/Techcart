import { FaShoppingCart } from "react-icons/fa";
import "../App.css";
import { useCart } from "../features/cart/CartContext";

export function Cart() {
    const { cartItems, clearCart, increaseQuantity, decreaseQuantity } = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0)
  
    return (
      <div style= {{textAlign:"center"}}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (<p>Your cart is empty.</p>) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} style={{ width: "100px" }} />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <div>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>
            </div>
          ))
        )}
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          Total: ${totalPrice.toFixed(2)}
        </div>
        <button onClick={clearCart} className="clear-cart-button">Clear <FaShoppingCart size={20} /></button>
      </div>
    );
  }


