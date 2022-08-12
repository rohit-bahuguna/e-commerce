import { actionTypes } from "../constants/actionTypes";

export const addToCart = (product) => {
    return {
        type: actionTypes.ADDTOCART ,
        payload: product
    }
}

export const removeFromCart = (id) => {

    return {
        type:actionTypes.REMOVEFROMCART,
        payload : id
    }
}