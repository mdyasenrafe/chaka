import React from "react";
import UseAuth from "../../../Hooks/UseAuth";

const DashBoardHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h1>Welcome To {user.displayName} user Dashboard</h1>
    </div>
  );
};

export default DashBoardHome;
