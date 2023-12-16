import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLayout from "./layout/MyLayout";
import CreateBlog from "./screens/CreateBlog";
import CreatePost from "./screens/CreatePost";
import BlogList from "./screens/BlogList";
import PostList from "./screens/PostList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
