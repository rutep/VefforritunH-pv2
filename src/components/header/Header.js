import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';

import Button from '../button';

import './Header.css';



class Header extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: ''
    };
  }
  
  submitHandler(evt) {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.getSlug(this.state.inputField);
    
    this.setState({
      inputField: ''
    });
  }
  
  handleChange(event) {
    // console.log(event.target.value);
    
    this.setState({
      inputField: event.target.value
    });
  }
  

  render() {
    return (
      <header className="header">
        <h1 className="header__heading"><Link to="/">Bókasafnið</Link></h1>

        {/* ætti samt frekar heima í sér component */}
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" value={this.state.inputField} onChange={this.handleChange} />
            <Button getSlug={this.onClick}>Leita</Button>
          </form>
        </div>
          <Link to="/login">Innskráning</Link>
        </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Header);