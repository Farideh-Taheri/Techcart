import { useNavigate } from "react-router-dom";
export function HomePage () {
    const navigate = useNavigate ()
    return (
        <div className="grid-container">
        <div className="grid-item" onClick={() => navigate('/category/mobile')} role="button" tabIndex={0}>Discover Trending Cell Phones <br/>
        <img src="/images/smartphones.jpg" alt="smartphones" style={{ width: "100%", height: "auto" }}/></div>
        <div className="grid-item" onClick={() => navigate('/category/appliances')} role="button" tabIndex={0}>New Home Arrivals <br/>
        <img src="/images/home appliances.jpg" alt="New Home Appliances" style={{width: "100%", height: "auto" }} /></div>
        <div className="grid-item" onClick={() => navigate('/category/gaming?maxPrice=20')} role="button" tabIndex={0}>Gaming Accessories under $20 <br/>
        <img src="/images/gaming.avif" alt="gaming accessories" style={{width: "100%", height: "auto" }}/></div>
        <div className="grid-item" onClick={() => navigate('/category/laptop')} role="button" tabIndex={0}>Level Up Your Laptop and PC <br/>
        <img src="/images/laptop.jpg" alt="Laptops" style={{width: "100%", height: "auto" }} /></div>
        <div className="grid-item" onClick={() => navigate('/category/tv')} role="button" tabIndex={0}>Deals on Top Televisions <br/>
        <img src="/images/TV.jpg" alt="TV" style={{width: "100%", height: "auto" }}/></div>
        <div className="grid-item" onClick={() => navigate('/StudentDiscount')} role="button" tabIndex={0}>Student Discounts <br/>
        <img src="/images/discount.jpg" alt="Student Discount" style={{width: "100%", height: "auto" }}/></div>
        </div>
    )
}