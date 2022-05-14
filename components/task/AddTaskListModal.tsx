import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiDelete } from "react-icons/fi";
import useGlobalContext from "../../app/context";

const AddTaskListModal = () => {
  const {
    appState: { isAddTaskListModalOpen },
    dispatch,
  } = useGlobalContext()!;
  const [value, setValue] = useState("");
  return (
    <section className="add-task-list-modal">
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="New list"
        />
        <button
          onClick={() => {
            setValue("");
          }}
          className="btn"
        >
          <FiDelete />
        </button>
        <button
          onClick={() => {
            console.log("add task list form");
          }}
          className="btn"
        >
          <AiFillPlusCircle />
        </button>
        <button
          onClick={() => {
            dispatch({ type: "OPEN_ADD_TASK_LIST_MODAL", payload: false });
          }}
          className="btn close-btn"
        >
          <IoMdClose />
        </button>
      </div>
    </section>
  );
};

export default AddTaskListModal;
