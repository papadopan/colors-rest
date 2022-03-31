import React from "react";
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

export default Content;
