import React, { useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AuthorList = (props) => {
    const { deleteAuthor, authorsName, setAuthorsName } = props;

    const removeAuthor = (authorid) => {
        axios.delete('http://localhost:8000/api/author/' + authorid)
            .then(res => {
                deleteAuthor(authorid);
            })
            .catch(err => console.log(err));
          
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                setAuthorsName(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {authorsName.map((person, index) => (
                <p key={index}>
                    {person.firstname}
                    <Link to={"/author/edit/" + person._id}>
                        Edit
                    </Link>
                    <button onClick={(e) =>{ removeAuthor(person._id) }}>
                        Delete
                    </button>
                </p>
            ))}
        </div>
    );
}

export default AuthorList;
