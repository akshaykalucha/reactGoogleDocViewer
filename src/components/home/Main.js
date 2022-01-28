import React, { Component } from 'react';
import mypdf from './Resume_Akshay_Kalucha.pdf';

export default class Main extends Component {
    render() {
        return (
            <div>
                <p>this is test change</p>
                <p>this is test change</p>
                <p>this is test change</p>
                <p>this is test change</p>
                <h1>Hello World</h1>
                <embed src={mypdf} type="application/pdf" width="100%" height="600px" />
            </div>
        )
    }
}
