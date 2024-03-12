import React from "react";

const List = ({ id, task, deleteTask }) => {
  return (
    <div className="task">
      <div className="text">{task}</div>
      <button
        className="dlt-btn"
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default List;
