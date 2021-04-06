import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  tasks: [
    {
      id: 1,
      name: "Enoyer un Email",
      description: "a toute l equipe",
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task
    });
  }

  function editTask(task) {
    dispatch({
      type: "EDIT_TASK",
      payload: task
    });
  }

  function removeTask(id) {
    dispatch({
      type: "REMOVE_TASK",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        editTask,
        removeTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};