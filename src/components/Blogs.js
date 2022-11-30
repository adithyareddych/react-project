import React, { useState, useEffect } from "react";
import axios from "axios";
// import Row from "react-bootstrap/Row";
// import Row from "react-bootstrap/Row";
import "./Blogs.css";
// import img1 from "./images/1.jpg";
// import img2 from "./images/2.jpeg";
// import img3 from "./images/3.jpg";
// import img4 from "./images/4.webp";
// import img5 from "./images/5.jpg";
// import img6 from "./images/6.jpg";
// import img7 from "./images/7.jpeg";
// import img8 from "./images/8.jpeg";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
const Blogs = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await api.get("?_limit=15");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);
  const fundelete = async (id) => {
    try {
      await api.delete(`${id}`);
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const funsubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };
  const addPosts = async (title, body) => {
    try {
      let response = await api.post("", {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };
  // const [bgStyle, setbgStyle] = useState({});
  // const pictureArray = [img1, img2, img3, img4, img5, img6, img7, img8];
  // const randomIndex = Math.floor(Math.random() * pictureArray.length);
  // const selectedPicture = pictureArray[randomIndex];
  //   useEffect(() => {
  //     setbgStyle({
  //       backgroundImage: `url(${selectedPicture})`,
  //       height: "100%",
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "cover",
  //     });
  //   }, [selectedPicture]);

  //   console.log(bgStyle);
  return (
    <div className="app container">
      <i class="fa-solid fa-blog fa-2xl blogicon"></i>
      <nav>
        <h1>BLOG PAGE</h1>
      </nav>
      <div className="contain">
        <div className="add-post-container">
          <form onSubmit={funsubmit} className="form1">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add Title"
            />
            <textarea
              name=""
              className="form-control"
              id=""
              cols="10"
              rows="8"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Add Body"
            ></textarea>
            <button type="submit" id="addb">
              Add Blog
            </button>
          </form>
        </div>
      </div>
      <div className="blogs-container row">
        <h2 id="blo">Blogs</h2>
        {posts.map((post) => {
          return (
            <div className="col-4">
              <div className="blogs-card " key={post.id}>
                <h2 className="blogs-title">{post.title}</h2>
                <p className="blogs-body">{post.body}</p>
                <div className="button">
                  <div
                    className="delete-btn"
                    onClick={() => fundelete(post.id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
