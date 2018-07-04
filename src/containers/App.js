import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBondry from '../components/ErrorBoundry';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users =>{
            this.setState({robots: users})
        })
    }


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
      
       return (robots.length === 0) ? <h1>Loading...</h1> :
        (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBondry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBondry>
                </Scroll>
            </div>
        );
    }
    
}
export default App;