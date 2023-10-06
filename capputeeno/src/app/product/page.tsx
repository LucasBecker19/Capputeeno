"use client";

import { BackButton } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { AddCartButton } from "@/components/product/add-cart-button";
import { ProductInfo } from "@/components/product/product-info";
import { useProduct } from "@/hooks/useProduct";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
            max-widht: 640px;
            width: 50%;
        }

        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
    }
`;

export default function Product({ searchParams }: { searchParams: { id: string } }) {
    const { data } = useProduct(searchParams.id);

    const params = {
        category: data?.category,
        name: data?.name,
        price_in_cents: data?.price_in_cents,
        description: data?.description,
        image_url: data?.image_url
    }

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url} alt="Imagem do produto" />

                    <div>
                        <ProductInfo {...params} />

                        <AddCartButton 
                            {...params} 
                            id={searchParams.id} 
                        />
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}