import React, { useState, useEffect } from "react";
import "../css/blog.css";
import { Grid } from "@material-ui/core";
import Axios from "axios";
import moment from "moment";

function ListBlogs() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    Axios.get("https://preritbhandari.pythonanywhere.com/create/")
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
          <Grid item xs container direction="column" spacing={2}>
            {post.map((post) => (
              <div style={{ display: "flex" }} className="indblog">
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

                <div className="sideData">
                  <label>{post.title}</label> &nbsp;&nbsp; || &nbsp;&nbsp;
                  <category>Category: {post.category} &nbsp;&nbsp;</category>
                  <hr
                    style={{
                      width: "110%",
                      paddingBottom: 1,
                      marginBottom: 75,
                    }}
                  />
                  <div className="subtitle">{post.subtitle}</div>
                  <br />
                  <br />
                  <div className="gowithus">
                    <button style={{ color: "white" }}>See Blog</button>
                  </div>
                  {/* <a href="/">See Blog</a> */}
                  <div className="date">
                    <hr />
                    {moment(post.date_posted).format("MMMM Do YYYY, h:mm:ss a")}
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ListBlogs;
