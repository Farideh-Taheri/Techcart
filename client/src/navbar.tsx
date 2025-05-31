import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUserPlus, FaSignInAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Phone, Laptop, Monitor, Gamepad, WashingMachine } from "lucide-react";
import { useCart } from "./features/cart/CartContext";
import "./App.css";

export function Nav() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchItem.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchItem)}`);
    }
  };

  const categories = [
    { name: "Mobile Phones", type: "mobile", icon: <Phone /> },
    { name: "Laptops & Computers", type: "laptop", icon: <Laptop /> },
    { name: "Televisions & Displays", type: "tv", icon: <Monitor /> },
    { name: "Gaming", type: "gaming", icon: <Gamepad /> },
    { name: "Appliances", type: "appliances", icon: <WashingMachine /> },
  ];

  const handleClick = (type: string) => {
    navigate(`/category/${encodeURIComponent(type)}`);
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src="/images/TechCart Logo.png"
            alt="TechCart Logo"
          />
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch size={18} />
          </button>
        </form>

        <div className="nav-buttons">
          <Link to="/register">
            <FaUserPlus size={20} />
            <span className="sr-only">Register</span>
          </Link>

          <Link to="/login">
            <FaSignInAlt size={20} />
            <span className="sr-only">Login</span>
          </Link>

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>

      <div className="navbar-categories">
      {categories.map((category) => (
      <button
       key={category.type}
       className="category-button"
       onClick={() => handleClick(category.type)}
      >
      {category.icon}
      <span style={{ marginLeft: "6px" }}>{category.name}</span>
    </button>
      ))}
    </div>
  <div className="mobile-dropdown">
  <button className="hamburger-button" onClick={() => setShowDropdown(!showDropdown)}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </button>

  {showDropdown && (
    <div className="dropdown-menu">
      {categories.map((category) => (
        <button
          key={category.type}
          className="dropdown-item"
          onClick={() => handleClick(category.type)}
        >
          {category.icon}
          <span style={{ marginLeft: "8px" }}>{category.name}</span>
        </button>
      ))}
    </div>
  )}
  </div>
    </nav>
  );
}
