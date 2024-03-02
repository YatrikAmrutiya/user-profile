import React from "react";

export const BasicInfo = () => {
  return (
    <div className="flex flex-col p-4 space-y-4 rounded bg-gray-300">
        <h1 className=" text-lg font-semibold	">Basic Info</h1>
      <div className="flex items-center space-x-4">
        <img
          src="https://picsum.photos/100"
          alt="User"
          className="w-20 h-20 rounded-full" // Tailwind CSS for round photo
        />
        {/* User Name and ID */}
        <div>
          <div className="text-xl font-semibold">John Doe</div>
          <div className="text-gray-600">UserID: 12345</div>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="flex flex-col space-y-4 w-full">
        {/* Row with two inputs */}
        <div className="flex flex-row space-x-2 w-full">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered flex-1 pl-3 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered flex-1 pl-3 rounded"
          />
        </div>
        <div className="flex flex-row space-x-2 w-full">
          {/* Department Dropdown and Position in separate rows */}
          <select className="select select-bordered w-full  pl-2 rounded">
            <option disabled selected>
              Department
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Design</option>
          </select>
          <input
            type="text"
            placeholder="Position"
            className="input input-bordered w-full pl-3 rounded"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};
