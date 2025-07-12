import React, { useState } from 'react';

const TaskForm = ({ onClose, onSave }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    onSave(taskText);
    setTaskText('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Agregar Nueva Tarea</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Escribe la tarea..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
