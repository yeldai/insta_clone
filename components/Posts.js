import React from "react";
import Post from "./Post";
import ProfileImage from "../images/profile_image.jpg";
import InstagramPic from "../images/instagram_logo.png";

const posts = [
  {
    id: "123",
    username: "datdg",
    userImg:
      "https://www.fyimusicnews.ca/sites/default/files/styles/article_page_image/public/field/image/iron_maiden.jpg?itok=gCeHsNbg",
    img: "https://www.nightmaretoys.com/wp-content/uploads/2021/05/IronMaiden-FacesofEddie_1000k_pz_20_image-web.jpeg",
    caption: "The real deal",
  },
  {
    id: "123",
    username: "datdg",
    userImg:
      "https://www.fyimusicnews.ca/sites/default/files/styles/article_page_image/public/field/image/iron_maiden.jpg?itok=gCeHsNbg",
    img: "https://www.nightmaretoys.com/wp-content/uploads/2021/05/IronMaiden-FacesofEddie_1000k_pz_20_image-web.jpeg",
    caption: "The real deal",
  },
  {
    id: "456",
    username: "datdg",
    userImg:
      "https://www.fyimusicnews.ca/sites/default/files/styles/article_page_image/public/field/image/iron_maiden.jpg?itok=gCeHsNbg",
    img: "https://www.nightmaretoys.com/wp-content/uploads/2021/05/IronMaiden-FacesofEddie_1000k_pz_20_image-web.jpeg",
    caption: "The real deal",
  },
  {
    id: "456",
    username: "datdg",
    userImg:
      "https://www.fyimusicnews.ca/sites/default/files/styles/article_page_image/public/field/image/iron_maiden.jpg?itok=gCeHsNbg",
    img: "https://www.nightmaretoys.com/wp-content/uploads/2021/05/IronMaiden-FacesofEddie_1000k_pz_20_image-web.jpeg",
    caption: "The real deal",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
