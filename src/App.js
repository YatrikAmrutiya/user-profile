import logo from "./logo.svg";
import "./App.css";
import { BasicInfo, Profile } from "./components/Profile";
import { Appointment } from "./components/Appointment";
import { Consultation } from "./components/Consultation";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
      </div>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
