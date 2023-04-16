
export const addcart = (product)=>{
    return{
        type: "ADDCART",
        payload : product
    }
}

export const delcart = (product)=>{
    return{
        type: "DELCART",
        payload : product
    }
}