import React from 'react'
import {routes} from './routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(routes)
type Props = {}

function App({}: Props) {
  return (
    <>
    <RouterProvider router={router}/>
    </>
    )
    
}

export default App