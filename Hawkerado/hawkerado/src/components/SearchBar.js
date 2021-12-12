import {useState} from 'react';
import React,{useContext}  from 'react';
import axios from 'axios';
import { cuisineContext } from '../App';
//import { createGlobalState } from 'react-hooks-global-state';

//export const cuisineContext = React.createContext('cuisineName');
//export const { useGlobalState } = createGlobalState(initialState);
function SearchBar() {
    const [searchterm,setSearchterm] = useState("") 
    const [cuisine,setCuisine] = useContext(cuisineContext)

    function onSearch(){
        console.log(searchterm)
        
        axios.post(`http://127.0.0.1:5000/search`, { "searchterm":searchterm })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setCuisine([res.data["data"]])

        })
    }

    return (
      <div className="Search">
        <div>
        <input value={searchterm} onChange={event => setSearchterm(event.target.value)} className="SearchBar" placeholder="What you wanna Eat today?" /> 
        <i onClick={onSearch} id="searchicon" class="material-icons">search</i>  
        </div>
      </div>
    );
  }
  
  export default SearchBar;