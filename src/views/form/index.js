import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

export default class FormComponent extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
    }
    onFinish = values => {
        let dbCon = this.props.db.database().ref('/user');
        dbCon.push(values)
        this.onReset();
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    render() {
        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };
        const layout = {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 16,
            },
        };

        return (
            <div style={{padding: "100px"}}>
                <Form {...layout} name="control-ref" ref={this.formRef} onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[
                            {
                                type: 'number',
                                min: 0,
                                max: 99,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={this.onReset}
                        >
                            Clear
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
