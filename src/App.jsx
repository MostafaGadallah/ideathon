import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
import Cvform from "./Cvform";
import Padge from "./Padge";
import Scanner from "./Scanner";
import Dashboard from "./Dashboard";
import Timeline from "./Timeline";

function App() {
  return (
    <>
      <Navbar />

      <div className="container rounded-lg p-5 text-center">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/registration" element={<Form />} />
          <Route path="/ats-cv-builder" element={<Cvform />} />
          <Route path="/event-poster" element={<Padge />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;