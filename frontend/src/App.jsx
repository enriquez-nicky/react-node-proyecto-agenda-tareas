import { useEffect,useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {   
  const [tasks,setTasks] = useState([]);
  const [showModal,setShowModal] =  useState([]);

  useEffect(()=>{    
    //fetch("/tasks.json")
    fetch("http://localhost:3011/tasks")
    .then((res) => res.json())
    .then((data) => setTasks(data));
  },[]);

  const handleDeleteTask = (id) =>{
    setTasks((tareas)=>{
      return tareas.filter((task) => task.id !==id);
    });
  }
  const  handleAddTask =async (titulo,descripcion,fecha) => {
    const newTask = {
      id : tasks.length > 0  ? tasks[tasks.length - 1].id + 1 : 1,
      titulo,
      descripcion,
      fecha
    };

    setTasks((tareas)=>[...tareas, newTask]);

    const respuesta = await fetch('http://localhost:3011/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: newTask.titulo,
        descripcion: newTask.descripcion,
        fecha : newTask.fecha
      }),
    });

    setShowModal(false);
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-2xl rounded p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 Agenda Tareas</h1>
      <div className="flex justify-end mb-4">
        <button onClick={()=>setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ➕ Nueva Tarea
        </button>
      </div>      
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      {showModal && (
        <TaskForm onClose={()=>setShowModal(false)} onSave={handleAddTask}/>
      )
      }
   </div>      
  );
}

export default App;