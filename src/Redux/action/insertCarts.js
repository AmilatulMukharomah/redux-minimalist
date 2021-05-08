export const insertCarts = (data) => {
    return {
        type: 'INSERT_CARTS',
        payload: Promise.resolve(data), // promise langsung resolve
        // payload: axios.get(bla bla) // promise axios
        // payload: firestore().bla bla // promise firestore
    }
}