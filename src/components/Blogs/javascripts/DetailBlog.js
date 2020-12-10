import React, { useEffect, useState } from "react";
import "../css/blog.css";
import Axios from "axios";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { Link } from "react-router-dom";

import moment from "moment";

function DetailBlog(props) {
  const {
    post,
    title,

    thumbnail,
    category,
    date_posted,
  } = props.location.state;

  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    Axios.get(`https://preritbhandari.pythonanywhere.com/list/${category}/`)
      .then((res) => {
        console.log(res.data);
        setSimilar(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <div>
      <div
        style={{
          backgroundImage: ` url(${thumbnail})`,
        }}
        className="indblog detailblog"
      >
        <div className="sideData">
          <label>{title}</label> &nbsp;&nbsp; || &nbsp;&nbsp;
          <category>Category: {category} &nbsp;&nbsp;</category>
          <div className="date2">
            Posted at : {moment(date_posted).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
          <hr
            style={{
              width: "110%",
              paddingBottom: 1,
              marginBottom: 75,
            }}
          />
          <div className="post">{post}</div>
          <br />
          <br />
        </div>
      </div>

      <div className="similar">
        <similar>Similar Blogs</similar>
        <div className="similarblog">
          <GridList cols={2.5}>
            {similar.map((data) => (
              <GridListTile className="suggestion" key={data.id}>
                <img src={data.thumbnail} alt={data.title} />
                <Link
                  to={{
                    pathname: "/detailblog",
                    state: {
                      id: data.id,
                      title: data.title,
                      subtitle: data.subtitle,
                      thumbnail: data.thumbnail,
                      category: data.category,
                      post: data.post,
                      date_posted: data.date_posted,
                    },
                  }}
                >
                  <GridListTileBar
                    style={{ fontFamily: "sans-serif" }}
                    title={data.title}
                  />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}

export default DetailBlog;
