import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";

const TasksHeader = () => {
  return (
    <article className="header">
      <span>My Tasks</span>
      <button className="btn info-btn">
        <HiDotsVertical />
      </button>
      <div className="add-task">
        <button
          id="add-task"
          onClick={() => {
            console.log("HI");
          }}
          className="btn"
        >
          <AiFillPlusCircle />
        </button>
        <label htmlFor="add-task">Add a task</label>
      </div>
    </article>
  );
};

export default TasksHeader;
