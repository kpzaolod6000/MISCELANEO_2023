import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoForm from "./components/videos/VideoForm";
import VideoList from "./components/videos/VideoList";
import NavBar from "./components/navbar/NavBar";

import "react-toastify/dist/ReactToastify.css"
import "bootswatch/dist/pulse/bootstrap.min.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route path="/" Component={VideoList} />
          <Route path="/new-video" element={<VideoForm/>} />
          <Route path="/update-video/:id" element={<VideoForm/>} />
        </Routes>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
