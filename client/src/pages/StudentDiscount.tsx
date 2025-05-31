import { useQuery } from "@tanstack/react-query";
import "../products.css"
import axios from "axios";
import { useCart } from "../features/cart/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const StudentDiscount = () => {
    const { addToCart } = useCart();
    const {isLoading, error, data} = useQuery<Product[], Error>({
        queryKey: ["student-discount"],
        queryFn: async () => {
            const res = await axios.get("https://fakestoreapi.in/api/products/category?type=laptop")
            return res.data.products.map ((product: Product) => ({
                ...product,
                originalPrice: product.price,
                price: +(product.price * 0.95).toFixed(2),
            }))

        }
    })
    
    if (isLoading) return <p>Loading Items with Student Discounts...</p>
    if (error) return <p> Error: {error.message} </p>

    return(
    <div className="product-page">
      <h2>🎓 Student Discounts (5% Off)</h2>
         <div className="product-grid">
        {data?.map((product) => (
            <div className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p className="product-price">
                <span style={{ textDecoration: "line-through", color: "#888" }}>
                    ${product.originalPrice?.toFixed(1)}
                </span>
                <br/>
                <span style={{ fontWeight: "bold", color: "#e63946" }}>
                    ${product.price.toFixed(2)}
                </span>
            </p>
            <button onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart 🛒</button>
            </div>
            ))}
        </div>
    </div>
    )
}
export default StudentDiscount;