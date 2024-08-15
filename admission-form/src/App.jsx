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
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setSelectedStudent(results.length > 0 ? results[0] : null);
  };

  return (
    <Router>
      <div className="flex print:block">
        <div className="flex-1 print:w-full">
          <Routes>
            <Route
              path="/"
              element={
                <RegistrationForm
                  searchResults={searchResults}
                  selectedStudent={selectedStudent}
                />
              }
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
                  <RegistrationForm
                    searchResults={searchResults}
                    selectedStudent={selectedStudent}
                  />
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
