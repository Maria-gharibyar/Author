import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddAuthor = () => {
    const [error, setError] = useState({}); // Initialize error state as an empty object
    const [NewAuthor, setNewAuthor] = useState({
        firstname: ""
    });

    const authorHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', NewAuthor)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.errors); // Set error state
            });
    }

    return (
        <div>
            <form onSubmit={authorHandler}>
                <label htmlFor="">Add Favorite Author</label>
                {error.firstname ? 
                    <p>{error.firstname.message}</p>
                    : null
                }
                <input type="text" value={NewAuthor.firstname} onChange={(e) => setNewAuthor({ ...NewAuthor, firstname: e.target.value })} />
                <input type="submit" value="Create" />
            </form>
            <Link to="/home">Home</Link>
        </div>
    );
}

export default AddAuthor;
