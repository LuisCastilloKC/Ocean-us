import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeInfo from "./Pages/Home/HomeInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomeInfo />} />
          <Route path="/signin" element={ <SignIn />} />
          <Route path="/signup" element={ <SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
