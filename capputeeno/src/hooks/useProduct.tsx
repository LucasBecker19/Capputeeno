import { ProductFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
    const url = process.env.NEXT_PUBLIC_API_URL as string;
    const params = {
        query: `
            query {
                Product(id: "${productId}") {
                    name
                    description
                    category
                    price_in_cents
                    image_url
                }
            }
        `,
    }

    return axios.post(url, params);
}

export function useProduct(id: string) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id
    });   
    
    return {
        data: data?.data?.data?.Product
    }
}