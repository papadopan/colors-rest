import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, Modal, notification, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useAddNewColorMutation } from "../../store/features/userSlice";

interface Color {
  name: string;
  hex: string;
}

const AddColor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const [addColor, { isLoading, error, reset, isSuccess }] =
    useAddNewColorMutation();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Color Addition",
        description: "color added successfully",
      });
      form.resetFields();
      setVisible(false);
      reset();
    }
  }, [isSuccess, error, form, reset]);

  return (
    <Row justify="end" style={{ padding: "10px" }}>
      <Button onClick={() => setVisible(true)} icon={<PlusOutlined />}>
        Add Color
      </Button>
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false);
          form.resetFields();
        }}
        title="Add a new Color"
        okText="add"
        okButtonProps={{
          onClick: () => form.submit(),
        }}
        destroyOnClose
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          initialValues={{ hex: "#fff" }}
          onFinish={(val: Color) => addColor({ name: val.name, hex: val.hex })}
        >
          <Form.Item
            label="Color Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your color name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Color Hex Code"
            name="hex"
            rules={[
              {
                required: true,
                message: "Please input your hex code!",
              },
            ]}
          >
            <Input type="color" />
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
};

AddColor.propTypes = {};

export default AddColor;
