// src/components/Chatbot.js
import React, { useState } from "react";
import { Select, Input, Button, notification, message } from "antd";

const { Option } = Select;

const Chatbot = () => {
  const [department, setDepartment] = useState("marketing");
  const [query, setQuery] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (query) {
      setSubmitted(true);
      notification.success({ message: "Submitted Sucessfully" });
    } else {
      notification.error({ message: "Please fill all the required filds" });
    }
  };
  console.log(query);
  return (
    <div className="flex items-center justify-center h-[70vh]">
      {!submitted ? (
        <div className="flex flex-col">
          <p className="mb-2">
            Select Depeartment<span className="text-red-400">*</span>:
          </p>
          <Select
            className="mb-4 w-[300px]"
            value={department}
            onChange={(value) => setDepartment(value)}
          >
            <Option value="marketing">Marketing</Option>
            <Option value="sales">Sales</Option>
          </Select>
          <p className="mb-2">
            Enter query<span className="text-red-400">*</span>:
          </p>
          <Input
            className="w-[300px]"
            placeholder={`Enter your ${department} query here...`}
            onChange={(e) => setQuery(e?.target?.value)}
          />
          <Button
            className="w-[300px] mt-8 "
            type="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div>Query Submitted</div>
      )}
    </div>
  );
};

export default Chatbot;
