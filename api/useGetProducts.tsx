import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export default function useGetProducts() {
    
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*`;
    const [result, setResult] = useState<null | ProductType[] >(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                console.log("Products fetched:", json.data);
                
                setResult(json.data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { result, loading, error };

}