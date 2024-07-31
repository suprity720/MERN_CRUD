import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/blogs/${id}`, blog)
      .then(() => navigate(`/blogs/${id}`))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="container my-5">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h1 className="text-center">Edit Blog</h1>
                <form onSubmit={handleUpdate}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Tile"
                      onChange={(e) =>
                        setBlog({ ...blog, title: e.target.value })
                      }
                    />
                    <label for="formId1">Title</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Image"
                      onChange={(e) =>
                        setBlog({ ...blog, image: e.target.value })
                      }
                    />
                    <label for="formId1">Image</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Body"
                      onChange={(e) =>
                        setBlog({ ...blog, body: e.target.value })
                      }
                    />
                    <label for="formId1">Body</label>
                  </div>
                 
                  <button type="submit" className="btn" style={{ backgroundColor: '#8B0000', color: '#FFFFFF' }} >
                         Update Blog
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

export default EditBlog;
