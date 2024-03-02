import React from "react";

export const Profile = () => {
  return (
    <div className="flex flex-col p-4 space-y-4 rounded bg-gray-300 m-10">
      <h1 className=" text-lg font-semibold	">User Profile</h1>
      <div className="flex items-center space-x-4">
        <img
          src="https://picsum.photos/100"
          alt="User"
          className="w-20 h-20 rounded-full" // Tailwind CSS for round photo
        />
        {/* User Name and ID */}
        <div>
          <div className="text-xl font-semibold">John Doe</div>
          <div className="text-gray-600">Position: 12345</div>
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
              Speciality
            </option>
            <option>Skin</option>
            <option>Eyes</option>
            <option>Gut</option>
          </select>
          <input
            type="text"
            placeholder="Work experience"
            className="input input-bordered w-full pl-3 rounded"
          />
        </div>

        {/* Availability components  */}

        {/* Availability Inputs */}
        {/* Availability Inputs */}
        <div className="flex flex-col space-y-2 w-full">
          <label className="font-semibold">Availability Start</label>
          <div className="flex flex-row space-x-2 w-full">
            <input
              type="date"
              className="input input-bordered w-1/2 pl-3 rounded"
            />
            <input
              type="time"
              className="input input-bordered w-1/2 pl-3 rounded"
            />
          </div>

          <label className="font-semibold">Availability End</label>
          <div className="flex flex-row space-x-2 w-full">
            <input
              type="date"
              className="input input-bordered w-1/2 pl-3 rounded"
            />
            <input
              type="time"
              className="input input-bordered w-1/2 pl-3 rounded"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};
