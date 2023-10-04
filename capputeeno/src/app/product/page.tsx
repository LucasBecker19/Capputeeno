"use client";

import { BackButton } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { ShoppingBagIcon } from "@/components/icons/shopping-bag";
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

            button {
                background: #115D8C;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                line-height: 150%;
                text-transform: uppercase;
                
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 10px 0;
            }
        }
    }
`;

export default function Product({ searchParams }: { searchParams: { id: string } }) {
    const { data } = useProduct(searchParams.id);
    
    const handleAddToCart = () => {
        const cartItems = localStorage.getItem('cart-items');

        if(cartItems) {
            const cartItemsArray = JSON.parse(cartItems);

            const existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === searchParams.id);
            
            if(existingProductIndex != -1) {
                cartItemsArray[existingProductIndex].quantity += 1; 
            } else {
                cartItemsArray.push({ 
                    ...data, 
                    id: searchParams.id, 
                    quantity: 1 
                });
            }

            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        } else {
            const newCart = [{
                ...data,
                id: searchParams.id,
                quantity: 1
            }];

            localStorage.setItem('cart-items', JSON.stringify(newCart));
        }
    }

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url} alt="Imagem do produto" />

                    <div>
                        <ProductInfo 
                            category={data?.category}
                            name={data?.name}
                            price={data?.price_in_cents}
                            description={data?.description}
                        />

                        <button onClick={handleAddToCart}>
                            <ShoppingBagIcon/>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}