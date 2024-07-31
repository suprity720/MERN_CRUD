import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <div className="container">
        <div className=" my-4">
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-4  mb-4">
                <div className="card">
                  <img className="card-img-top" src={blog.image} alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.body.substring(0, 10)}...</p>
                    <NavLink
                      to={`/blogs/${blog._id}`}
                      className="btn btn-primary" style={{ backgroundColor: '#8B0000', color: '#FFFFFF', border:'none' }}
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
