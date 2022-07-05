import React from 'react'

const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addPlant : (PlantItem)=>{},
    removePlant : (id)=>{}
})

export default CartContext;