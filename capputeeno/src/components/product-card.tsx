import { formatPrice } from "@/utils/format-price";
import { useRouter } from "next/navigation";
import { styled } from "styled-components"
import { Divider } from "./divider";

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string
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
    cursor: pointer;
    
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
        padding: 8px 12px;
        width: 100%;
    }
`;

export function ProductCard(props: ProductCardProps) {
    const formattedPrice = formatPrice(props.price);
    const router = useRouter();

    const handleNavigate = () => {
        router.push("product?id=" + props.id);
    }

    return (
        <Card onClick={handleNavigate}>
            <img src={props.image} alt="Product image"/>
            
            <div>
                <h3>{props.title}</h3>
                <Divider/>
                <p>{formattedPrice}</p>
            </div>
        </Card>
    )
}