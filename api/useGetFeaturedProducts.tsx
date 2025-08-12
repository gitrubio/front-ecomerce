
import { useEffect, useState } from "react";


export default function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeature][$eq]=true&populate=*`;
    
    const [featuredProducts, setFeaturedProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error fetching featured products");
                }
                const data = await response.json();
                setFeaturedProducts(data.data);
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

        fetchFeaturedProducts();
    }, [url]);

    return { result: featuredProducts, loading, error };
}

