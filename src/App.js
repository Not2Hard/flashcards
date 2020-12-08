import React, { useEffect} from 'react'
import './App.css';
import M from "materialize-css";
import AddNewCard from './components/AddNewCard'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import Card from './components/Card'


function App() {
  const card = useSelector(state => state);
  useEffect( () => {
    let el = document.getElementById('tabs-swipe-demo')
    let instance = M.Tabs.init(el)
  }, [])


  return (
    <div className="App">
      <div className="container">
        <h1 className="center blue-text">Flash cards</h1>
        <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width">
          <li className="tab col s3"><a href="#test-swipe-1">Make cards</a></li>
          <li className="tab col s3"><a className="active" href="#test-swipe-2">See all cards</a></li>
          <li className="tab col s3"><a href="#test-swipe-3">Quize</a></li>
        </ul>
        <div id="test-swipe-1" className="col s12 gray">
         <div className="">
           <br/>
            <AddNewCard />
            </div>
        </div>
        <div id="test-swipe-2" className="col s12 ">
          <br/>
          <Card card={card}/>
        </div>
        <div id="test-swipe-3" className="col s12 green">Test 3</div>
      </div>
    </div>
  );
}


export default App;
