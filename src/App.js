import React, { useEffect, useState } from 'react'
import './App.css';
import M from "materialize-css";
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import Card from './components/Card'

import EditableCard from './components/EdditableCard'


const uuidv4 = require("uuid/v4")


function App() {
  const cards = useSelector(state => state)
  console.log('state', cards)
  const dispatch = useDispatch()
  const [setName, changeSetName] = useState('Remember this:')

  useEffect( () => {
    let el = document.getElementById('tabs-swipe-demo')
    let instance = M.Tabs.init(el)
  }, [])
  
  const handleSave = (newCard) => {
      const newCardSet = cards.cards.slice().map(card => {
        return (card.id === newCard.id ? newCard : card )
      })
      dispatch({ type: 'EditCards', cards: newCardSet})
      localStorage.setItem('cards', JSON.stringify({cards: newCardSet}))
     
  }
  const addCardInput = () => {
    const newCardSet = [ ...cards.cards, {front: '',back: '', id: uuidv4()}]
    console.log('adding new card', newCardSet)
    // localStorage.setItem('cards', JSON.stringify({cards: newCardSet}))
    dispatch({ type: 'AddCard', cards: newCardSet})
}

  const handleRemove = (id) => {
      console.log('app deleting id ', id)
      dispatch({ type: 'DeleteCards', id: id})
  }

  const handleSetNameChange = (e) => {
    const newSetName = e.target.value
    changeSetName(newSetName)
  }

  return (
    <div className="App"> 
      <div className="container">
        <h1 className="center blue-text">Flash cards</h1>
        <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width">
          <li className="tab col s3"><a className="active" href="#test-swipe-1">Make cards</a></li>
          <li className="tab col s3"><a href="#test-swipe-2">See all cards</a></li>
          <li className="tab col s3"><a href="#test-swipe-3">Quize</a></li>
        </ul>
        <div id="test-swipe-1" className="col s12 gray">
         <div className="">
            <br/>
              <form>
                <div className="row">
                      Card set name: 
                      <div className="input-field inline">
                          <input  type="text" onChange={handleSetNameChange} name="cardSet" value={setName} placeholder='My cards' className="validate"/>
                      </div>
                     <a className="waves-effect waves-light btn">Save your set</a>
                  </div>
              </form>
              
            <a onClick={addCardInput} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            <br/><br/><br/>
            {
              cards.cards.map((card) => {
                return(
                  <div key={card.id}><EditableCard card={card} handleSave={handleSave} handleRemove={handleRemove}/><br/></div>
                )
              })
              
            }
            </div>
        </div>
        <div id="test-swipe-2" className="col s12 ">
          <br/>
          <div className="container">
            {
              //console.log("to map",cards.cards)
              cards.cards.map((card) => {
                return(
                  <div key={card.id}><Card card={card} /><br/></div>
                )
              })
              
            }
          </div>

        </div>
        <div id="test-swipe-3" className="col s12 green">Test 3</div>
      </div>
    </div>
  );
}


export default App;
