// we can not diplsa from 
import Author from "../Components/Author"
import AuthorList from "../Components/AuthorList"
import { useState } from "react"
const Main=(props)=>{
    const [authorsName, setAuthorsName] = useState([])
    return(
        <div> 
        <Author authorsName={authorsName} setAuthorsName={setAuthorsName} ></Author>
        <AuthorList authorsName={authorsName} setAuthorsName={setAuthorsName}></AuthorList>
        </div>
    )
}
export default Main