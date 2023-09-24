"use client"

import { styled } from "styled-components";
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`;

export function ProductsList() {
    const { data } = useProducts();
    
    return (
        <ListContainer>
            {data?.map(product => <ProductCard
                key={product.id}
                image={product.image_url}
                title={product.name}
                price={product.price_in_cents}
                id={product.id}
            />)}
        </ListContainer>
    )
}