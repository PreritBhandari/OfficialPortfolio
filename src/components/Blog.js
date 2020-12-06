import React from "react";
import Footer from "./Footer";
import ListBlogs from "./Blogs/javascripts/ListBlogs";

function Blog() {
  return (
    <div>
      {/* <div className="blog-content">Hello</div> */}
      <div>
        <ListBlogs />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
