import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
const Author = (props) => {
   
    const { authorsName, setAuthorsName } = props;
    const [firstname, setFirstname] = useState('');

    const authorHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            firstname
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setAuthorsName([...authorsName, res.data]); 
        })
        
    }
    
    return (
        <div>
        <Link to="/author/new">Add New Author</Link>
        <form onSubmit={authorHandler}>
        
        <label htmlFor="">Author</label>
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <input type="submit" value="Create" />
        </form>

        </div>
        
    );
}

export default Author;
