import React, { useState, useEffect } from "react";
import "../css/blog.css";
import { Grid } from "@material-ui/core";
import Axios from "axios";
import moment from "moment";

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
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: 40,
                    marginBottom: 10,
                  }}
                  src={post.thumbnail}
                  alt="Blog"
                />
                <label>{post.title}</label>
                <br />
                <br />
                <q>{post.subtitle}</q>
                <br />
                <br />
                <date>
                  {moment(post.date_posted).format("MMMM Do YYYY, h:mm:ss a")}
                </date>
                <br />
                <category>Category: {post.category} &nbsp;&nbsp;</category>
                <br />
                <a href="/">See Blog</a>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ListBlogs;
