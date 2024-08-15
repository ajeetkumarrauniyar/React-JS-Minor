/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import SchoolLogo from "../assets/logo.jpg";
import configService from "../services/appwrite_config_service.js";
import states from "../states.js";
import PropTypes from "prop-types";

const RegistrationForm = ({ searchResults, selectedStudent }) => {
  const [serialNumber, setSerialNumber] = useState(null);
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedState, setSelectedState] = useState("Bihar");
  const [studentFullName, setStudentFullName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhoneNo, setStudentPhoneNo] = useState("");
  const [photo, setPhoto] = useState(null);
  const [sex, setSex] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [studentAadhaarNo, setStudentAadhaarNo] = useState("");
  const [identificationMarks, setIdentificationMarks] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherQualification, setFatherQualification] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [parentContactNo, setParentContactNo] = useState("");
  const [guardianContactNo, setGuardianContactNo] = useState("");
  const [careOf, setCareOf] = useState("");
  const [village, setVillage] = useState("");
  const [post, setPost] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [district, setDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");

  const getTodayDayAndDate = () => {
    // Custom date format "August 10, 2024
    const now = new Date();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    const dayAndDate = `${month} ${date}, ${year}`;
    return dayAndDate;
  };

  const handleClassChange = (event) => {
    const classValue = event.target.value;
    setSelectedClass(classValue);

    if (["1", "2", "3"].includes(classValue)) {
      setSelectedSection("junior"); // Auto-select Junior
    } else if (["4", "5", "6"].includes(classValue)) {
      setSelectedSection("senior"); // Auto-select Senior
    } else {
      setSelectedSection(""); // Reset Section if no class is selected or invalid value
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const fileSizeInMB = file.size / (1024 * 1024);

    if (fileSizeInMB > 2) {
      alert("File size exceeds 2 MB. Please upload a smaller file.");
      return;
    }

    setPhoto(file);
  };

  // Fetch the last document when the component mounts
  useEffect(() => {
    const fetchLastDocument = async () => {
      try {
        const lastDocument = await configService.getLastStudent();
        if (lastDocument) {
          let lastDocumentSerialNo = 100 + lastDocument;
          setSerialNumber(lastDocumentSerialNo + 1); // Increment the serial number
        } else {
          // If no documents exist, start with 101
          setSerialNumber(101);
        }
      } catch (error) {
        console.error("Error fetching last document:", error);
        setSerialNumber(101); // Default to 101 if there's an error
      }
    };

    fetchLastDocument();
  }, []);

  // Generate admission number whenever serialNumber changes
  useEffect(() => {
    if (serialNumber) {
      const newAdmissionNumber = generateAdmissionNumber();
      setAdmissionNumber(newAdmissionNumber);
    }
  }, [serialNumber]);

  const generateAdmissionNumber = () => {
    const prefix = "NCS";
    const year = new Date().getFullYear();
    const formattedSerialNo = String(serialNumber).padStart(3, "0"); // Format the serial number with leading zeros

    return `${prefix}${year}${formattedSerialNo}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const studentData = {
        serialNumber: serialNumber,
        admission_no: admissionNumber,
        class: selectedClass,
        section: selectedSection,
        student_name: studentFullName,
        student_phone_no: studentPhoneNo,
        student_email: studentEmail,
        sex: sex,
        date_of_birth: dateOfBirth,
        stud_aadhaar_no: studentAadhaarNo,
        identification_marks: identificationMarks,
        mother_name: motherName,
        father_name: fatherName,
        father_qualification: fatherQualification,
        father_occupation: fatherOccupation,
        annual_income: annualIncome,
        parent_contact_no: parentContactNo,
        guardian_contact_no: guardianContactNo,
        address: careOf,
        village: village,
        post: post,
        police_station: policeStation,
        district: district,
        state: selectedState,
        pin_code: pinCode,
      };

      // Upload photo if exists
      if (photo) {
        const uploadedFile = await configService.uploadPhoto(photo);
        studentData.photo = uploadedFile.$id;
      }

      // Create student document
      await configService.createStudent(studentData);

      // Increment serial number for next entry
      setSerialNumber((prevNumber) => prevNumber + 1);
      setAdmissionNumber(generateAdmissionNumber(serialNumber + 1));

      alert("Student registered successfully!");
      setPhoto(null);
    } catch (error) {
      console.error("Error registering student:", error);
      alert("Error registering student. Please try again.");
    }
  };

  const addNewEntry = (e) => {
    e.preventDefault();

    const newAdmissionNumber = generateAdmissionNumber(serialNumber);
    setAdmissionNumber(newAdmissionNumber);

    handleSubmit(e);
  };

  const printForm = () => {
    window.print();
  };

  // Update state when selectedStudent changes
  useEffect(() => {
    if (selectedStudent) {
      setAdmissionNumber(selectedStudent.admission_no || "");
      setSelectedClass(selectedStudent.class || "");
      setSelectedSection(selectedStudent.section || "");
      setStudentFullName(selectedStudent.student_name || "");
      setStudentPhoneNo(selectedStudent.student_phone_no || "");
      setStudentEmail(selectedStudent.student_email || "");
      setSex(selectedStudent.sex || "");
      setDateOfBirth(selectedStudent.date_of_birth || "");
      setStudentAadhaarNo(selectedStudent.stud_aadhaar_no || "");
      setIdentificationMarks(selectedStudent.identification_marks || "");
      setMotherName(selectedStudent.mother_name || "");
      setFatherName(selectedStudent.father_name || "");
      setFatherQualification(selectedStudent.father_qualification || "");
      setFatherOccupation(selectedStudent.father_occupation || "");
      setAnnualIncome(selectedStudent.annual_income || "");
      setParentContactNo(selectedStudent.parent_contact_no || "");
      setGuardianContactNo(selectedStudent.guardian_contact_no || "");
      setCareOf(selectedStudent.address || "");
      setVillage(selectedStudent.village || "");
      setPost(selectedStudent.post || "");
      setPoliceStation(selectedStudent.police_station || "");
      setDistrict(selectedStudent.district || "");
      setSelectedState(selectedStudent.state || "Bihar");
      setPinCode(selectedStudent.pin_code || "");
      // Update other fields as necessary
    }
  }, [selectedStudent]);

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this record?")) {
  //     try {
  //       await configService.deleteStudent(id);
  //       // Refresh the list of students or update state
  //     } catch (error) {
  //       console.error("Error deleting student:", error);
  //     }
  //   }
  // };

  return (
    <>
      <div className="relative">
        <div className="max-w-3xl mx-auto p-4 print:p-0 print:max-w-none">
          {/* School Details Section */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center mb-6 px-4 py-6 bg-gray-50 rounded-lg shadow-lg"
            id="school_details"
          >
            {/* School Logo */}
            <img
              src={SchoolLogo}
              alt="School Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6 rounded-full shadow-lg border-4 border-blue-500 hover:opacity-90 transition-opacity duration-300"
            />

            {/* School Information */}
            <div className="text-center sm:text-left space-y-2">
              <p className="text-left text-sm sm:text-2xl residential">
                Residential
              </p>
              <h1 className="text-3xl sm:text-[55px] font-bold text-gray-800">
                NCS ACADEMY
              </h1>
              <p className="text-base sm:text-lg text-gray-600 tagline">
                (A Competitive School)
              </p>
              <p className="text-sm sm:text-md text-gray-600">
                Address: Near Nirmaan Coaching Classes, Pipra, Bihar - 845416
              </p>
              <p className="text-sm sm:text-md text-gray-600">
                Contact Us: &nbsp;
                <a
                  href="tel:9534656895"
                  className="text-blue-600 hover:underline"
                >
                  9534656895
                </a>
                ,&nbsp;
                <a
                  href="tel:8709728900"
                  className="text-blue-600 hover:underline"
                >
                  8709728900
                </a>
              </p>
            </div>
          </div>

          {/* Form Title */}
          <div className="text-center mb-4 px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-left mb-2 sm:mb-0">
                <span className="text-sm sm:text-lg font-medium">
                  Serial No:
                </span>
                <span className="text-sm sm:text-lg font-semibold ml-2">
                  {serialNumber || ""}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold bg-red-500 text-white inline-block p-2">
                Registration Form
              </h2>

              <div className="text-right mb-2 sm:mb-0">
                <span className="text-sm sm:text-lg font-medium">Date:</span>
                <span className="text-sm sm:text-lg font-semibold ml-2">
                  {getTodayDayAndDate()}
                </span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form
            id="registrationForm"
            onSubmit={handleSubmit}
            className="space-y-6 p-4 sm:p-6 bg-white rounded-lg shadow-md"
          >
            {/* Admission Number, Class, Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 form-group required-field">
                <label
                  htmlFor="adm_no"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admission No.
                </label>
                <input
                  className="form-input mt-1 block w-full"
                  id="adm_no"
                  placeholder=""
                  value={admissionNumber}
                  readOnly
                  required
                />
              </div>
              <div className="flex-1 form-group">
                <label
                  htmlFor="class"
                  className="block text-sm font-medium text-gray-700"
                >
                  Class
                </label>
                <select
                  id="class"
                  className="form-input mt-1 block w-full"
                  value={selectedClass}
                  onChange={handleClassChange}
                >
                  <option value="">Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                </select>
              </div>
              <div className="flex-1 form-group">
                <label
                  htmlFor="section"
                  className="block text-sm font-medium text-gray-700"
                >
                  Section
                </label>
                <select
                  id="section"
                  className="form-input mt-1 block w-full"
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)} // Optionally handle manual changes
                >
                  <option value="">Select Section</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
            </div>

            {/* Student Details */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-4 sm:w-3/4">
                <div className="flex-1 form-group required-field">
                  <label
                    htmlFor="student_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name of the Student
                  </label>
                  <input
                    id="student_name"
                    name="student_name"
                    className="form-input mt-1 block w-full"
                    placeholder="Enter Full Name"
                    value={studentFullName}
                    onChange={(e) => setStudentFullName(e.target.value)}
                    required
                  />
                </div>

                {/* Student Contact Details */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 form-group">
                    <label
                      htmlFor="student_phone_no"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone No.
                    </label>
                    <input
                      id="student_phone_no"
                      name="student_phone_no"
                      className="form-input mt-1 block w-full"
                      placeholder="Enter 10-digit Phone Number"
                      type="tel"
                      maxLength={10}
                      value={studentPhoneNo}
                      onChange={(e) => setStudentPhoneNo(e.target.value)}
                    />
                  </div>

                  <div className="flex-1 form-group required-field">
                    <label
                      htmlFor="student_email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-mail Address
                    </label>
                    <input
                      id="student_email"
                      name="student_email"
                      className="form-input mt-1 block w-full"
                      placeholder="example@example.com"
                      type="email"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="flex flex-col items-center sm:ml-4 form-group">
                <label
                  htmlFor="photo"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Passport Size Photo
                </label>
                <div className="relative w-32 h-32 border border-gray-300 rounded-md overflow-hidden">
                  <input
                    type="file"
                    id="photo"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                  {!photo && (
                    <div className="flex items-center justify-center w-full h-full text-gray-500">
                      Upload Photo
                    </div>
                  )}
                  {photo && (
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Sex, Date of Birth and Aadhaar Number */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Sex */}
              <div className="flex-1 form-group">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sex
                </label>
                <div className="flex space-x-7 sm:space-x-4 mt-1">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="male"
                      name="sex"
                      value="male"
                      className="form-radio text-blue-600"
                      checked={sex === "male"}
                      onChange={(e) => setSex(e.target.value)}
                    />
                    <label
                      htmlFor="male"
                      className="text-sm font-medium text-gray-700"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="female"
                      name="sex"
                      value="female"
                      className="form-radio text-blue-600"
                      checked={sex === "female"}
                      onChange={(e) => setSex(e.target.value)}
                    />
                    <label
                      htmlFor="female"
                      className="text-sm font-medium text-gray-700"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="other"
                      name="sex"
                      value="other"
                      className="form-radio text-blue-600"
                      checked={sex === "other"}
                      onChange={(e) => setSex(e.target.value)}
                    />
                    <label
                      htmlFor="other"
                      className="text-sm font-medium text-gray-700"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
              {/* Date of Birth */}
              <div className="flex-1 form-group required-field">
                <label
                  htmlFor="date_of_birth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  id="date_of_birth"
                  name="date_of_birth"
                  className="form-input mt-1 block w-full"
                  placeholder="Select Date of Birth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
              {/* Aadhaar No */}
              <div className="flex-1 form-group required-field">
                <label
                  htmlFor="stud_aadhaar_no"
                  className="block text-sm font-medium text-gray-700"
                >
                  Aadhaar No
                </label>
                <input
                  id="stud_aadhaar_no"
                  name="stud_aadhaar_no"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter 12-digit Aadhaar Number"
                  type="number"
                  value={studentAadhaarNo}
                  onInput={(e) => {
                    if (e.target.value.length > 12) {
                      e.target.value = e.target.value.slice(0, 12);
                    }
                    setStudentAadhaarNo(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            {/* Identification Marks */}
            <div className="form-group">
              <label
                htmlFor="identification_marks"
                className="block text-sm font-medium text-gray-700"
              >
                Identification Marks
              </label>
              <textarea
                id="identification_marks"
                name="identification_marks"
                className="form-input mt-1 block w-full"
                placeholder="Enter any distinctive marks or features"
                value={identificationMarks}
                onChange={(e) => setIdentificationMarks(e.target.value)}
              />
            </div>

            {/* Parent/Guardian Details */}
            <>
              <div className="form-group required-field">
                <label
                  htmlFor="mother_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mother's Name
                </label>
                <input
                  id="mother_name"
                  name="mother_name"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter Mother's Name"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group required-field">
                <label
                  htmlFor="father_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's Name
                </label>
                <input
                  id="father_name"
                  name="father_name"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter Father's Name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                />
              </div>
            </>

            {/* Father's Qualification and Father's Occupation */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Qualification */}
              <div className="flex-1 form-group">
                <label
                  htmlFor="father_qualification"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's Qualification
                </label>
                <select
                  id="father_qualification"
                  name="father_qualification"
                  className="form-input mt-1 block w-full"
                  value={fatherQualification}
                  onChange={(e) => setFatherQualification(e.target.value)}
                >
                  <option value="Non-matriculation">Non Matriculation</option>
                  <option value="Matriculation">Matriculation</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post-graduation">Post Graduation</option>
                </select>
              </div>

              {/* Occupation */}
              <div className="flex-1 form-group">
                <label
                  htmlFor="father_occupation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's Occupation
                </label>
                <select
                  id="father_occupation"
                  name="father_occupation"
                  className="form-input mt-1 block w-full"
                  value={fatherOccupation}
                  onChange={(e) => setFatherOccupation(e.target.value)}
                >
                  <option value="Businessman">Businessman</option>
                  <option value="Private-job">Private Job</option>
                  <option value="Government-job">Government Job</option>
                  <option value="Self-employed">Self Employed</option>
                  <option value="Farmer">Farmer</option>
                </select>
              </div>
            </div>

            {/* Family Income and Contact Numbers */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 form-group">
                <label
                  htmlFor="annual_income"
                  className="block text-sm font-medium text-gray-700"
                >
                  Family Annual Income
                </label>
                <input
                  id="annual_income"
                  name="annual_income"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter Annual Income (in INR)"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                />
              </div>

              <div className="flex-1 form-group required-field">
                <label
                  htmlFor="parent_contact_no"
                  className="block text-sm font-medium text-gray-700"
                >
                  Parent Contact No (Primary)
                </label>
                <input
                  id="parent_contact_no"
                  name="parent_contact_no"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter Parent's Contact No."
                  type="tel"
                  value={parentContactNo}
                  onChange={(e) => setParentContactNo(e.target.value)}
                  required
                />
              </div>

              <div className="flex-1 form-group">
                <label
                  htmlFor="guardian_contact_no"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guardian Contact No (optional)
                </label>
                <input
                  id="guardian_contact_no"
                  name="guardian_contact_no"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter Guardian's Contact No."
                  type="tel"
                  value={guardianContactNo}
                  onChange={(e) => setGuardianContactNo(e.target.value)}
                />
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-4">
              <div className="form-group">
                <p className="text-sm font-medium text-gray-700">
                  Present Address:
                </p>
                <label
                  htmlFor="careOf"
                  className="block text-sm font-medium text-gray-700"
                >
                  C/o
                </label>
                <input
                  id="careOf"
                  name="careOf"
                  className="form-input mt-1 block w-full"
                  placeholder="e.g., John Doe"
                  value={careOf}
                  onChange={(e) => setCareOf(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="village"
                  className="block text-sm font-medium text-gray-700"
                >
                  Muhalla/Vill.
                </label>
                <input
                  id="village"
                  name="village"
                  className="form-input mt-1 block w-full"
                  placeholder="e.g., Greenfield"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                />
              </div>

              {/* Additional Address Details */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 form-group">
                    <label
                      htmlFor="post"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Post
                    </label>
                    <input
                      id="post"
                      name="post"
                      className="form-input mt-1 block w-full"
                      placeholder="e.g., Main Post Office"
                      value={post}
                      onChange={(e) => setPost(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 form-group">
                    <label
                      htmlFor="police_station"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Police Station
                    </label>
                    <input
                      id="police_station"
                      name="police_station"
                      className="form-input mt-1 block w-full"
                      placeholder="e.g., Police Station"
                      value={policeStation}
                      onChange={(e) => setPoliceStation(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 form-group">
                    <label
                      htmlFor="district"
                      className="block text-sm font-medium text-gray-700"
                    >
                      District
                    </label>
                    <input
                      id="district"
                      name="district"
                      className="form-input mt-1 block w-full"
                      placeholder="e.g., Downtown"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 form-group">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      className="form-input mt-1 block w-full"
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 form-group required-field">
                    <label
                      htmlFor="pin_code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pin Code
                    </label>
                    <input
                      id="pin_code"
                      name="pin_code"
                      className="form-input mt-1 block w-full"
                      placeholder="e.g., 123456"
                      type="number"
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      onInput={(e) => {
                        if (e.target.value.length > 6) {
                          e.target.value = e.target.value.slice(0, 6);
                        }
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Authorised Signatory & Action Buttons */}
            <div className="mt-6 space-y-6">
              {/* Signatures Section */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
                <div className="flex-1 form-group">
                  <p className="text-sm font-medium text-gray-700 mb-10">
                    Student Signature
                  </p>
                  <p className="border-t-2 border-gray-300 pt-2">Date:</p>
                </div>
                <div className="flex-1 form-group">
                  <p className="text-sm font-medium text-gray-700 mb-10">
                    Parent/Guardian Signature
                  </p>
                  <p className="border-t-2 border-gray-300 pt-2">Date:</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                <button
                  type="submit"
                  onClick={addNewEntry}
                  className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add New Entry
                </button>
                <button
                  type="button"
                  onClick={printForm}
                  className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Print
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg justify-center items-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Search Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((student) => (
              <div
                key={student.$id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {student.student_name}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Admission No:</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {student.admission_no}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Aadhaar No:</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {student.stud_aadhaar_no || "N/A"}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Father's No:</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {student.parent_contact_no || "N/A"}
                    </span>
                  </p>
                </div>
                {/* // TODO: Implement the functionality to select the data and update the relevant result in the reg. form */}
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

RegistrationForm.propTypes = {
  searchResults: PropTypes.array.isRequired,
  selectedStudent: PropTypes.object,
};

export default RegistrationForm;
