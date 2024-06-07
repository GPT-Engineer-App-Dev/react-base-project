import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx"; // Import the Login page
import Events from "./pages/Events.jsx"; // Import the Events page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/login" element={<Login />} /> {/* Add the login route */}
      <Route path="/events" element={<Events />} /> {/* Add the events route */}
      </Routes>
    </Router>
  );
}

export default App;
