import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Placement from "./components/Placement/Placement";
import Student from "./components/Student/Student";
import Staff from "./components/About/Staff";

function App() {
  return (
    <>
    <ToastContainer theme="colored"></ToastContainer>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/staff" element={<Staff/>}></Route>
    <Route path="/placement" element={<Placement />}></Route>
    <Route path="/student" element={<Student/>} ></Route>
  </Routes>
  </BrowserRouter>

  </>

  );
}

export default App;
