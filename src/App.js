import logo from "./logo.svg";
import "./App.css";
import { BasicInfo } from "./components/BasicInfo";
import { Contacts } from "./components/Contacts";
import { Address } from "./components/Address";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div className="m-5">
          <h1 className=" text-2xl font-semibold	">User Profile</h1>
          <BasicInfo />
        </div>

        <div className="flex m-5">
          <Contacts />
          <Address />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
