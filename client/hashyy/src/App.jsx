import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./screens/landing";
import Dashboard from "./screens/dashboard";
import BlogScreen from "./screens/blogScreen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogs" element={<BlogScreen />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
