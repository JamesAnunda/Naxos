import React, { Component } from 'react';
//import { Link } from '@reach/router';
//import Firebase from './Firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Login extends Component {

  componentDidMount(){

  }

  render() {
    const { authAnon } = this.props;


    return (
  
<div className="wrapper loginContainer p-4">
  <div className="container h-100 ">
    <div className="row h-100 justify-content-center align-items-center d-flex flex-column">
      <h1 className="bg-dark text-center text-light p-2 rounded text-uppercase mb-4 w-100">Naxos
        <FontAwesomeIcon icon="heartbeat" size="1x" className="ml-4"/>
      </h1>
      <div className="jumbotron bg-light w-100">
        <p className="text-center pt-2 font-weight-bold">
          Naxos is an application that links overdose victims together with carriers of the drug Naloxone.  This app may be used when there is an overdose victim and the community can be called on to help.
          Carriers of Naxolone can sign up to be notified whenever there is an overdose victim that uses this app to call for help.
        </p>
      </div>
      <button className="btn btn-info font-weight-bold text-uppercase w-100 p-3" onClick={authAnon}>
        Log In Anonymously
      </button>
    </div>  
  </div>
</div>
    
    );
  }
}

export default Login;