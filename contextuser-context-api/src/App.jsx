import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <p>Simple Context API App to understand the concept</p>
      <Login />
      <br />
      <Signup />
      <br />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
