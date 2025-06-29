import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Layout from './components/root/Layout'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element ={<Layout></Layout>}>
    <Route path='/' element ={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
  </Route>
))

function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
