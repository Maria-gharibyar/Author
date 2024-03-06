import { useState } from 'react'
import {BrowserRouter,Route,Routes }from 'react-router-dom'
import './App.css'
import Main from './view/Main'
import AddAuthor from './Components/AddAuthor'
import UpdateAuthor from './Components/UpdateAuthor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
    	<BrowserRouter>
            <Routes>
	    <Route element={<Main/>} path="/home" default /> 
      <Route  element={<UpdateAuthor></UpdateAuthor> }path="/author/edit/:id"></Route>
      <Route element={<AddAuthor></AddAuthor>} path='/author/new'></Route>
            </Routes>
    	</BrowserRouter>
        </div>
    </>
  )
}

export default App
