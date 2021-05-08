const initialState = {
    userData: '',
    isLogin: false
    // STATE AWAL KETIKA BELUM DI EDIT
}

const login = (state = initialState, action) => {
    switch (action.type) {
        // KETIKA PROMISE RESOLVE
        case 'GET_USER_FULFILLED':
            return {
                userData: action.payload.userData,
                isLogin: action.payload.isLogin
            }
        // KETIKA LOADING
        // case 'GET_USER_PENDING':
        //     return {
        //         userData: action.payload.data,
        //         isLogin: action.payload.isLogin
        //     }
        // KETIKA GAGAL AMBIL DATA
        // case 'GET_USER_REJECTED':
        //     return {
        //         userData: action.payload.data,
        //         isLogin: action.payload.isLogin
        //     }

        default:
            return state
    }
}

export default login