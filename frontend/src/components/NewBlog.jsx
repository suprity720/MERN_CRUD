import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, image, body };
    console.log("New Blog Data:", newBlog); // Add this line to check the values
    axios
      .post("http://localhost:4000/api/blogs", newBlog)
      .then((res) => {
        console.log("Response:", res); // Add this line to check the response
        navigate("/");
      })
      .catch((Err) => console.log(Err));
  };
  
  return (
    <div>
      <div class="container my-5">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-4">
            <div class="card">
              <h1 className="display-6 text-center">Create New Blog</h1>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label for="formId1">Title</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Image Url"
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <label for="formId1">Image Url</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Body"
                      onChange={(e) => setBody(e.target.value)}
                    />
                    <label for="formId1">Body</label>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#8B0000', color: '#FFFFFF' , border:'none'}}>
                    Create New Blog
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
