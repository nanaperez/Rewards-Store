export const CalcTotal = (item) => {
    let total = 0;
    Object.entries(item).forEach(([key, value]) => {
        if(value > 0){
            total = total + value
        }
    })
    return total
}