import React from 'react';
import {Layout, Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

export default class SiderComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {Sider} = Layout;

        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
