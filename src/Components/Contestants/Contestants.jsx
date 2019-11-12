import React from "react";
import Item from "../Item/Item";

const Heroes = ({ contentants, setContestent, type }) => {
  return (
    <div className="contentants">
      <h1>{type}</h1>
      {contentants &&
        contentants.map((c, i) => {
          if (type === c.type) {
            return <Item key={i} {...{ ...c, onClick: setContestent }} />;
          }

          return null;
        })}
    </div>
  );
};

export default Heroes;
