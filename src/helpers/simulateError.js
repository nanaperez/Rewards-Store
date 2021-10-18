export const simulateError = () => {
    let error = [false, false, false, false , false, false, false, true, true];
    const i = Math.floor(Math.random()*error.length);
    const result = error[i];
    
    return result;
}