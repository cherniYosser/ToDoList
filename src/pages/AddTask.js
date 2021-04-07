import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { ToDoListContext } from "../context/toDoList";

export const AddTask = () => {
  let history = useHistory();

  const { toDoList, setToDoList } = useContext(ToDoListContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: toDoList.length + 1,
      name,
      description,
      status : "Non Completed"
    };
    toDoList.push(newTask);
    setToDoList(toDoList);
    history.push("/tasks");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Nom de la tâche
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description de la tâche en ligne
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
          </div>

          

          <div className="flex items-center justify-between">
            <button className="mt-5 bg-blue-400 w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Ajouter la tâche
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/tasks">Retour</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
