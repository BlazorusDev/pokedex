import React from "react";

const Wraper = (Component: React.FC) => () => {
  return (
    <div className="content">
      <Component />
    </div>
  );
};

export default Wraper;
