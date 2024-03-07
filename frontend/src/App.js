import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} exact></Route>
        <Route path="/chat" Component={Chatpage}></Route>
      </Routes>
    </div>
  );
}

export default App;
