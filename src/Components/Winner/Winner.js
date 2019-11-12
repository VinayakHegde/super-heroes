import React from "react";
import PropTypes from "prop-types";

const Winner = ({ hero, villain }) => {
  const winner =
    !hero || !villain
      ? "-"
      : hero.score > villain.score && hero.weakness !== villain.name
      ? hero.name
      : villain.name;
  const heroName = hero ? hero.name : "-";
  const villainName = villain ? villain.name : "-";

  return (
    <div className="result">
      <h1>Results</h1>
      <div className="hero">Hero is {heroName}</div>
      <div className="villain">Villain is {villainName}</div>
      <div className="winner">Winner is {winner}</div>
    </div>
  );
};

Winner.propTypes = {
  hero: PropTypes.object,
  villain: PropTypes.object
};

Winner.defaultProps = {
  hero: {},
  villain: {}
};

export default Winner;
