import React from 'react';
import HomeComponent from '../src/views/home';
import FormComponent from '../src/views/form';
import 'antd/dist/antd.css';
import firebase from 'firebase';

export default class App extends React.Component {
    constructor(props){
        super(props);
        const config = {
            apiKey: "AIzaSyDu1sPqRJZzKDW_yqo5nxWsa8qF1ogtZcc",
            authDomain: "test-build-4f101.firebaseapp.com",
            databaseURL: "https://test-build-4f101.firebaseio.com",
            projectId: "test-build-4f101",
            storageBucket: "test-build-4f101.appspot.com",
            messagingSenderId: "243255327820",
            appId: "1:243255327820:web:68343ed84a981bdbc3c8e9"
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
