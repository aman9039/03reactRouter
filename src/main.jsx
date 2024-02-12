import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromChildren} from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([

//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "About",
//         element : <About/>
//       },
//       {
//         path : "Contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter (
  createRoutesFromChildren(
    <Route path='/' element = {<Layout/>}>

    <Route path='/' element = {<Home/>}/>
    <Route path='/About' element = {<About/>}/>
    <Route path='/Contact' element = {<Contact/>}/>
    <Route path='/User/:userId' element = {<User/>}/>
    <Route 
    loader={githubInfoLoader}
    path='Github' 
    element = {<Github/>}
    />
    
    </Route>
  )
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
