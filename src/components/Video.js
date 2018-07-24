import React, { Component } from 'react';
import MyVideo from './swimming.mp4'

export default class Video extends Component {
    render() {

        let style={
           container: {
            overFlow: 'hidden',
            height: '100vh',
            width: '100%',
            position: 'relative'
           },
           video: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top:0,
            left: 0,
            //zIndex: 0
           },
           test: {
               position: 'absolute',
               top: '50%',
               left: '50%',
               zIndex: '5',
               color: 'black'
           }
        }
        return (
            <div style={style.container}>
                <video style={style.video} controls autoPlay loop>
                    <source src={MyVideo}/>
                </video>

                <h1 style={style.test}>This is a test</h1>
            </div>
        );
    }
}