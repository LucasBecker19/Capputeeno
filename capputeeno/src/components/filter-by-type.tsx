"use client"

import { useFilter } from "@/hooks/useFilter";
import { FilterTypes } from "@/types/filter-types";
import { styled } from "styled-components";

interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
    color: var(--text-dark);
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: ${props => props.selected ? '600' : '400'};
    line-height: 22px;
    text-transform: uppercase;
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
`;

export function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterTypes) => setType(value);

    return (
        <FilterList>
            <FilterItem 
                selected={type === FilterTypes.ALL}
                onClick={() => handleChangeType(FilterTypes.ALL)}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem 
                selected={type === FilterTypes.SHIRT} 
                onClick={() => handleChangeType(FilterTypes.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem 
                selected={type === FilterTypes.MUG} 
                onClick={() => handleChangeType(FilterTypes.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}