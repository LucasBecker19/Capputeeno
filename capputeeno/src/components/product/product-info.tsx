import styled from "styled-components";
import { formatPrice } from "@/utils/format-price";

interface ProductInfoProps {
    category?: string,
    name?: string,
    price?: number,
    description?: string
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-02);
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--text-dark-02);
        margin-top: 12px;
    }

    span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    color: var(--shapes-dark); 
    margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--text-dark);
    }

    div {
        margin-top: 24px;

        h3 {
            text-transform: uppercase;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }
    }
`;

export function ProductInfo(props: ProductInfoProps) {
    return (
        <Container>
            <span>{props?.category}</span>
            <h2>{props?.name}</h2>
            <span>{formatPrice(props?.price ?? 0)}</span>

            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>

            <div>
                <h3>Descrição</h3>
                <p>{props?.description}</p>
            </div>
        </Container>
    )
}