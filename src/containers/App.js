
import React from "react";
import { robots } from "../components/robots";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import "./App.css"

class App extends React.Component{
    constructor(){
        super()
        this.state = {   
            robots : [],         
            searchField:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(users => this.setState({robots:users}) );
    }

    onSearchChange = (event) => {
        this.setState({searchField:event.target.value})
    }

    render(){
        const filteredRobots = robots.filter(rob => {
            return rob.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if (this.state.robots.length === 0){
            return   <article class="vh-100 dt w-100">
            <div class="dtc v-mid tc white ph3 ph4-l">
              <h1 class="f6 f2-m f-subheadline-l fw6 tc">Loading...Please_Wait!</h1>
            </div>
          </article>
            // <h1>Loading</h1>
        } else{
            return (
                <div className="tc">
                  <h1 className="f1">RoboHash</h1>
                  <SearchBar searchChange={this.onSearchChange} />
                  <Scroll>
                  <CardList robots={filteredRobots} />
                      </Scroll>                  
                 
                  
                </div>
              );     

        }

    }

};

export default App;