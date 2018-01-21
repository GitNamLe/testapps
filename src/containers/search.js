import React, { Component } from 'react';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        /* sends http to db api
        this.props.fetchWeather(this.state.term); */
    }
    
    render(){
        return (
            <div>
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

                <ContentList /> 
            </div>
        )
    }
}