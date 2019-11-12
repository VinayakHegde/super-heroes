import React from "react";

const Item = props => {
  const { onClick, ...theRest } = props;
  const { name, type } = theRest;
  return (
    <div
      className={type}
      onClick={() => {
        onClick(theRest);
      }}
    >
      {name}
    </div>
  );
};

export default Item;
