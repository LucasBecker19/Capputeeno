"use client"

import { styled } from "styled-components";
import { ArrowIcon } from "./arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        color: var(--text-dark);
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 8px;
        }
    }
`;

const PriorityFilter = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    width: 176px;
    border-radius: 4px;
    background: white;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
    padding: 12px 16px;
    z-index: 1;

    list-style: none;

    li {
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`;

export function FilterByPriority() {
    const [ isOpen, setIsOpen ] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>

            {
                isOpen &&
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>
    );
}