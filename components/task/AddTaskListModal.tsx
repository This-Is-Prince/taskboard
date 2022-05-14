import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddTaskListModal = () => {
  return (
    <section className="add-task-list-modal">
      <form className="form">
        <input type="text" className="input" />
        <button
          onClick={() => {
            console.log("add task list form");
          }}
          className="btn"
        >
          <FaPlusCircle />
        </button>
      </form>
    </section>
  );
};

export default AddTaskListModal;
