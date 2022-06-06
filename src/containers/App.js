
import React,{useState,useEffect} from "react";
// import { robots } from "../components/robots";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import "./App.css"


const App = () => {
    const [robots, setRobots] = useState([]);
    const [iniSearchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {setRobots(users)});
             
    },[]);   
    

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
   

    const filteredRobots = robots.filter(rob => {
            return rob.name.toLowerCase().includes(iniSearchField.toLowerCase());
        })
    
  
    if (robots.length === 0){
        return   <article className="vh-100 dt w-100">
        <div className="dtc v-mid tc white ph3 ph4-l">
          <h1 className="f6 f2-m f-subheadline-l fw6 tc">Loading...Please_Wait!</h1>
        </div>
      </article>
        // <h1>Loading</h1>
    } else{
        return (
            <div className="tc">
              <h1 className="f1">RoboHash</h1>
              <SearchBar searchChange={onSearchChange} />
              <Scroll>
              <CardList robots={filteredRobots} />
                  </Scroll>                  
             
              
            </div>
          );     

    }
}


export default App;