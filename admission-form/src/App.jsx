/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import SchoolLogo from "./assets/logo.jpg";

const RegistrationForm = () => {
  const [serialNumber, setSerialNumber] = useState(1);

  const addNewEntry = () => {
    // Logic to add a new entry goes here...

    // Increment serial number
    setSerialNumber((prevNumber) => prevNumber + 1);
  };

  const printForm = () => {
    window.print();
  };

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

  return (
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
            <a href="tel:9534656895" className="text-blue-600 hover:underline">
              9534656895
            </a>
            ,&nbsp;
            <a href="tel:8709728900" className="text-blue-600 hover:underline">
              8709728900
            </a>
          </p>
        </div>
      </div>

      {/* Form Title */}
      <div className="text-center mb-4 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-left mb-2 sm:mb-0">
            <span className="text-sm sm:text-lg font-medium">Serial No:</span>
            <span className="text-sm sm:text-lg font-semibold ml-2">
              {serialNumber}
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
      <form className="space-y-6 p-4 sm:p-6 bg-white rounded-lg shadow-md">
        {/* Admission Number, Class, Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="adm_no"
              className="block text-sm font-medium text-gray-700"
            >
              Adm. No.
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="adm_no"
              placeholder=""
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700"
            >
              Class
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="class"
              placeholder=""
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="section"
              className="block text-sm font-medium text-gray-700"
            >
              Section
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="section"
              placeholder=""
            />
          </div>
        </div>

        {/* Student Details */}
        <div>
          <label
            htmlFor="student_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name of the Student
          </label>
          <input
            className="form-input mt-1 block w-full"
            id="student_name"
            placeholder=""
          />
        </div>

        {/* Student Contact Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="stud_phone_no"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No.
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="stud_phone_no"
              placeholder=""
              type="tel"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="stud_email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail Address
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="stud_email"
              placeholder="abc@example.com"
              type="email"
            />
          </div>
        </div>

        {/* Date of Birth and Aadhaar Number */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Sex */}
          <div className="flex-1">
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
                />
                <label
                  htmlFor="female"
                  className="text-sm font-medium text-gray-700"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          {/* DOB */}
          <div className="flex-1">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="dob"
              placeholder=""
              type="date"
            />
          </div>
          {/* Aadhaar No */}
          <div className="flex-1">
            <label
              htmlFor="stud_aadhaar_no"
              className="block text-sm font-medium text-gray-700"
            >
              Aadhaar No
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="stud_aadhaar_no"
              placeholder=""
              type="number"
            />
          </div>
        </div>

        {/* Identification Marks */}
        <div>
          <label
            htmlFor="identification_marks"
            className="block text-sm font-medium text-gray-700"
          >
            Identification Marks
          </label>
          <textarea
            className="form-input mt-1 block w-full"
            id="identification_marks"
            placeholder=""
          />
        </div>

        {/* Parent/Guardian Details */}
        <>
          <div>
            <label
              htmlFor="mother_name"
              className="block text-sm font-medium text-gray-700"
            >
              Mother's Name
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="mother_name"
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="father_name"
              className="block text-sm font-medium text-gray-700"
            >
              Father's Name
            </label>
            <input
              className="form-input mt-1 block w-full"
              id="father_name"
              placeholder=""
            />
          </div>
        </>
        {/* Father's Qualification and Occupation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="father_qualification"
              className="block text-sm font-medium text-gray-700"
            >
              Father's Qualification
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="father_qualification"
              placeholder=""
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="occupation"
              placeholder=""
            />
          </div>
        </div>

        {/* Family Income and Contact Numbers */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="annual_income"
              className="block text-sm font-medium text-gray-700"
            >
              Family Annual Income
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="annual_income"
              placeholder=""
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="parent_contact_no"
              className="block text-sm font-medium text-gray-700"
            >
              Parent Contact No (Primary)
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="parent_contact_no"
              placeholder=""
              type="tel"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="guardian_contact_no"
              className="block text-sm font-medium text-gray-700"
            >
              Guardian Contact No (optional)
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="guardian_contact_no"
              placeholder=""
              type="tel"
            />
          </div>
        </div>

        {/* Address Details */}
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700">
              Present Address:
            </p>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              C/o
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="address"
            />
          </div>
          <div>
            <label
              htmlFor="village"
              className="block text-sm font-medium text-gray-700"
            >
              Muhalla/Vill.
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="village"
              placeholder=""
            />
          </div>

          {/* Additional Address Details */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="post"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post
                </label>
                <input
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  id="post"
                  placeholder=""
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="ps"
                  className="block text-sm font-medium text-gray-700"
                >
                  P.S.
                </label>
                <input
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  id="ps"
                  placeholder=""
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dist.
                </label>
                <input
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  id="district"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  id="state"
                  placeholder=""
                  defaultValue="Bihar"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="pin_code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pin Code
                </label>
                <input
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  id="pin_code"
                  placeholder=""
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Authorised Signatory */}
        <div className="mt-6 space-y-6">
          {/* Signatures Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Student Signature
              </p>
              <p className="border-t-2 border-gray-300 pt-2">Date:</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Parent/Guardian Signature
              </p>
              <p className="border-t-2 border-gray-300 pt-2">Date:</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <button
              type="button"
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
  );
};

export default RegistrationForm;
