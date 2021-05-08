const initialState = {
    cart: [
        'ayam',
        'bakso',
        'kangkung',
        'bayam',
        'sosis'
    ]
    // STATE AWAL
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'INSERT_CARTS_FULFILLED':
            return {
                cart: action.payload.cart,
            }

        default:
            return state
    }
}

export default login