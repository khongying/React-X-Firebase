import React from 'react';
import { Layout, Menu } from 'antd';
import HomeComponent from '../src/views/home';
import FormComponent from '../src/views/form';
import LoginComponent from '../src/views/login';
import SiderComponent from '../src/component/sider';
import HeaderComponent from '../src/component/header';
import 'antd/dist/antd.css';
import "./style/index.css";
import firebase from './firebase'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default class App extends React.Component {

    constructor(props){
        super(props);
        // firebase.initializeApp(config);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        const {Content} = Layout;
        return (
            <Layout>
                <SiderComponent collapsed={this.state.collapsed} />
                <Layout className="site-layout">
                    <HeaderComponent handler={this.toggle} collapsed={this.state.collapsed} />
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Router>
                            <Switch>
                                <Route path="/" exact  component={() => <HomeComponent firebase={firebase} />} />
                                <Route path="/member-create" component={() => <FormComponent firebase={firebase} />}/>
                                <Route path="/login" component={() => <LoginComponent firebase={firebase} />}/>
                            </Switch>
                        </Router>
                    </Content>
                </Layout>
            </Layout>
            // <div>
            //     <HeaderComponent />
            //     <SiderComponent />
            //
            //     <FormComponent db={firebase}/>
            //     <LoginComponent />
            // </div>
        )
    }
}
