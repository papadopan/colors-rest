import { BgColorsOutlined } from "@ant-design/icons";
import { Row, Space, Typography } from "antd";
import React from "react";

const Header: React.FC = () => {
  return (
    <Row>
      <Space style={{ verticalAlign: "middle" }}>
        <BgColorsOutlined style={{ color: "#fff", fontSize: "20px" }} />
        <Typography.Title level={5} style={{ color: "#fff" }}>
          Color App
        </Typography.Title>
      </Space>
    </Row>
  );
};

export default Header;
