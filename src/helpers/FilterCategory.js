export const FilterCategory = (array,category) => {
    
    if(category === "All"){
        return array;
    }

    if(category === "Computing"){
        let laptops = array.filter(p => p.category === "Laptops");
        let pcAccessories = array.filter(p => p.category === "PC Accessories");
        let Monitors = array.filter(p => p.category === "Monitors & TV");
        let concat = laptops.concat(pcAccessories).concat(Monitors);
        return concat;
    }

    if(category === "Tablets"){
        return array.filter(p => p.category === "Tablets & E-readers");
    }

    if(category === "Gaming"){
        return array.filter(p => p.category === "Gaming");
    }

    if(category === "Phones"){
        return array.filter(p => p.category === "Phones");
    }

    if(category === "Audio"){
        return array.filter(p => p.category === "Audio");
    }

    if(category === "Drones"){
        return array.filter(p => p.category === "Drones");
    }
}