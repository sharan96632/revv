import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { BrouserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Faqs } from "./components/Faqs";
import { Cars } from "./components/Cars";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
