import React from "react";

const RefreshButton = ({ handleRefresh }) => {
  return (
    <button onClick={handleRefresh} style={{ margin: "10px" }}>
      Refresh State
    </button>
  );
};

export default RefreshButton;
