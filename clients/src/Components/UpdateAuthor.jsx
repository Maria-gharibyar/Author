import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateAuthor = () => {
    const [error, setError] = useState({});
  const { id } = useParams();
  const [firstname, setFirstname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        setFirstname(res.data.firstname);
      })
      .catch(err => {
        console.log(err);
        setError(err.response.data.errors); // Set error state
    });
  }, [id]);

  const updateAuthor = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/author/${id}`, {
      firstname: firstname
    })
    .then(res => {
      console.log(res);
      navigate("/home");
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Update Author</h1>
      <form onSubmit={updateAuthor}>
        <label htmlFor="authorName">Author Name</label>
        {error.firstname ? 
          <p>{error.firstname.message}</p>
          : null
        }
        <input 
          type="text"
          id="authorName"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateAuthor;
