import React from "react";
import PropTypes from "prop-types";
import AddColor from "../AddColor";
import ColorList from "../ColorList";

const Content: React.FC = () => {
  return (
    <div>
      <AddColor />
      <ColorList />
    </div>
  );
};

Content.propTypes = {};

export default Content;
