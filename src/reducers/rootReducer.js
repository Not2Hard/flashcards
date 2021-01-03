const uuidv4 = require("uuid/v4")



const initState = {
    cards : [
        {front: '1+2', back: '2+1', id: uuidv4()},
        {front: '2+3', back: '3+2', id: uuidv4()}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'AddCard') {
       const newCards = state.cards.concat(action.cards) //state.cards([ ...cards, action.cards])
       console.log('state.cards',newCards)
       return {
        cards: newCards,
       }
    }
    if (action.type === 'UpdateCardSet') {
        state.cards = action.cards
    }
    return state;
}
export default rootReducer

