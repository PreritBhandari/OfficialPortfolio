import React, { useState, useEffect } from "react";
import "../css/blog.css";
import { Grid, Select, MenuItem } from "@material-ui/core";
import Axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

function ListBlogs() {
  const [post, setPost] = useState([]);
  const [selection, setSelection] = useState("listblog");

  useEffect(() => {
    Axios.get(`https://preritbhandari.pythonanywhere.com/${selection}/`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selection]);

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      <div className="bloglist">
        <div id="bichko" class="layer" data-speed="2">
          <h1>
            Explore <spam>Blogs</spam>
          </h1>
          <br />
          <br />
        </div>
        <div>
          <br />
          <Select
            className="selectitem"
            value={selection}
            onChange={handleChange}
          >
            <MenuItem value="listblog">
              <em>All </em>
            </MenuItem>
            <MenuItem value="list/Programming">
              <em>Programming</em>
            </MenuItem>
            <MenuItem value="list/Travel">
              <em>Travel</em>
            </MenuItem>
            <MenuItem value="list/Others">
              <em>Others</em>
            </MenuItem>
          </Select>
        </div>
        <br />
        <br />
        <div className="blogfile">
          <Grid item xs container direction="column" spacing={2}>
            {post.map((post) => (
              <div
                style={{
                  display: "flex",
                }}
                className="indblog"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
                </div>

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
                    <Link
                      to={{
                        pathname: "/detailblog",
                        state: {
                          id: post.id,
                          title: post.title,
                          subtitle: post.subtitle,
                          thumbnail: post.thumbnail,
                          category: post.category,
                          post: post.post,
                          date_posted: post.date_posted,
                        },
                      }}
                    >
                      <button style={{ color: "white" }}>See Blog</button>
                    </Link>
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
