import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'

 class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchbar: '' 
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onsearchvalue = (event) => {
        this.setState({ searchbar: event.target.value })
    }

    render() {
        const filterbots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchbar.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>LOADING</h1>
        }else {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox SeVa={this.onsearchvalue}/>
                <div className='line'></div>
                <CardList robots={filterbots}/>
            </div>
        );
    }
    }
}
export default App;