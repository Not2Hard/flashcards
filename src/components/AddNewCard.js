import React, { useState } from 'react'
import { useDispatch} from 'react-redux'

const AddNewCard = () => {
    const [carsSet, changeCardSet] = useState([])
    const [newCardFr, changenewCardFr] = useState('')
    const [newCardBk, changenewCardBk] = useState('')
    const dispatch = useDispatch()
    const uuidv4 = require("uuid/v4")

    const handlechangeFr = (e) => {
        changenewCardFr(e.target.value)
        console.log(newCardFr)
    }
    const handlechangeBk = (e) => {
        changenewCardBk(e.target.value)
        console.log(newCardBk)
    }

    const createCardSet = (e) => {
        e.preventDefault()
        const newCard = {front: newCardFr, back: newCardBk, id: uuidv4()}
        changeCardSet([ ...carsSet, newCard ])
        console.log(newCard, carsSet)
        document.getElementById('front').value = ""
        document.getElementById('back').value = ""
    }

    const addCardInput = () => {
        // return(


        // )
    } 

    return(
    <div className="">
        <div className="row">
            <form className="col s12" onSubmit={createCardSet} id="cardInput">
                <div className="">
                    <div className="col s6">
                        <label>Front of the card
                            <input type="text" onChange={handlechangeFr}  id="front" className="validate"/>
                        </label>
                    </div>
                    <div className="col s6">
                        <label>Back of the card
                            <input type="text" onChange={handlechangeBk}  id="back" className="validate"/>
                        </label>
                    </div>
                </div>
            
            <div className="col s12">
                <div className="right">
                    <button onClick={() => dispatch({ type: 'AddCard', cards:carsSet})}
                    className="btn waves-effect waves-light"  name="action">Create Cards
                    </button>
                </div>
                <a onClick={addCardInput} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
        
            </form>
        </div>
        
        
    </div>
    )
}
export default AddNewCard