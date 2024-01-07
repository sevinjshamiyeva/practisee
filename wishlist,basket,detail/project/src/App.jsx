import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { rout } from './routes/rout';
import { Provider } from 'react-redux'
import {store} from "../src/redux/store/store"

const router=createBrowserRouter(rout)

function App() {
  
  return (
    <><Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
   </>
    
    
  )
}

export default App