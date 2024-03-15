import React from "react";
import "./styles.css";
import Feed from "./Feed";
import posts from "../utils/random-posts.json";
import Collapsible from "./Collapsible";
export default function Scroll() {
  return (
    <>
      {posts.map((post, index) => (
        <Feed
          key={index}
          username={post.username}
          profilePicture={post.profilePicture}
          postImage={post.postImage}
          post={post.post}
        />
      ))}
    </>
  );
}