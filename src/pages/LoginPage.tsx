/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from 'react'
import { Button, Form, Input } from 'antd'

const LoginPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      if (values.username === 'xushnud' && values.password === 'mexmonov1202') {
        localStorage.setItem('token', 'fake-token')
        window.location.href = '/'
      } else {
        alert('Login yoki parol noto\'g\'ri!')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Login"
          name="username"
          rules={[{ required: true, message: 'Login kiriting!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Parol"
          name="password"
          rules={[{ required: true, message: 'Parol kiriting!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Kirish
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage
