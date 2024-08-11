import React from "react";

const Education = ({ formData, setFormData }) => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="edu1_school" className="block text-sm font-medium text-gray-700">
            Enter your latest Institute name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu1_school"
            value={formData.edu1_school}
            onChange={(e) => setFormData({ ...formData, edu1_school: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="edu1_year" className="block text-sm font-medium text-gray-700">
            Year of graduation
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu1_year"
            value={formData.edu1_year}
            onChange={(e) => setFormData({ ...formData, edu1_year: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="edu1_qualification" className="block text-sm font-medium text-gray-700">
            Degree you pursued
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu1_qualification"
            value={formData.edu1_qualification}
            onChange={(e) => setFormData({ ...formData, edu1_qualification: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="edu1_desc" className="block text-sm font-medium text-gray-700">
            Enter a short description
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu1_desc"
            value={formData.edu1_desc}
            onChange={(e) => setFormData({ ...formData, edu1_desc: e.target.value })}
          />
        </div>
        <hr className="md:col-span-2 my-6" />
        <div>
          <label htmlFor="edu2_school" className="block text-sm font-medium text-gray-700">
            Enter your Second-latest Institute name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu2_school"
            value={formData.edu2_school}
            onChange={(e) => setFormData({ ...formData, edu2_school: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="edu2_year" className="block text-sm font-medium text-gray-700">
            Year of graduation
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu2_year"
            value={formData.edu2_year}
            onChange={(e) => setFormData({ ...formData, edu2_year: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="edu2_qualification" className="block text-sm font-medium text-gray-700">
            Degree you pursued
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu2_qualification"
            value={formData.edu2_qualification}
            onChange={(e) => setFormData({ ...formData, edu2_qualification: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="edu2_desc" className="block text-sm font-medium text-gray-700">
            Enter a short description
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="edu2_desc"
            value={formData.edu2_desc}
            onChange={(e) => setFormData({ ...formData, edu2_desc: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
