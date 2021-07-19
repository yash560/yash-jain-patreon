import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./Hiring.css";
import { posts } from "./posts";
import MyLoader2 from "../../Loader2";
import SidebarCanva from "../../Canva/SidebarCanva";
function Hiring() {
  //initially mount the page at the position (0,0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Hiring-main-container flex justify-center">
      {" "}
      <div className="Hiring-article-container">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} isCommentaLink />
        ))}
      </div>
      <div className="left-sidebar-container">
        <SidebarCanva />
      </div>
      <div class="side-container">
        {" "}
        <input
          class="Hiringinput"
          type="text"
          placeholder="Search Events"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Hiring;
