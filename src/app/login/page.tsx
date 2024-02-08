"use client"
import {Button, Card, Checkbox, Col, Form, Image, Input, Row} from "antd";
import {LockOutlined, SafetyCertificateOutlined, UserOutlined} from "@ant-design/icons";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const App: React.FC = () => {

    return (
        <div className={"bg-[url('/images/login-background.jpg')] bg-cover w-full min-h-[100vh] flex justify-between items-center"}>
            <Card title="若依后台管理系统" style={{width: 400, margin: '0 auto'}}>
                <Form
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="username"
                        rules={[{required: true, message: ' 请输入您的账号!'}]}
                    >
                        <Input prefix={
                            <UserOutlined/>
                        }/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[{required: true, message: '请输入您的密码!'}]}
                    >
                        <Input.Password prefix={
                            <LockOutlined/>
                        }/>
                    </Form.Item>

                    <Form.Item<FieldType>>
                        <Row gutter={16}>
                            <Col span={14}>
                                <Form.Item<FieldType> name="password"
                                                      rules={[{required: true, message: '请输入验证码!'}]}>
                                    <Input prefix={
                                        <SafetyCertificateOutlined/>
                                    }/>
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" height={38}
                                       width={'100%'}/>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            <footer
                className={"fixed bottom-0 text-center w-full text-white tracking-wider text-[12px] h-[40px] leading-[40px]"}>
                Copyright © 2018-2023 ruoyi.vip All Rights Reserved
            </footer>
        </div>
    );

}

export default App;
