import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddTaskListModal = () => {
  return (
    <section className="add-task-list-modal">
      <div>
        <input type="text" placeholder="New list" />
        <button
          onClick={() => {
            console.log("add task list form");
          }}
          className="btn"
        >
          <FaPlusCircle />
        </button>
      </div>
    </section>
  );
};

export default AddTaskListModal;
