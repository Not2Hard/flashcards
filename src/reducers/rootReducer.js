const uuidv4 = require("uuid/v4")



// const initState = {
//     cards : [
//         {front: '1+2', back: '2+1', id: uuidv4()},
//         {front: '2+3', back: '3+2', id: uuidv4()}
//     ]
// }

const initState = localStorage.getItem('cards')
    ? JSON.parse(localStorage.getItem('cards')) 
    : { cards: [{front: '',back: '', id: uuidv4()}]}

// const cardsFromLS = JSON.parse(localStorage.getItem('cards'))


const rootReducer = (state = initState, action) => {
    if (action.type === 'AddCard') {
       const newCards = state.cards.concat(action.cards) //state.cards([ ...cards, action.cards])
       console.log('state.cards',newCards)
       return {
        cards: newCards,
       }
    }
    if (action.type === 'DeleteCards') {
        const newCards = state.cards.filter(card =>  card.id !== action.id)
        localStorage.setItem('cards', JSON.stringify({cards: newCards}))
        return {
         cards: newCards,
        }
    }
    if (action.type === 'EditCards') {
        const newCards = action.cards 
        console.log('new cards',newCards)
        return {
         cards: newCards,
        }
     }
    return state;
}
export default rootReducer

