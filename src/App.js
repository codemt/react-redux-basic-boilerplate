import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import  updateUser from './actions/usersAction'
class  App extends Component {

  
   onUpdateUser = (e) => {
     const value = e.target.value;
    e.preventDefault()
    this.props.onUpdateUser(value);

  }

  render() {
        console.log(this.props)
    return (
      <div className="App">

        <input type="text" onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );




   }

}
const mapStateToProps = (state) =>({
    products : state.products,
    user : state.user 
})
const mapActionsToProps =  {
    onUpdateUser: updateUser

}


export default connect(mapStateToProps,mapActionsToProps)(App);
