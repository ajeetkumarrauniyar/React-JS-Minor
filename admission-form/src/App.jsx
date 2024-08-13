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
import Search from "./components/SearchQuery";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route
          path="/admin-login"
          element={user ? <Navigate to="/admin" /> : <AdminLogin />}
        />
        <Route path="/student" element={<GetAllStudents />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <RegistrationForm />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
