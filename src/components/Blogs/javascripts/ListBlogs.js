import React, { useState, useEffect } from "react";
import "../css/blog.css";
import { Grid } from "@material-ui/core";
import Axios from "axios";

function ListBlogs() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/create/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="bloglist">
        <h1>Explore Blogs</h1>
        <div className="blogfile">
          <Grid container>
            {post.map((post) => (
              <div className="indblog">
                <img
                  style={{ width: 300, height: 300, borderRadius: 40 }}
                  src={post.thumbnail}
                  alt="Blog Image"
                />
                <br />
                <label>{post.title}</label>
                <br />
                <br />
                <q>{post.subtitle}</q>
                <br />
                <br />
                {post.category}
                {post.date_posted}
                <a href="#">See Blog</a>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ListBlogs;
