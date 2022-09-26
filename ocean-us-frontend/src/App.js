import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeInfo from "./Pages/Home/HomeInfo";
import Login from "./Pages/Home/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomeInfo />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={ <div>Singup</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
