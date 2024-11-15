import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[300px] text-center">
        <h2 className="text-2xl font-semibold text-gray-700">{message}</h2>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
