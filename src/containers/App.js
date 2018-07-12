import React, { Component } from 'react';
import {connect} from 'react-redux'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBondry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions.js';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component{
   
    componentDidMount() {
        // console.log(this.props.store.getState());
        this.props.onRequestRobots();
    }

    render(){
    
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
      
        return isPending ? <h1>Loading...</h1> :
        (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBondry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBondry>
                </Scroll>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);