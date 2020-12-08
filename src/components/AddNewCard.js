import React, { useState } from 'react'

const AddNewCard = () => {
    const [carsSet, changeCardSet] = useState([])
    const [newCardFr, changenewCardFr] = useState('')
    const [newCardBk, changenewCardBk] = useState('')

    const handlechangeFr = (e) => {
        changenewCardFr(e.target.value)
        console.log(newCardFr)
    }
    const handlechangeBk = (e) => {
        changenewCardBk(e.target.value)
        console.log(newCardBk)
    }

    // const addCardInput = () => {
    //     // return(

    //     // )
    // }
    const createCardSet = (e) => {
        e.preventDefault()
        const newCard = {front: newCardFr, back: newCardBk}
        changeCardSet([ ...carsSet, newCard ])
        console.log(newCard, carsSet)
        document.getElementById('front').value = ""
        document.getElementById('back').value = ""


    }
    return(
    <div className="row">
        <form className="col s12" onSubmit={createCardSet}>
          <div className="row">
            <div className="input-field col s6">
                <label>Front of the card
                    <input type="text" onChange={handlechangeFr}  id="front" className="validate"/>
                </label>
            </div>
           
            <div className="input-field col s6">
                <label>Back of the card
                    <input type="text" onChange={handlechangeBk}  id="back" className="validate"/>
                </label>
            </div>
          </div>
          {/* <div className="left">
                <a className="btn-floating btn-large waves-effect waves-light red" onClick={addCardInput}>
                    <i className="material-icons">add</i>
                </a>
            </div> */}
            <div className="right">
             <button className="btn waves-effect waves-light" type="submit" name="action">Create Cards
            </button>
            </div>
        </form>
    </div>
    )
}
export default AddNewCard