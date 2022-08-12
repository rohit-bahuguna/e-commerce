import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        case actionTypes.DELETEPRODUCT:
            let items = state.products
            console.log(items)
            let newItem = items.filter((value , index)=> {
                return value.id !== payload ;
            })
            console.log(newItem);
            return {...newItem}

        default:
            return state;
    }
}