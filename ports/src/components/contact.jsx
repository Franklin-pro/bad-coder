import React from 'react';
import { Button, Form, Input, Select } from 'antd';
// import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Contacts = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     schoolname: "",
//     course:"",
//     phonenumber: "",
//     message: "",
//     province: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSelectChange = (value) => {
//     setFormData({ ...formData, province: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const api = "https://masterkraft-bn.onrender.com/API/contact/post";
//       const response = await axios.post(api, formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       alert(`thank you ${response.data.datas.fullname} you message was sent`);

//     } catch (error) {
//       if (error.response) {
//         alert(error.response.data.message);
//       }
//     }
//   };

//   const onFinish = () => {
//     handleSubmit();
//   };

  return (
    <Form
      {...layout}
      name="nest-messages"
    
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="FullName"
      >
        <Input name="fullname"  />
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input name="email"  />
      </Form.Item>
      <Form.Item
        label="Name-of-Project"
      >
        <Input name="project" />
      </Form.Item>
      <Form.Item
        label="Phone-Number"
      >
        <Input name="phonenumber" />
      </Form.Item>
    
      <Form.Item label="Which part i do?">
        <Select >
          <Select.Option value="Eastern province">FRONT-END(INTERFACE)</Select.Option>
          <Select.Option value="Western province">BACK-END(DATABASE AND API)</Select.Option>
          <Select.Option value="Sourthern province">UI/UX DESIGN(DRAWING A WEB)</Select.Option>
          <Select.Option value="Northern province">PHOTO-SHOT(EDITING)</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="main part Of Project">
        <Input.TextArea name="message" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
         GET IN TOUCH
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contacts;