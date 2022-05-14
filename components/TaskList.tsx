import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";

const TaskList = () => {
  return (
    <section className="task-list">
      <article className="task-list-header">
        <span>My Tasks</span>
        <button className="btn task-list-info-btn">
          <HiDotsVertical />
        </button>
      </article>
      <article className="add-a-task">
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
      </article>
    </section>
  );
};

export default TaskList;
