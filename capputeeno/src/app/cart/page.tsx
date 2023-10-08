"use client"

import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";
import { HelpLinks } from "./help-links";
import { CartList } from "./cart-list";

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-direction: column;
    position: relative;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        flex-direction: row;
    }
`;

const CartResultContainer = styled.div`
    min-width: 352px;
    background: white;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        height: 700px;
    }

    > div {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    
        h3 {
            font-weight: 600;
            font-size: 20px;
            color: var(--text-dark-02);
            text-transform: uppercase;
            margin-bottom: 30px;
        }
    }
`;

const TotalItem = styled.div<{ isBold: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`;

const ShopBtn = styled.button`
    background-color: var(--success-color);
    color: white;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
`;

export default function CartPage() {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", []);

    const deliveryPrice = 4000;

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = formatPrice(calculateTotal(value));
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryPrice);

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) 
                return item;

            return {...item, quantity: quantity}
        });

        updateLocalStorage(newValue);
    }

    const handleDelete = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item;
        });

        updateLocalStorage(newValue);
    }

    return (
        <DefaultPageLayout>
            <Container>
                <CartList  
                    products={value}
                    cartTotal={cartTotal}
                    handleUpdateQuantity={handleUpdateQuantity}
                    handleDelete={handleDelete}
                />

                <CartResultContainer>
                    <div>
                        <h3>Resumo do pedido</h3>

                        <TotalItem isBold={false}>
                            <p>Subtotal de produtos</p>
                            <p>{cartTotal}</p>
                        </TotalItem>

                        <TotalItem isBold={false}>
                            <p>Entrega</p>
                            <p>{formatPrice(deliveryPrice)}</p>
                        </TotalItem>

                        <Divider/>

                        <TotalItem isBold={true}>
                            <p>Total</p>
                            <p>{cartTotalWithDelivery}</p>
                        </TotalItem>

                        <ShopBtn>Finalizar a compra</ShopBtn>
                    </div>

                    <HelpLinks/>
                </CartResultContainer>
            </Container>
        </DefaultPageLayout>
    )
}