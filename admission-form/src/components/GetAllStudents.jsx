import { useEffect, useState } from "react";
import configService from "../services/appwrite_config_service";

const GetAllStudents = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true);
        const response = await configService.getAllStudents();
        setAllStudents(response.documents);
      } catch (error) {
        console.error("Error fetching students:", error);
        //TODO: set an error state here and display it to the user
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (isLoading) {
    return <div className="text-center mt-8">Loading students...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admission No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sex
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Birth
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Father's Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mother's Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allStudents.map((student) => (
              <tr key={student.$id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.admission_no}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.student_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.section}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{student.sex}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.date_of_birth}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.father_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.mother_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.parent_contact_no}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllStudents;
