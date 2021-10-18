import Swal from "sweetalert2";

const baseUrl = "https://coding-challenge-api.aerolab.co"
const headers = {
    "content-type": "application/json",
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRmNDg3NzgxMTJhNTAwMjFlMjcwNjEiLCJpYXQiOjE2MzI1ODU4NDd9.1wF1EJDGshVWWJqPmlkuFnW5LPavKhLSozhl2mkPZUE"
}

export const getProdUser = async(key) => {
    try {
        if(key === "user"){
            const resp = await fetch(`${baseUrl}/${key}/me`, {headers});
            const data = await resp.json();
            return data
        }
        if(key === "history"){
            const resp = await fetch(`${baseUrl}/user/${key}`, {headers});
            const data = await resp.json();
            return data
        }
        if(key === "products"){
            const resp = await fetch(`${baseUrl}/${key}`, {headers});
            const data = await resp.json();
            return data
        }
    } catch (error) {
        Swal.fire("Something went wrong!", "Try again in a few minutes", "error")
    }
}

export const postPoints = async(points) => {
    try {
        await fetch(`${baseUrl}/user/points`,{
            method: 'POST',
            body: JSON.stringify({amount:points}),
            headers: headers
        })
        getProdUser("user")
    } catch (error) {
        Swal.fire("Something went wrong!", "Try again in a few minutes", "error")
    }
}

export const postProduct = async(id) => {
    try {
        await fetch(`${baseUrl}/redeem`,{
            method: 'POST',
            body: JSON.stringify({productId:id}),
            headers: headers
        })
    } catch (error) {
        Swal.fire("Something went wrong!", "Try again in a few minutes", "error")
    }
} 