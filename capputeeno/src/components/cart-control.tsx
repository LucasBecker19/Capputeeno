import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    padding: 0 5px;
    margin-left: -10px;
    border-radius: 50%;

    font-size: 10px;
    color: white;
    background-color: var(--danger-color);
`;

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`;

export function CartControl() {
    const router = useRouter();
    const { value } = useLocalStorage('cart-items', []);

    const handleNavigateToCart = () => {
        router.push("/cart");
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}