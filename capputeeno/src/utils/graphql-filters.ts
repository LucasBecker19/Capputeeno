import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

function getCategoryByType(type: FilterTypes) {
    if(type === FilterTypes.MUG) 
        return "mugs";
    
    if(type === FilterTypes.SHIRT) 
        return "t-shirts";
    
    return "";
}

function getFieldByPriority(priority: PriorityTypes) {
    if(priority === PriorityTypes.NEWS) 
        return { field: "created_at", order: "ASC" };

    if(priority === PriorityTypes.BIGGEST_PRICE) 
        return { field: "price_in_cents", order: "DESC" };
    
    if(priority === PriorityTypes.MINOR_PRICE) 
        return { field: "price_in_cents", order: "ASC" };

    return { field: "sales", order: "DESC" };
}

export function mountQuery(type: FilterTypes, priority: PriorityTypes) {
    if(type === FilterTypes.ALL && priority === PriorityTypes.POPULARITY) {
        return `
            query {
                allProducts(sortField: "sales", sortOrder: "DESC") {
                    id
                    name
                    price_in_cents
                    image_url
                }
            }
        `;
    } 

    const sortSettings = getFieldByPriority(priority);
    const categoryFilter = getCategoryByType(type);

    return `
        query {
            allProducts( 
                sortField: "${sortSettings.field}",
                sortOrder: "${sortSettings.order}",
                ${categoryFilter ? `filter: { category: "${categoryFilter}" }` : ''}
            ) {
                id
                name
                price_in_cents
                image_url
                category
            }
        }
    `;
}