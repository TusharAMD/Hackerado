import Navibar from './components/Navibar';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

export const cuisineContext = React.createContext('cuisineName');

function App() {

  const [cuisine,setCusine] = useState('cuisineName')

  return (
    <cuisineContext.Provider value = {[cuisine, setCusine]}>
    <div className="App">
     <Navibar />
    </div>
    </cuisineContext.Provider>
  );
}

export default App;
