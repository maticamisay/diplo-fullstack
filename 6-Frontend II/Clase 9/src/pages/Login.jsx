import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useUserLogin from "../store/useUserLogin";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setIsLogged, setUser } = useUserLogin();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setLoading(false);
        return setError(true);
      }

      const data = await response.json();
      setUser(data);
      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.log({ error });
      setError(true);
    }
    setLoading(false);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={8}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu nombre de usuario!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingresa tu contraseña!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>

          {error && (
            <Form.Item>
              <p style={{ color: "red" }}>
                Usuario o contraseña incorrectos. Por favor intente de nuevo.
              </p>
            </Form.Item>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;
