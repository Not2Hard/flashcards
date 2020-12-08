const uuidv4 = require("uuid/v4")



const initState = {
    card: {front: '1+2', back: '3', id: uuidv4()}
}

const rootReducer = (state = initState, action) => {
    return state
}
export default rootReducer