import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="col-span-1">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="github" className="block text-gray-700 text-sm font-bold mb-2">
            Github
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="github"
            placeholder="https://github/YOURUSERNAME"
            value={formData.github}
            onChange={(e) => {
              setFormData({ ...formData, github: e.target.value });
            }}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="LinkedIn" className="block text-gray-700 text-sm font-bold mb-2">
            LinkedIn
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="LinkedIn"
            placeholder="https://linkedIn/YOURUSERNAME"
            value={formData.linkedin}
            onChange={(e) => {
              setFormData({ ...formData, linkedin: e.target.value });
            }}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="Skills" className="block text-gray-700 text-sm font-bold mb-2">
            Skills
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="Skills"
            placeholder="Enter skills and separate each of them with a comma"
            value={formData.skills}
            onChange={(e) => {
              setFormData({ ...formData, skills: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
