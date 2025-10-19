import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname } = config;
  return (
    <button
      className={`${classname}`}
      onClick={() => selectNextBackground({ background })}
    >
      {/* label should come here */}
      {config.label}
    </button>
  );
};
export default ColourSelector;
