import React from 'react';
import HomeComponent from '../src/views/home';
import FormComponent from '../src/views/form';
import 'antd/dist/antd.css';
import firebase from 'firebase';

export default class App extends React.Component {
    constructor(props){
        super(props);
        const config = {
           
    };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <div>
                <HomeComponent db={firebase}/>
                <FormComponent db={firebase}/>
            </div>
        )
    }
}
