export const randomNum = () => {
    let coins = [1000, 0, 5000, 0 , 7500, 0, 0, 0, 0, 0, 0];
    const i = Math.floor(Math.random()*coins.length);
    const result = coins[i];
    
    return result;
}