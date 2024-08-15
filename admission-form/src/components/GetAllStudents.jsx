/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import configService from "../services/appwrite_config_service";

const GetAllStudents = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const studentsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await configService.getAllStudents();
        setAllStudents(response.documents);
      } catch (error) {
        console.error("Error fetching students:", error);
        setError("Failed to fetch students. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const onChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = allStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  if (isLoading) {
    return <div className="text-center mt-8">Loading students...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Students
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Adm. No.</th>
              <th className="px-4 py-2 text-left text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Class</th>
              <th className="px-4 py-2 text-left text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-gray-600">Phone</th>
              <th className="px-4 py-2 text-left text-gray-600">Sex</th>
              <th className="px-4 py-2 text-left text-gray-600">
                Date of Birth
              </th>
              <th className="px-4 py-2 text-left text-gray-600">
                Father's Name
              </th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-gray-800">
                  {student.admission_no}
                </td>
                <td className="px-4 py-2 text-gray-800">
                  {student.student_name}
                </td>
                <td className="px-4 py-2 text-gray-800">{student.class}</td>
                <td className="px-4 py-2 text-gray-800">
                  {student.student_email}
                </td>
                <td className="px-4 py-2 text-gray-800">
                  {student.student_phone_no}
                </td>
                <td className="px-4 py-2 text-gray-800">{student.sex}</td>
                <td className="px-4 py-2 text-gray-800">
                  {student.date_of_birth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalStudents={allStudents.length}
        studentsPerPage={studentsPerPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default GetAllStudents;
