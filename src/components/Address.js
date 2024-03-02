import React from 'react';

export const Address = () => {
  return (
    <div className="flex flex-col space-y-4 w-full p-4 rounded bg-gray-300">
      <h1 className=" text-lg font-semibold	">Address</h1>
      <input
        type="text"
        placeholder="Street"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="text"
        placeholder="City"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="text"
        placeholder="State"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="text"
        placeholder="Postal Code"
        className="input input-bordered w-full pl-3 rounded"
      />
      <input
        type="text"
        placeholder="Country"
        className="input input-bordered w-full pl-3 rounded"
      />

      <div className="flex justify-end">
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};
