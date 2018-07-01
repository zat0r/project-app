import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

 class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: robots,
            searchbar: '' 
        }
    }

    onsearchvalue = (event) => {
        const filterbots = this.state.robots.filter(robots => {
            return robots.Name.toLowerCase().includes(this.state.searchbar.toLowerCase());
        })
        console.log(filterbots);
    }
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox SeVa={this.onsearchvalue}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}
export default App;