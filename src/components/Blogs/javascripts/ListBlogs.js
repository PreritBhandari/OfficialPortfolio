import React from "react";
import "../css/blog.css";
import { Grid } from "@material-ui/core";
import Axios from "axios";

function ListBlogs() {
  React.useEffect(() => {
    Axios.get("http://127.0.0.1:8000/create/")
      .then((res) => {
        console.log(res);
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
            <div className="indblog">
              <img
                style={{ width: 300, height: 300, borderRadius: 40 }}
                src="https://i.pinimg.com/236x/fb/c7/ea/fbc7eaf53db67c1fb82bade23913b667.jpg"
              />
              <br />
              <label>Blog Post 1</label>
              <br />
              <br />
              <q>
                First blog in Blogs Page ehdjssjfcdsjhfsd sjdhfsjhfshjfshf
                sdhjcsjhffhj hdghsjedwejdsjed sjhdjshsejfdhsejd jsedhjshfjefhkej
              </q>
              <br />
              <br />
              <a href="#">See Blog</a>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ListBlogs;
