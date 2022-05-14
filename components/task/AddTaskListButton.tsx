import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import useGlobalContext from "../../app/context";

const AddTaskListButton = () => {
  const { dispatch } = useGlobalContext()!;
  return (
    <button
      onClick={() => {
        dispatch({ type: "OPEN_ADD_TASK_LIST_MODAL", payload: true });
      }}
      className="btn add-task-list-btn"
    >
      <AiFillPlusCircle />
    </button>
  );
};

export default AddTaskListButton;
