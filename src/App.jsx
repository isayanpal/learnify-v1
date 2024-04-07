import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./const/Navbar";
import Home from "./pages/Home";
import TopicsPage from "./pages/TopicsPage";
import Contact from "./pages/Contact";
import DevelopmentPage from "./pages/DevelopmentPage";
import CorePage from "./pages/CorePage";
import TutorialsPage from "./pages/TutorialsPage";
import ReactPage from "./pages/devPages/ReactPage";
import Mongo from "./pages/devPages/Mongo";
import Node from "./pages/devPages/Node";
import Javascript from "./pages/devPages/Javascript";
import SE from "./pages/corePages/SE";
import OS from "./pages/corePages/OS";
import Edos from "./pages/Edos";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edos" element={<Edos />} />
        <Route path="/topics/development" element={<DevelopmentPage />} />
        <Route path="/topics/development/react" element={<ReactPage />} />
        <Route path="/topics/development/js" element={<Javascript />} />
        <Route path="/topics/development/mongo" element={<Mongo />} />
        <Route path="/topics/development/node" element={<Node />} />
        <Route path="/topics/core" element={<CorePage />} />
        <Route path="/topics/core/software" element={<SE />} />
        <Route path="/topics/core/os" element={<OS />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
      </Routes>
    </>
  );
};

export default App;
