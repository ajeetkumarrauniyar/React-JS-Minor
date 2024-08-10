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

  return (
    <div className="max-w-3xl mx-auto p-4 print:p-0 print:max-w-none">
      {/* School Details Section */}
      <div
        className="flex items-center justify-center mb-6 px-4 py-6 bg-gray-50 rounded-lg shadow-lg"
        id="school_details"
      >
        {/* School Logo */}
        <img
          src={SchoolLogo}
          alt="School Logo"
          className="w-32 h-32 mr-6 rounded-full shadow-lg border-4 border-blue-500 hover:opacity-90 transition-opacity duration-300"
        />

        {/* School Information */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">NCS ACADEMY</h1>
          <p className="text-lg text-gray-600">
            A Branch of C.S. International School, Pipra
          </p>
          <p className="text-md text-gray-500">
            (An English Medium Co-Educational School)
          </p>
          <p className="text-md text-gray-600">
            Address: Near Pani Tanki, Balua Bazar, Katahan
          </p>
          <p className="text-md text-gray-600">
            Contact Us:{" "}
            <a href="tel:9835795591" className="text-blue-600 hover:underline">
              9835795591
            </a>
            ,{" "}
            <a href="tel:8709728900" className="text-blue-600 hover:underline">
              8709728900
            </a>
          </p>
        </div>
      </div>

      {/* Form Title */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <span className="text-lg font-medium">Serial No:</span>
            <span className="text-lg font-semibold ml-2">{serialNumber}</span>
          </div>

          <h2 className="text-xl font-semibold bg-red-500 text-white inline-block p-2">
            Registration Form
          </h2>

          <div className="text-right">
            <span className="text-lg font-medium">Date:</span>
            <span className="text-lg font-semibold ml-2">August 10, 2024</span>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <form className="space-y-6 p-6 bg-white rounded-lg shadow-md">
        {/* Admission Number, Class, Section */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <label
              htmlFor="adm_no"
              className="block text-sm font-medium text-gray-700"
            >
              Adm. No.
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="student_name"
            placeholder=""
          />
        </div>

        {/* Student Contact Details */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <label
              htmlFor="stud_phone_no"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No.
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="stud_email"
              placeholder=""
              type="email"
            />
          </div>
        </div>

        {/* Date of Birth and Aadhaar Number */}
        <div className="flex flex-wrap gap-4">
          {/* Sex */}
          {/* Gender Selection */}
          <div className="flex-1">
            <label
              htmlFor="sex"
              className="block text-sm font-medium text-gray-700"
            >
              Sex
            </label>
            <div className="flex space-x-4 mt-1">
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
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="identification_marks"
            placeholder=""
          />
        </div>

        {/* Parent/Guardian Details */}
        <div>
          <label
            htmlFor="mother_name"
            className="block text-sm font-medium text-gray-700"
          >
            Mother's Name
          </label>
          <input
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="father_name"
            placeholder=""
          />
        </div>

        {/* Father's Qualification and Occupation */}
        <div className="flex flex-wrap gap-4">
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

        {/* Family Income */}
        <div className="flex flex-wrap gap-4">
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

          {/* Parent/Guardian Contact Number */}
          <div className="flex-1">
            <label
              htmlFor="parent_contact_no"
              className="block text-sm font-medium text-gray-700"
            >
              Parent/Guardian Contact No.
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="parent_contact_no"
              placeholder=""
              type="tel"
            />
          </div>
        </div>
        {/* Address Details */}
        <div>
          <p className="text-sm font-medium text-gray-700">Present Address:</p>
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
        <div className="flex flex-wrap gap-4">
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
        <div className="flex flex-wrap gap-4">
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

        {/* Authorised Signatory */}
        <div className="flex justify-between items-center mt-6 gap-8">
          <div className="flex-1 ">
            <p className="text-sm font-medium text-gray-700 mb-14">
              Student Signature
            </p>
            <p className="border-t-2 border-gray-300 pt-2">Date:</p>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700 mb-14">
              Parent/Guardian Signature
            </p>
            <p className="border-t-2 border-gray-300 pt-2">Date:</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={addNewEntry}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add New Entry
          </button>
          <button
            type="button"
            onClick={printForm}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Print
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
