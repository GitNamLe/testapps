import React, { Component } from 'react';

export default function ProfileList(props){
    console.log(props)
    return (
        <div className="row">
            <div className="col-xs-3"><p className="category">{props.category.name}</p></div>
            <div className="col-xs-9">
                <div className="row">
                    <div className="col-xs-1"><img src="../resources/cover1.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover2.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover3.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover4.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover5.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover6.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover7.png" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover8.jpeg" width="60px" height="80px"/></div>
                    <div className="col-xs-1"><img src="../resources/cover9.jpeg" width="60px" height="80px"/></div>
                </div>
            </div>       
        </div>
    )
}