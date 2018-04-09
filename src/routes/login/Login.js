import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from '../../components/button'

/* todo sækja actions frá ./actions */

import './Login.css';

class Login extends Component {

  render() {
    return (
      <div>
        <h1>Innskráning </h1>

        <form class="form">
          <div>
            <label> Notendanafn: </label> 
            <input type="text" />
          </div>
          <div>
            <label> Lykilorð: </label> 
            <input type="text" />
          </div>
          <Button> Innskrá </Button>
        </form>
        
        <Link to="/"> Nýskráning </Link>

      </div>
    );
  }
}

/* todo tengja við redux */

export default Login;
