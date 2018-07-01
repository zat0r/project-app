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
        this.setState({ searchbar: event.target.value })
    }

    render() {
        const filterbots = this.state.robots.filter(robots => {
            return robots.Name.toLowerCase().includes(this.state.searchbar.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox SeVa={this.onsearchvalue}/>
                <CardList robots={filterbots}/>
            </div>
        );
    }
}
export default App;