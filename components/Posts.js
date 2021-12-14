import React, { useEffect, useState } from "react";
import Post from "./Post";
import ProfileImage from "../images/profile_image.jpg";
import InstagramPic from "../images/instagram_logo.png";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db, storage } from "../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
