import { createContext, useState} from "react";
import type { ReactNode } from "react";
import { useContext } from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}
interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    clearCart: () => void;
    increaseQuantity: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([]);
   
    const addToCart= (product: Product) => {
        setCartItems((prevItem) => [...prevItem, { ...product, quantity: 1 }])
    }
    const increaseQuantity = (product: Product) => {
        setCartItems(prevItem => prevItem.map(item => item.id === product.id? {...item, quantity: item.quantity + 1 } : item).filter(item => item.quantity > 0) )
    }
    const decreaseQuantity = (product: Product) => {
        setCartItems(prevItem => prevItem.map(item => item.id === product.id? {...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0) )
    }
    const clearCart = () => {
        setCartItems([]);
      };

return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, increaseQuantity, decreaseQuantity  }}>
        {children} 
    </CartContext.Provider>
)
}
export function useCart () {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used inside a CartProvider");
    return context;
}