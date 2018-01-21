import React, { Component } from 'react';
import firebase from 'firebase';

export default class Signin extends Component{
    constructor(props){
        super(props);
        

        this.signIn = this.signIn.bind(this);
    }

    signIn(){

    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit} className="form-inline my-2 my-lg-0">
                    <input
                        placeholder="Search city or town..."
                        className="form-control mr-sm-2"
                        value={this.state.term}
                        onChange={this.onInputChange} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Search</button>
                    </span>
                </form>
            </div>
        )
    }
    
}