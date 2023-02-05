import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Placement from "./components/Placement/Placement";
import Student from "./components/Student/Student";
import About from "./components/About/About";

function App() {
  return (
    <>
    <ToastContainer theme="colored"></ToastContainer>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/placement" element={<Placement />}></Route>
    <Route path="/student" element={<Student/>} ></Route>
  </Routes>
  </BrowserRouter>

  </>

  );
}

export default App;
