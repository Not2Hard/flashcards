import React, { useState } from "react"
import { useDispatch} from 'react-redux'

const dispatch = useDispatch()
const uuidv4 = require("uuid/v4")

const NewCardSet = () => {
    const [cardList, changeCardList] = useState([ front: "", back: "", id: uuidv4()])

    return(
        <div className="">
        <div className="row">
            <form className="col s12" onSubmit={createCardSet} id="cardInput">
                {
                    cardList.map((card, i) => {
                        return (
                            <div className="">
                                <div className="col s6">
                                    <label>Front of the card
                                        <input type="text" name="front" value={card.front} />
                                    </label>
                                </div>
                                <div className="col s6">
                                    <label>Back of the card
                                        <input type="text" name="back" value={card.back} />
                                    </label>
                                </div>
                                <div className="btn-box">
                                    {inputList.length !== 1 && <button className="mr10">Remove</button>}
                                    {inputList.length - 1 === i && <button>Add</button>}
                                </div>
                            </div>
                        )
                    })
                }
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
export default NewCardSet
