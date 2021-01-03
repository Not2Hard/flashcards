import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
const uuidv4 = require("uuid/v4")
const AddCards = () => {
    const [cardSet, changeCardSet] = useState([{front: '',back: '', id: uuidv4()}])
    const dispatch = useDispatch()
    

    const handlecCardChange = (e, index) => {
        const { name, value } = e.target
        const cards = [ ... cardSet ]
        cards[index][name] = value
        changeCardSet(cards)
        console.log('changed:',cards[index][name])
    }
    

    const createCardSet = (e) => {
        e.preventDefault()
        // const newCard = {front: newCardFr, back: newCardBk, id: uuidv4()}
        // changeCardSet([ ...carsSet, newCard ])
        console.log(cardSet)

        
    }
    const handleRemoveCard = (index) => {
        const cards = [ ...cardSet]
        cards.splice(index, 1)
        changeCardSet(cards)
        console.log(cardSet)
    }

    const addCardInput = () => {
        changeCardSet([ ...cardSet, {front: '',back: '', id: uuidv4()}])
    } 

    return(
    <div className="">
        <div className="row">
            <form className="col s12" onSubmit={createCardSet} id="cardInput">
                {
                    cardSet.map((card, i) => {
                        return(
                            <div className="">
                                <div className="col s5">
                                    <label>Front of the card
                                        <input type="text" value={card.front} onChange={ e => handlecCardChange(e, i)}  name="front"  className="validate"/>
                                    </label>
                                </div>
                                <div className="col s5">
                                    <label>Back of the card
                                        <input type="text" value={card.back} onChange={ e => handlecCardChange(e, i)}  name="back" className="validate"/>
                                    </label>
                                </div>
                                <div className="col s1">
                                <br/>
                                <a onClick={e => {handleRemoveCard(i)}} className="waves-effect waves-light btn-small grey">X</a>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        )
                    })
                }
                
            
            <div className="col s12">
                <div className="right">
                    <button onClick={() => dispatch({ type: 'AddCard', cards:cardSet})}
                    className="btn waves-effect waves-light"  name="action">Update Card Set
                    </button>
                </div>
                <a onClick={addCardInput} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
        
            </form>
        </div>
        
        
    </div>
    )
}
export default AddCards