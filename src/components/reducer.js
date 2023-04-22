export const initialState = {
    cartList:[],
    productList:[
        {
            title : "hello1",
            price : "1.02",
            rating : "4",
            imageURL: ""
        },
        {
            title : "hello1",
            price : "1.02",
            rating : "5",
            imageURL: ""
        },
        {
            title : "hello1",
            price : "1.02",
            rating : "6",
            imageURL: ""
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                cartList:[...state.cartList, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cartList:state.cartList.filter(item => item.id !== action.payload)
            }
        default :
            return state;
    }
}