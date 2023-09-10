import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    const url = process.env.NEXT_PUBLIC_API_URL as string;
    const params = {
        query: `query {
            allProducts {
                id
                name
                price_in_cents
                image_url
            }
        }
    `}

    return axios.post(url, params);
}

export function useProducts() {
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    });

    console.log('aqui', data);

    return {
        data: data?.data?.data?.allProducts
    }
}