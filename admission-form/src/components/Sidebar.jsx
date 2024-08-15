import { useState } from "react";
import "../print.css";
import { useAuth } from "../contexts/AuthContext";
import configService from "../services/appwrite_config_service";
import PropTypes from "prop-types";

const Sidebar = ({ onSearchResults }) => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  if (!user) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      try {
        const response = await configService.searchStudents(query);
        onSearchResults(response.documents);
      } catch (error) {
        console.error(
          "Components :: Sidebar :: Error searching students",
          error
        );
        onSearchResults([]);
      }
    } else {
      onSearchResults([]);
    }
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col print:bg-transparent">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Admission No, Aadhaar No or Name"
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 mb-2 print:bg-transparent print:border-transparent "
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Search
        </button>
      </form>
      {/* <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-300">
        Modify
      </button> */}
      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-300">
        Update
      </button>
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-300">
        Delete
      </button>
      <button
        onClick={logout}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300"
      >
        Logout
      </button>
    </aside>
  );
};

Sidebar.propTypes = {
  onSearchResults: PropTypes.func.isRequired,
};
export default Sidebar;
