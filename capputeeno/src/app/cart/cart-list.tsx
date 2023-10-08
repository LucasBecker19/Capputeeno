import styled from "styled-components";
import { BackButton } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { ProductInCart } from "@/types/product";

interface CartListProps {
    products: ProductInCart[],
    cartTotal: string,
    handleUpdateQuantity: (value: string, quantity: number) => void,
    handleDelete: (id: string) => void
}

const Container = styled.div`
    h3 {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--text-dark-02);
        line-height: 150%;

        margin-top: 24px;
    }

    p {
        font-weight: 300;
        line-height: 150%;
        color: var(--text-dark-02);

        span {
            font-weight: 600;
            margin-left: 4px;
        }
    }
`;

const CartListContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`;

export function CartList(props: CartListProps) {
    return (
        <Container>
            <BackButton navigate="/"/>
            <h3>Seu carrinho</h3>
            <p>
                Total ({props.products.length} {props.products.length === 1 ? 'produto' : 'produtos'})
                <span>{props.cartTotal}</span>
            </p>

            <CartListContainer>
                {props.products.map(item => 
                    <CartItem 
                        product={item} 
                        key={item.id} 
                        handleUpdateQuantity={props.handleUpdateQuantity} 
                        handleDelete={props.handleDelete}
                    />
                )}
            </CartListContainer>
        </Container>
    )
}