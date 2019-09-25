import React, { Component } from 'react';
import { navigate } from '@reach/router';

class Role extends Component {

  constructor() {
    super();
    this.state = {
    };
    
  }

  
  componentDidMount(){

  }

  navigate(event){
    event.preventDefault();
    var buttonID = event.target.id;
    navigate('/' + buttonID);
  }


  render() {

    return (
<div className='wrapper'>

    <div className='container h-100 d-flex flex-column align-items-center m-0 p-0 bg-warning'>
   
    <h2 className="bg-info text-center text-light p-4 text-uppercase m-0 w-100">Choose your role</h2>

      
        <div className="d-flex bg-light h-50 w-100 p-4">
            <div className="align-self-center">
                <h4 className="text-center">There is an overdose victim and I need assistance</h4>
                <button id="HelpWaiting" className="btn btn-danger font-weight-bold text-uppercase w-100 p-4 mt-2" onClick={this.navigate}>Send Help</button>
            </div>
        </div>
        <div className="d-flex bg-light h-50 w-100 p-4 border-top">
            <div className="align-self-center">
                <h4 className="text-center">I possess Naloxone and am able to offer assistance</h4>
                <button id="Helper" className="btn btn-warning font-weight-bold text-uppercase w-100 p-4 mt-2" onClick={this.navigate}>Offer Help</button>
            </div>
        </div>
       
    </div>
</div>    
    );
  } 
}

export default Role;