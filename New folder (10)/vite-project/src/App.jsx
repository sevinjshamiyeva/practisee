import React from "react";
import Postblog from "./redux/postblog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Nopages";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="postBlog" element={<Postblog />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
