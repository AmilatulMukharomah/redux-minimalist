export const getUser = (data) => {
    return {
        type: 'GET_USER',
        payload: Promise.resolve(data), // promise langsung resolve
        // payload: axios.get(bla bla) // promise axios
        // payload: firestore().bla bla // promise firestore
    }
}
// FUNCTION BUAT EDIT GLOBAL STATE