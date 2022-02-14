import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Searchform from "./Component/Searchform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userinfo from "./Component/Userinfo";
import UserProvider from "./context";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Searchform />} />
            <Route path="/info" element={<Userinfo />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
