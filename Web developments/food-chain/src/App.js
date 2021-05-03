import React,{ Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import {Dishes} from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      dishes : Dishes
    };
  }

  render(){
    return(
      <div className="App" >
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href="/">FOOD CHAIN</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;