"use client"

import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, useState, ReactNode } from "react";

interface ProviderProps {
    children: ReactNode
}

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.ALL,
    priority: PriorityTypes.NEWS,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterTypes) => {},
    setPriority: (value: PriorityTypes) => {},
});

export function FilterContextProvider({ children }: ProviderProps) {
    const [ search, setSearch ] = useState('');
    const [ page, setPage ] = useState(0);
    const [ type, setType ] = useState(FilterTypes.ALL);
    const [ priority, setPriority ] = useState(PriorityTypes.POPULARITY);
    
    return(
        <FilterContext.Provider 
            value={{
                search, 
                page, 
                type, 
                priority, 
                setSearch, 
                setPage, 
                setType, 
                setPriority
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}