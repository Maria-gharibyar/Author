import Author from "../Components/Author"
import AuthorList from "../Components/AuthorList"
import { useState } from "react";

const Main = (props) => {
    const [authorsName, setAuthorsName] = useState([]);

    const deleteAuthor = (authorid) => {
        setAuthorsName(authorsName.filter(author => author._id !== authorid));
    }

    return (
        <div> 
            <Author authorsName={authorsName} setAuthorsName={setAuthorsName} />
            <AuthorList authorsName={authorsName} setAuthorsName={setAuthorsName} deleteAuthor={deleteAuthor} />
        </div>
    );
}

export default Main;
