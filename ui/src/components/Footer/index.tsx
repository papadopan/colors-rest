import React from "react";
import PropTypes from "prop-types";
import { Row, Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <Row justify="center">
      <Typography.Text>Frontify - Colors App - 2022</Typography.Text>
    </Row>
  );
};

Footer.propTypes = {};

export default Footer;
