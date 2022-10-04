import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeInfo from "./Pages/Home/HomeInfo";
import Login from "./Pages/Home/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./Pages/Home/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <ToastContainer />
        <Routes>
          <Route path="/" element={ <HomeInfo />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={ <Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
