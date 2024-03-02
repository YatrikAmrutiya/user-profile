import React from "react";

export const Appointment = () => {
  // Sample data for demonstration
  const appointments = [
    {
      date: "2024-03-05",
      time: "10:00 AM",
      type: "Virtual",
      status: "Confirmed",
    },
    {
      date: "2024-03-08",
      time: "02:00 PM",
      type: "In-Person",
      status: "Pending",
    },
    {
      date: "2024-03-10",
      time: "11:00 AM",
      type: "Virtual",
      status: "Confirmed",
    },
  ];

  return (
    <div className="m-10 p-4 rounded bg-gray-300">
      <h1 className="text-lg font-semibold mb-4">Appointments</h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="border px-4 py-2">{appointment.date}</td>
              <td className="border px-4 py-2">{appointment.time}</td>
              <td className="border px-4 py-2">{appointment.type}</td>
              <td className="border px-4 py-2">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
