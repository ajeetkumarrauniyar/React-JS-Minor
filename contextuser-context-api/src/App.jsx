import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import UserContextProvider from "./context/UserContextProvider";
import Layout from "./components/Layout";

function App() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <UserContextProvider>
      <Layout>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setActiveTab("login")}
              className={`mr-4 px-4 py-2 rounded-md ${
                activeTab === "login"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`px-4 py-2 rounded-md ${
                activeTab === "signup"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
        {activeTab === "login" ? <Login /> : <Signup />}
        <div className="mt-8">
          <Profile />
        </div>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
