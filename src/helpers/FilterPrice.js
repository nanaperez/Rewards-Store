export const FilterPriceLower = (array) => {
    return array.sort((a,b) => {
        return a.cost - b.cost 
    })
}

export const FilterPriceHighest = (array) => {
    return array.sort((a,b) => {
        return b.cost - a.cost 
    })
}