import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchData } from "../api/crudServices";
import { productType } from "../models/products";

export function useProducts() {
    const [products, setProducts] = useState<productType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        async function fetchProducts () {
            console.log(isLoading, products)
            setIsLoading(true)
            try {
            const res = await fetchData('/products');
            setProducts(res.products)
            
            } catch (error: any) {
                toast.error(`${error.message as string +'. Try refreshing the page' || "Something went wrong. Try refreshing the page"}`, {duration: 5000});
            } finally{
                setIsLoading(false)
            }
        };
        fetchProducts()
    }, [])

    return {isLoading, products};
}