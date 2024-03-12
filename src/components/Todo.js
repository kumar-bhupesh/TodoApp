import React, { useState } from "react";
import List from "./List";

const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() === "") {
      setErrorMessage("Please enter a task");
      return;
    }

    setTaskList((prevTaskList) => [...prevTaskList, taskInput]);
    setTaskInput("");
    setErrorMessage("");
  };

  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((_, index) => index !== id);
    setTaskList(updatedTaskList);
  };

  const clearAll = () => {
    setTaskList([]);
  };

  return (
    <>
      <div className="main-container">
        <div className="todo-container">
          <h1>Todo App</h1>
          <h3 className="error-message">{errorMessage}</h3>
          <div className="add-task">
            <input
              type="text"
              name="taskInput"
              placeholder="Enter Your Task..."
              value={taskInput}
              onChange={handleInputChange}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <div className="task-list">
            {taskList.map((task, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  task={task}
                  deleteTask={deleteTask}
                />
              );
            })}
          </div>
          {taskList.length > 1 && (
            <button className="clear-all-btn" onClick={clearAll}>
              Clear all
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
