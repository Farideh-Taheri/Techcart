import "../App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import "../products.css";
import { useFilter } from "../features/products/FilterContext";
import { useCart } from '../features/cart/CartContext.tsx';

interface p {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function Products() {
  const { addToCart } = useCart();
  const { name } = useParams<{ name: string }>();
  const [searchParams] = useSearchParams();
  const {  order, setOrder, maxPrice } = useFilter();
  const urlMaxPrice = searchParams.get("maxPrice");
  const effectiveMaxPrice = urlMaxPrice ? parseFloat(urlMaxPrice) : maxPrice;
  
  if (!name) {
    return <p>Error: Category not found.</p>;
  }
  const { isLoading, error, data } = useQuery<p[], Error>({
    queryKey: ["products", name],
    queryFn: async () => {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${name}`
      );
      console.log("API data:", res.data);
      return res.data.products;
    },
  });

  if (isLoading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  const filterAndSort = data?.filter((Products) => Products.price <= effectiveMaxPrice)
  .sort((a , b)=> order === "asc" ? a.price - b.price : b.price - a.price)

  return (
    <>
    <div>
      <label>Sort by:
      <select value={order} onChange={(e) => setOrder(e.target.value as "asc" | "desc")}> 
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
      </select>
      </label>
    </div>
    <div className="product-page">
      <h2>Products in {name}</h2>
      <div className="product-grid">
        {Array.isArray(filterAndSort) && filterAndSort.length > 0 ? (
          filterAndSort.map((product: p) => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "auto" }}/>
              <p className="product-price">${product.price}</p>
              <button onClick={() => {
                addToCart({ ...product, quantity: 1 }); 
                alert(`${product.title} added to cart!`)
              }}>Add to Cart 🛒</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
    </>
  );
}

