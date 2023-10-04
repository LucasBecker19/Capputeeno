import styled from "styled-components"
import { ShoppingBagIcon } from "../icons/shopping-bag"

interface AddCartButtonProps {
    category?: string,
    name?: string,
    price?: number,
    description?: string,
    id?: string
}

const Button = styled.button`
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
`;

export function AddCartButton(props: AddCartButtonProps) {
    const handleAddToCart = () => {
        const cartItems = localStorage.getItem('cart-items');

        if(cartItems) {
            const cartItemsArray = JSON.parse(cartItems);

            const existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === props.id);
            
            if(existingProductIndex != -1) {
                cartItemsArray[existingProductIndex].quantity += 1; 
            } else {
                cartItemsArray.push({ 
                    ...props,
                    quantity: 1 
                });
            }

            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        } else {
            const newCart = [{
                ...props,
                quantity: 1
            }];

            localStorage.setItem('cart-items', JSON.stringify(newCart));
        }
    }

    return (
        <Button onClick={handleAddToCart}>
            <ShoppingBagIcon/>
            Adicionar ao carrinho
        </Button>
    )
}