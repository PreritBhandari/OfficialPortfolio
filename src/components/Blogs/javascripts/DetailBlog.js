import React from "react";
import "../css/blog.css";

import moment from "moment";

function DetailBlog(props) {
  const {
    post,
    title,

    thumbnail,
    category,
    date_posted,
  } = props.location.state;
  return (
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
  );
}

export default DetailBlog;
