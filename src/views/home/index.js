import React from 'react';
import _ from 'lodash';
import {Table} from 'antd';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "./index.css";
import {Link} from "react-router-dom";


export default class HomeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };
        let app = this.props.firebase.database().ref('user');
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
    }

    getData(values){
        let messagesVal = values;
        console.log(messagesVal)
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            }).value();
        this.setState({
            messages: messages
        });

        console.log(this.state.messages)
    }

    render() {
        const pagination = {
            pageSize: 5,
        }
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                width: '20%',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '20%',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '20%',
            }
        ];
        return (
            <div className="row">
                <div className="btn-end">
                    <Link to="/member-create">
                        <Button type="primary" shape="round" icon={<PlusOutlined />} >
                            เพิ่มสมาชิก
                        </Button>
                    </Link>

                </div>
                <Table
                    dataSource={this.state.messages}
                    rowKey={record => record._key}
                    columns={columns}
                    pagination={pagination}
                >
                </Table>
            </div>
        )
    }
}
