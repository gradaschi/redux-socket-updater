import React from "react";
import { useSelector } from "react-redux";

function User() {
  const userData = useSelector((state) => state.user.data);

  return (
    <div>
      <h1>User</h1>
      <h2>{userData}</h2>
    </div>
  );
}

export default User;
