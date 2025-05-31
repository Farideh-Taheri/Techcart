import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const categories = ["appliances", "mobile", "gaming", "laptop", "tv"];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const fetchPromises: Promise<Product[]>[] = categories.map((cat) =>
        axios.get(`https://fakestoreapi.in/api/products/category?type=${cat}`)
      .then((res) => res.data.products) 
      .catch((err) => {
      console.error(`Error fetching category "${cat}":`, err);
      return [];
    })
);

      const allResults = await Promise.allSettled(fetchPromises);

      const allProducts = allResults
        .filter(
          (r): r is PromiseFulfilledResult<Product[]> =>
            r.status === "fulfilled"
        )
        .flatMap((r) => r.value);

    const filtered = allProducts.filter((product: Product) => {
        const title = product.title || "";
        const description = product.description || "";
        const category = product.category || "";
        return (
            title.toLowerCase().includes(query.toLowerCase()) ||
            description.toLowerCase().includes(query.toLowerCase()) ||
            category.toLowerCase().includes(query.toLowerCase())
        );
    });

      setResults(filtered);
      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>
        Search Results for: <em>{query}</em>
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {results.map((product: Product) => (
            <li key={product.id} style={{ margin: "1rem 0" }}>
              <img src={product.image} alt={product.title} width={100} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

