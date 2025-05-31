import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./services/ProductService.tsx";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./pages/layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { Register } from "./pages/Register.tsx";
import { Login } from "./pages/Login.tsx";
import { Cart } from "./pages/Cart.tsx";
import { FilterProvider } from "./features/products/FilterContext.tsx";
import { CartProvider } from "./features/cart/CartContext";
import StudentDiscount from "./pages/StudentDiscount.tsx";
import { SearchResults } from "./pages/SearchRoute.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Terms from "./pages/Terms.tsx";
import Shipping from "./pages/Shipping.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/category/:name", element: <Products /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/StudentDiscount", element: <StudentDiscount /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Terms", element: <Terms /> },
      { path: "/Shipping", element: <Shipping /> },
      { path:"/search", element:<SearchResults /> },

    ]
  },
]);

function App() {
  const client = new QueryClient();

  return (
    <FilterProvider>
      <CartProvider>
        <QueryClientProvider client={client}>
           <RouterProvider router={router} />
         <ScrollToTop />
        </QueryClientProvider>
      </CartProvider>
    </FilterProvider>
  );
}

export default App;
