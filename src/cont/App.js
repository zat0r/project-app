import React, { Component } from 'react';
import CardList from '../comp/CardList';
import SearchBox from '../comp/SearchBox';
import Scroll from '../comp/Scroll'
import { users } from '../comp/robots'
import ErrorBoundry from '../comp/ErrorBoundry'
import './App.css'

 class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: users,
            searchbar: '' 
        }
    }

    onsearchvalue = (event) => {
        this.setState({ searchbar: event.target.value })
    }

    render() {
        const { robots, searchbar } = this.state;
        const filterbots = robots.filter(robot => {
            return robot.Name.toLowerCase().includes(searchbar.toLowerCase());
        })

        return !robots.length ? <h1 className='tc'>LOADING</h1> :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox SeVa={this.onsearchvalue}/>
                <div className='line'></div>
                <Scroll>
                <ErrorBoundry>
                <CardList robots={filterbots}/>
                </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}
export default App;