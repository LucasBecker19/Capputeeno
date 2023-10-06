import styled from "styled-components";

const HelpLinksContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    margin-top: 40px;

    span {
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        text-decoration-line: underline;
        text-transform: uppercase;
        cursor: pointer;
    }
`;

export function HelpLinks() {
    return (
        <HelpLinksContainer>
            <span>Ajuda</span>
            <span>Reembolsos</span>
            <span>Entregas e frete</span>
            <span>Trocas e devoluções</span>
        </HelpLinksContainer>
    )
}