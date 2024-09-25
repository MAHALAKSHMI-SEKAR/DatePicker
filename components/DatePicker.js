"use client"; // This makes the component a Client Component

import { useState } from 'react';
import useDateStore from '../lib/store';
import { format } from 'date-fns';

const DatePicker = () => {
  const [date, setDate] = useState('');
  const selectedDates = useDateStore((state) => state.selectedDates);
  const addDate = useDateStore((state) => state.addDate);
  const removeDate = useDateStore((state) => state.removeDate);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAddDate = () => {
    if (date && !selectedDates.includes(date)) {
      addDate(date);
      setDate('');
    }
  };

  const handleRemoveDate = (date) => {
    removeDate(date);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-4">Select Recurring Dates</h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-700 text-white"
          />
          <button
            onClick={handleAddDate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          >
            Add Date
          </button>
        </div>
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-white mb-2">Selected Dates</h3>
          {selectedDates.length > 0 ? (
            <ul>
              {selectedDates.map((d, index) => (
                <li key={index} className="flex justify-between items-center text-gray-300">
                  <span>{format(new Date(d), 'PPP')}</span>
                  <button
                    onClick={() => handleRemoveDate(d)}
                    className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No dates selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
