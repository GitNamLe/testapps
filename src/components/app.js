import React, { Component } from 'react';
import Profile from './profile';
import firebase from 'firebase';
import SignUp from '../containers/signUp';

export default class App extends Component {
  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyB2-pG9dy81-GXP7Agw8JSWhQdwxZEMsNA",
      authDomain: "interestdatabase-8e4c6.firebaseapp.com",
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = SigninPage;
      }
    });
  }
  render() {
    return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
              <a className="navbar-brand" id="navbar-brand" href="#">i</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><img src="../resources/profilePic.JPG" className="profile-navbar profile-round"/>Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <img src="../resources/whoosh.JPG" width="100%" height="100%"/>
      </nav>

      <Profile />

    </div>
    );
  }
}
