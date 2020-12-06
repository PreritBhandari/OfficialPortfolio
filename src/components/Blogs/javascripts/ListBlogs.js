import React from "react";
import "../css/blog.css";
import { Grid, Image, Segment } from "semantic-ui-react";
function ListBlogs() {
  return (
    <div>
      <div className="bloglist">
        <h1>Explore Blogs</h1>
        <div>
          <Image
            style={{ width: 300, height: 300, padding: 20 }}
            src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
          />
          <Image
            style={{ width: 300, height: 300, padding: 20 }}
            src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
          />
          <Image
            style={{ width: 300, height: 300, padding: 20 }}
            src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
          />
          <Image
            style={{ width: 300, height: 300, padding: 20 }}
            src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
          />
          <Image
            style={{ width: 300, height: 300, padding: 20 }}
            src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
          />
          <Image
            style={{ width: 300, height: 300, padding: 20 }}
            src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ListBlogs;
