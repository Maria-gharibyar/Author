import { useEffect } from "react";
import axios from 'axios';

const AuthorList = (props) => {
    const{ authorsName, setAuthorsName } = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res.data);
                setAuthorsName(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
             {
                authorsName.map((person, index)=>{
                return <p key={index}>{person.firstname}</p>
                })
            
            }
        </div>
    );
}

export default AuthorList;
