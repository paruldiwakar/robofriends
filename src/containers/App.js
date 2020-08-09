import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

//STATE is simply an object that describes your application .
// In this case the state that describes are application are robots and whatever is entered in the search box.
//So a parent feed STATE in a child component and as soon as the child component's component receive the state,
// it's a property, that child can't change that property .
//We need this to send our search query to search box and let search box know where to search.


// App has state & any component that has state uses class syntax so that they can use the 
//constructor function to create this.state and this state is what changes in an app

class App extends Component{
    //To add state
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots:users}));
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    
    }

    render(){
            const { robots, searchfield } = this.state;
            const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
             <h1>Loading</h1> 
        
            : (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>  
              
              );
        
        
    }
   
}
export default App;