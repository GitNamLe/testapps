import React, { Component } from 'react';
import firebase from 'firebase';

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: ''

        }

        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onUsernameChange(event){
        this.setState({ username : event.target.value });
    }

    onEmailChange(event){
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event){
        this.setState({ email: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        //Go and fetch weather data
    }
    

    render() {
        <div className="container">
                <input
                    placeholder="Search city or town..."
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onUsernameChange} />
                <input
                    placeholder="Search city or town..."
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onEmailChange} />

                <input
                    placeholder="Search city or town..."
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onPasswordChange} />

            <span className="input-group-btn">
                <button onClick={onFormSubmit} type="submit" className="btn btn-outline-success my-2 my-sm-0">SignUP</button>
            </span>
        </div>
      }
}