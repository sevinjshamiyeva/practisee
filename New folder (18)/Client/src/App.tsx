import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Artist from "./Pages/Artist";
import AdArtist from "./Pages/AddArtist";

interface Props {}

function App({}: Props): ReactElement {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Artist />} />
          <Route index element={<AdArtist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
