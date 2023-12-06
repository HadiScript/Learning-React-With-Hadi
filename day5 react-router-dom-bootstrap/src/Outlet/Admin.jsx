import React from "react";

const Admin = ({ children }) => {
  return (
    <>
      <h1>Admin authorized</h1>
      {children}
    </>
  );
};

export default Admin;
