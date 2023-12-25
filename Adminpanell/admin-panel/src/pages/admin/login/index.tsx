import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://apiii-nzp5.onrender.com/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Enter success");
        if (data.role === "admin") {
          window.location.href = "/";
        } else {
          navigate("/");
        }
      } else {
        message.error("Enter failed");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label> <br />
        <Input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ paddingRight: '20px' }}
        />
        <br />
        <label htmlFor="password">Password</label> <br />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ paddingRight: '20px' }}
        />
        <br />
        <Button style={{ marginTop: '10px' }} type="primary" htmlType="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
