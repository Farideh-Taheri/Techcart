import { createContext, useContext, useState } from "react";
import type { ReactNode } from 'react';

type Order = "asc" | "desc"
interface FilterPriceType {
    maxPrice : number
    setMaxPrice : (price: number) => void;
    order: Order;
    setOrder: (order: Order) => void;

}
const FilterContext = createContext<FilterPriceType | undefined>(undefined)
export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [maxPrice, setMaxPrice] = useState<number>(Infinity);
    const [order, setOrder] = useState<Order>("asc");

return (
        <FilterContext.Provider value={{ maxPrice, order, setMaxPrice, setOrder }}>
        {children}
        </FilterContext.Provider>
    )
};

export function useFilter ():FilterPriceType {
    const context = useContext(FilterContext)
    if (!context) {throw new Error("useFilter must be used within a FilterProvider");}
    return context;
}