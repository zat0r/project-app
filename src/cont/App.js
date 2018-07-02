import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../comp/CardList';
import SearchBox from '../comp/SearchBox';
import Scroll from '../comp/Scroll'
import { users } from '../comp/robots'
import ErrorBoundry from '../comp/ErrorBoundry'
import './App.css'

import { SearchBarState } from '../actions'

const mapStateToProps = state => {
    return {
        searchBar: state.searchBar
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onsearchvalue: (event) => dispatch(SearchBarState(event.target.value))
    }
}
 class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: users
        }
    }

    // componentDidMount() {}

    render() {
        const { robots } = this.state;
        const { searchBar, onsearchvalue } = this.props;
        const filterbots = robots.filter(robot => {
            return robot.Name.toLowerCase().includes(searchBar.toLowerCase());
        })

        return !robots.length ? <h1 className='tc'>LOADING</h1> :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox SeVa={onsearchvalue}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);