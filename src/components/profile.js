import React, { Component } from 'react';
import ProfileList from './profile-list';

export default class Profile extends Component {
    //DUMMY DATA. NEED TO IMPLEMENT DB API AND BECOME CONTAINER HOLDING PROFILELIST
    obj = [
        {
            didInput: true,
            name: 'Books',
            //items can also be an object with name AND picture name
            items: 
            [
                'cover1.jpeg',
                'cover2.jpeg',
                'cover3.jpeg',
                'cover4.jpeg',
                'cover5.jpeg',
                'cover6.jpeg',
                'cover7.png',
                'cover8.jpeg',
                'cover9.jpeg'
            ]
        },
        {
            didInput: true,
            name: 'Movies',
            //items can also be an object with name AND picture name
            items: 
            [
                'cover1.jpeg',
                'cover2.jpeg',
                'cover3.jpeg',
                'cover4.jpeg',
                'cover5.jpeg',
                'cover6.jpeg',
                'cover7.png',
                'cover8.jpeg',
                'cover9.jpeg'
            ]
        },
        {
            didInput: false,
            name: 'TV Shows',
            //items can also be an object with name AND picture name
            items: 
            [
                'cover1.jpeg',
                'cover2.jpeg',
                'cover3.jpeg',
                'cover4.jpeg',
                'cover5.jpeg',
                'cover6.jpeg',
                'cover7.png',
                'cover8.jpeg',
                'cover9.jpeg'
            ]
        },
        {
            didInput: true,
            name: 'sports',
            //items can also be an object with name AND picture name
            items: 
            [
                'cover1.jpeg',
                'cover2.jpeg',
                'cover3.jpeg',
                'cover4.jpeg',
                'cover5.jpeg',
                'cover6.jpeg',
                'cover7.png',
                'cover8.jpeg',
                'cover9.jpeg'
            ]
        }
    ]
    render(){

        let books = this.obj[0];
        let movies = this.obj[1];
        let tvShows = this.obj[2];
        let sports = this.obj[3];


        return (
            <div className="container">
                {books.didInput ? (
                    <ProfileList category={books} />
                ):(
                    <div></div>
                )}
                
                {movies.didInput ? (
                    <ProfileList category={movies} />
                ):(
                    <div></div>
                )}
                {tvShows.didInput ? (
                    <ProfileList category={tvShows} />
                ):(
                    <div></div>
                )}
                {sports.didInput ? (
                    <ProfileList category={sports} />
                ):(
                    <div></div>
                )}
            </div>
        )
    }

}