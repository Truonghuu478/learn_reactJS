import { useState } from 'react'
import './App.css'
import React from 'react';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import DemoContext from './context'
import SearchPage from './useDeferredValue';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DemoContext />,
  },
  {
    path: "/deferred",
    element: <SearchPage />,
  }
  //SearchPage
]);
function App() {

  return (
      <RouterProvider router={router} fallbackElement={<div>...Loading</div>}/>
  )
}

export default App
