import React, { useState } from "react";
import { Form, Input, Button, Image, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { GithubOutlined, KeyOutlined, MailFilled } from "@ant-design/icons";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Testuser" && password === "Testpass") {
      setIsAuthenticated(true);
      navigate("/chatbot");
      notification.success({ message: "Login Sucessfull" });
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="h-screen !p-[100px]"
      style={{
        backgroundImage:
          'url("https://cdn.visily.ai/app/production/1697509770311/static/AuthFormBackground-46f3fcd5.svg")',
      }}
    >
      <div className="flex justify-center items-center  !h-[70vh] !w-full sm:w-[800px] px-4 md:px-0">
        <div className="bg-white flex border border-white rounded-2xl lg:!w-[800px]  sm:w-[80%] md:w-[700px] lg:w-[50%] xl:w-[40%] ">
          <div className="w-full md:w-1/2 flex justify-center flex-col items-center p-4">
            <div className="text-2xl font-bold mb-4">Log in</div>
            <div className="flex items-center my-8">
              <Button className="mr-2">Continue with Google</Button>
              <Button className="">
                <GithubOutlined />
              </Button>
            </div>
            <div className="mb-4 flex items-center">
              <span className="text-gray-500">---</span> OR{" "}
              <span className="text-gray-500">---</span>
            </div>
            <Form onFinish={handleLogin}>
              <Form.Item
                label="Username"
                labelCol={{ span: "24" }}
                name="username"
                rules={[
                  { required: true, message: "Please enter your username!" },
                ]}
              >
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  prefix={<MailFilled />}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                labelCol={{ span: "24" }}
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  prefix={<KeyOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full mt-2"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="hidden md:block w-1/2">
            <img
              className="border border-white rounded-r-2xl"
              src="https://cdn.visily.ai/app/production/1697509770311/static/SignupGraphic-e7e3321a.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
