import React from 'react';

export const Contacts = () => {
  return (
    <div className="flex flex-col space-y-4 w-full p-4 rounded bg-gray-300 me-5">
      <h1 className=" text-lg font-semibold	">Contact</h1>
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="text"
        placeholder="LinkedIn"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="text"
        placeholder="Twitter"
        className="input input-bordered w-full pl-3 rounded"
      />

      <div className="flex justify-end">
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};
