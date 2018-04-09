import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, NavLink, Link, Switch, withRouter } from 'react-router-dom'

import UserRoute from './components/user-route';
import Header from './components/header';
import Home from './routes/home';
import Login from './routes/login';
import Profile from './routes/profile';
import NotFound from './routes/not-found';

/* todo fleiri routes */

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.updateSlug = this.updateSlug.bind(this);
    this.state = {
      value: '',
    };
  }
  async updateSlug(data){
    this.value = data;
  }

  render() {
    const authenticated = false; /* vita hvort notandi sé innskráður */

    return (
      <main className="main">
        <Helmet defaultTitle="Bókasafnið" titleTemplate="%s – Bókasafnið" />
        <Header getSlug={this.updateSlug} />
        <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <UserRoute path="/profile" authenticated={authenticated} component={Profile} />
            <Route path="/books" exact component={Books}  />
            {/* todo fleiri route */}
            <Route component={NotFound} />
          </Switch>
        </div>

      </main>
    );
  }
}

const url = 'http://localhost:4000/books';

class Books extends Component {

  state = {
    data: null,
    loading: true,
    error: false,
    val: "",
  }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching navigation', e);
      this.setState({ error: true, loading: false });
    }
  }
  async fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const { data, loading, error } = this.state;
    console.log(this.props.test);
    
    
    if (loading) {
      return (<div>Hleð inn sviðum...</div>);
    }

    if (error) {
      return (<div>Villa við að hlaða inn sviðum</div>);
    }

    

    return (
      <div>
        <h2> {this.val} </h2>
        {data.map(dat => (
         <p> {dat.title} </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  /* todo stilla redux ef það er notað */
}

export default withRouter(connect(mapStateToProps)(App));
