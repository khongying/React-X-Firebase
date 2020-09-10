import React from 'react';
import {Layout} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


export default class HeaderComponent extends React.Component {

    render() {
        const {Header} = Layout;

        return (
            <Header className="site-layout-background" style={{padding: 0}}>
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.props.handler,
                })}
            </Header>
        )
    }
}
