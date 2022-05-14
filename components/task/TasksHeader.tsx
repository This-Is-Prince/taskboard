import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";
const TasksHeader = () => {
  return (
    <article className="tasks-header">
      <span>My Tasks</span>
      <button className="btn tasks-info-btn">
        <HiDotsVertical />
      </button>
      <div className="add-a-task">
        <button
          id="add-task"
          onClick={() => {
            console.log("HI");
          }}
          className="btn add-task-btn"
        >
          <FaPlusCircle />
        </button>
        <label htmlFor="add-task">Add a task</label>
      </div>
    </article>
  );
};

export default TasksHeader;
