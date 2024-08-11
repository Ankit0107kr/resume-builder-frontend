import React from "react";

const Experiences = ({ formData, setFormData }) => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="exp1_org" className="block text-sm font-medium text-gray-700">
            Enter your first company name you worked for
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp1_org"
            value={formData.exp1_org}
            onChange={(e) => setFormData({ ...formData, exp1_org: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="exp1_pos" className="block text-sm font-medium text-gray-700">
            What was your designation?
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp1_pos"
            value={formData.exp1_pos}
            onChange={(e) => setFormData({ ...formData, exp1_pos: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="exp1_dur" className="block text-sm font-medium text-gray-700">
            How many years you worked there for?
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp1_dur"
            value={formData.exp1_dur}
            onChange={(e) => setFormData({ ...formData, exp1_dur: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="exp1_desc" className="block text-sm font-medium text-gray-700">
            Tell us about your job description
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp1_desc"
            value={formData.exp1_desc}
            onChange={(e) => setFormData({ ...formData, exp1_desc: e.target.value })}
          />
        </div>
        <hr className="md:col-span-2 my-6" />
        <div>
          <label htmlFor="exp2_org" className="block text-sm font-medium text-gray-700">
            Enter your second company name you worked for
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp2_org"
            value={formData.exp2_org}
            onChange={(e) => setFormData({ ...formData, exp2_org: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="exp2_pos" className="block text-sm font-medium text-gray-700">
            What was your designation?
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp2_pos"
            value={formData.exp2_pos}
            onChange={(e) => setFormData({ ...formData, exp2_pos: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="exp2_dur" className="block text-sm font-medium text-gray-700">
            How many years you worked there?
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp2_dur"
            value={formData.exp2_dur}
            onChange={(e) => setFormData({ ...formData, exp2_dur: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="exp2_desc" className="block text-sm font-medium text-gray-700">
            Tell us about your job description
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:bg-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="exp2_desc"
            value={formData.exp2_desc}
            onChange={(e) => setFormData({ ...formData, exp2_desc: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Experiences;
