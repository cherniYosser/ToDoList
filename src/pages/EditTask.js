import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { ToDoListContext } from "../context/toDoList";

export const EditTask = (route) => {
  let history = useHistory();

  const { toDoList, setToDoList } = useContext(ToDoListContext);

  const [selectedTask, setSelectedTask] = useState({
    id: null,
    name: "",
    description: "",
    status : ""
  });

  const currentTaskId = route.match.params.id;

  useEffect(() => {
    const selectedTask = toDoList.find(
      (currentTaskItem) => currentTaskItem.id === parseInt(currentTaskId)
    );
    setSelectedTask(selectedTask);
  }, [currentTaskId, toDoList]);

  const editTask = () => {
    const objIndex = toDoList.findIndex((obj) => obj.id == selectedTask.id);
    toDoList[objIndex].name = selectedTask.name;
    toDoList[objIndex].description = selectedTask.description;
    toDoList[objIndex].status = selectedTask.status;
    setToDoList(toDoList);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    editTask();

    history.push("/tasks");
  };

  const handleOnChange = (taskKey, newValue) => {
    setSelectedTask({ ...selectedTask, [taskKey]: newValue });


  }

  if (!selectedTask || !selectedTask.id) {
    return <div>Invalid Task ID.</div>;
  }

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedTask.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description de la tâche
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedTask.description}
              onChange={(e) => handleOnChange("description", e.target.value)}
              type="text"
            />
          </div>


          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Status
            </label>

            <label class="inline-flex items-center">
            <input type="radio" class="form-radio"  value="Non Completed"
             checked={selectedTask.status === "Non Completed" ? "Non Completed" : ""}
              onChange={(e) => handleOnChange("status", e.target.value)}/>
            <span class="ml-2">Non Completée</span>
            </label>

            <label class="inline-flex items-center ml-6">
            <input type="radio" class="form-radio"  value="Completed" checked={selectedTask.status === "Completed" ? "Completed" : ""}
              onChange={(e) => handleOnChange("status", e.target.value)}/>
            <span class="ml-2">Completée</span>
          </label>

           
           
          </div>

          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Modifier la tâche
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
