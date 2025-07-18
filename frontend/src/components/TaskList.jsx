import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No hay tareas registradas.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded shadow-sm"
        >
          <h2>{task.titulo}</h2><br/>
          <span>{task.descripcion}</span><br/>
          <span>{task.fecha}</span>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800"
            title="Eliminar tarea"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
