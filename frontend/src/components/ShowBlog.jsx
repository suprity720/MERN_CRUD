import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ShowBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/blogs/${blog._id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="container my-5">
        <img
          src={blog.image}
          className="img-fluid rounded"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
        <NavLink to="/" className="btn btn-primary" style={{ backgroundColor: '#8B0000', color: '#FFFFFF', border:'none' }}>
          Back to Home
        </NavLink>

        <NavLink className="btn btn-primary m-2" to={`/blogs/${blog._id}/edit`} style={{ backgroundColor: '#8B0000', color: '#FFFFFF',border:'none' }}>
          Edit Blog
        </NavLink>
        <NavLink
          onClick={handleDelete}
          role="button"
          className="btn btn-primary" style={{ backgroundColor: '#8B0000', color: '#FFFFFF', border:'none' }}
        >
          Delete
        </NavLink>
      </div>
    </div>
  );
};

export default ShowBlog;
