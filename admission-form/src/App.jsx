import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import AdminLogin from "./components/AdminLogin";
import PrivateRoute from "./components/PrivateRoute";
import GetAllStudents from "./components/GetAllStudents";
import { useAuth } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";

function App() {
  const { user } = useAuth();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<RegistrationForm searchResults={searchResults} />}
            />
            <Route
              path="/admin-login"
              element={user ? <Navigate to="/admin" /> : <AdminLogin />}
            />
            <Route path="/student" element={<GetAllStudents />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <RegistrationForm searchResults={searchResults} />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {user && <Sidebar onSearchResults={handleSearchResults} />}
      </div>
    </Router>
  );
}

export default App;
