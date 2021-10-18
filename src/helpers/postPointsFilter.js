import { postPoints } from "./getProdUser"

export const postPointsFilter = (points) => {
    if(points === 1000){
        postPoints(1000)
    }
    if(points === 5000){
        postPoints(5000)
    }
    if(points === 7500){
        postPoints(7500)
    }
    if(points === 2000){
        postPoints(1000)
        postPoints(1000)
    }
    if(points === 6000){
        postPoints(1000)
        postPoints(5000)
    }
    if(points === 8500){
        postPoints(1000)
        postPoints(7500)
    }
    if(points === 10000){
        postPoints(5000)
        postPoints(5000)
    }
    if(points === 12500){
        postPoints(5000)
        postPoints(7500)
    }
    if(points === 15000){
        postPoints(7500)
        postPoints(7500)
    }
}