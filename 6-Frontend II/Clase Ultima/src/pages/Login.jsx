// components/LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../store/useUserLogin";
import {
  Form,
  Input,
  ErrorText,
  SubmitButton,
  Container,
} from "../components/LoginComponents";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setIsLogged, setUser } = useUserLogin();
  const navigate = useNavigate();

  const onFinish = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
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
    <Container>
      <Form onSubmit={onFinish}>
        <Input type="text" name="username" placeholder="Usuario" required />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        {error && (
          <ErrorText>
            Usuario o contraseña incorrectos. Por favor intente de nuevo.
          </ErrorText>
        )}
        <SubmitButton type="submit" disabled={loading}>
          Iniciar sesión
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default LoginForm;
