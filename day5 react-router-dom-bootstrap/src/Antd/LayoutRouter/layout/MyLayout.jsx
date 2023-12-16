import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MyLayout = ({ children, from }) => {
  // useParams id

  // async code
  // authorization
  // time taken -> 5 sec

  // current user ?

  // if yes layout check
  // else no redirect login page

  useEffect(() => {
    console.log("am re render");
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="bg-dark text-white" style={{ width: "20%" }}>
        <Link to={"/"}>Create Blog</Link>
        <Link to={"/create-post"}>Create Post</Link>
        <Link to={"/blogs"}>Blogs All</Link>
        <Link to={"/posts"}>Posts All</Link>
      </div>
      <div className="bg-secondary text-white" style={{ width: "80%" }}>
        <div className="bg-dark m-2">header</div>
        <div className="m-2">{children}</div>
      </div>
    </div>
  );
};

export default MyLayout;
