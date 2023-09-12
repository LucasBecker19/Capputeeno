import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);
    width: 256px;
    
    img {
        width: 256px;
        height: 300px;
        border-radius: 4px 4px 0 0;
    }

    h3 {
        color: var(--text-dark-02);
        font-family: inherit;
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
    }

    p {
        color: var(--shapes-dark);
        font-family: inherit;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;
        
        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0;
            background-color: var(--shapes-02);
        }
    }
`;

export function ProductCard(props: ProductCardProps) {
    const formattedPrice = formatPrice(props.price);

    return (
        <Card>
            <img src={props.image} alt="Product image"/>
            
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{formattedPrice}</p>
            </div>
        </Card>
    )
}