import React, { useEffect} from 'react'
import './App.css';
import M from "materialize-css";
import AddNewCard from './components/AddNewCard'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import Card from './components/Card'
import AddCards from './components/addCards'

import EditableCard from './components/EdditableCard'




function App() {
  const cards = useSelector(state => state)
  console.log('state', cards)
  const dispatch = useDispatch()

  useEffect( () => {
    let el = document.getElementById('tabs-swipe-demo')
    let instance = M.Tabs.init(el)
  }, [])
  
  const handleSave = (newCard) => {
      const newCardSet = cards.cards.slice().map(card => {
        return (card.id === newCard.id ? newCard : card )
      })
      dispatch({ type: 'EditCards', cards: newCardSet})
      localStorage.setItem('cards', JSON.stringify(newCardSet))
     
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
            <AddNewCard />
            <br/>
            <br/>
            <AddCards />
            {
              cards.cards.map((card) => {
                return(
                  <div key={card.id}><EditableCard card={card} handleSave={handleSave}/><br/></div>
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
