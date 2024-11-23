import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchData } from "../api/crudServices";
import { profileType } from "../models/profile";

export function useProfile() {
    const [profile, setProfile] = useState<profileType>({}as profileType);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        async function fetchProducts () {
            setIsLoading(true)
            try {
                const res = await fetchData('/auth/me');
                setProfile(res)
            } catch (error: any) {
                toast.error(`${error.message as string +'. Try logging out then loggin in again' || "Something went wrong. Try logging out then loggin in again"}`, {duration: 5000});
            } finally{
                setIsLoading(false)
            }
        };
        fetchProducts()
    }, [])

    return {isLoading, profile};
}