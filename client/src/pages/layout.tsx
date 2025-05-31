import { Outlet } from "react-router-dom";
import { Nav} from "../navbar.tsx";
import { useNavigate } from "react-router-dom";
import "../App.css";

export function Layout() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
    navigate("/AboutUs");
    };
    const handleTermsClick = () => {
    navigate("/Terms");
    };
    const handleShippingClick = () => {
    navigate("/Shipping");
    };

  return (
    <div className="app-container">
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer>
        <button type="button" onClick={handleAboutClick} >About Us</button>
        <button type="button" onClick={handleShippingClick}>Shipping & Returns</button>
        <button type="button" onClick={handleTermsClick}>Terms & Conditions</button>
      </footer>
      
    </div>
  );
}