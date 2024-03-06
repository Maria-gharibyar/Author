import { useState } from 'react'
import {BrowserRouter,Route,Routes }from 'react-router-dom'
import './App.css'
import Main from './view/Main'
import AddAuthor from './Components/AddAuthor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
    	<BrowserRouter>
            <Routes>
	    <Route element={<Main/>} path="/home" default /> 
      <Route element={<AddAuthor></AddAuthor>} path='/author/new'></Route>
            </Routes>
    	</BrowserRouter>
        </div>
    </>
  )
}

export default App
