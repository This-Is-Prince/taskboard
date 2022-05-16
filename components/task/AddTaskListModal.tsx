import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiDelete } from "react-icons/fi";
import useGlobalContext from "../../app/context";
import { Tasks } from "../../types/types";

const AddTaskListModal = () => {
  const {
    appState: { tasks_title },
    dispatch,
  } = useGlobalContext()!;
  return (
    <section className="add-task-list-modal">
      <div>
        <input
          value={tasks_title}
          onChange={(e) => {
            dispatch({ type: "ADD_TASKS_TITLE", payload: e.target.value });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              fetch(`/api/tasks`, {
                method: "POST",
                body: JSON.stringify({
                  all_task: [],
                  total_completed: 0,
                  title: tasks_title,
                }),
              }).then(async (res) => {
                const tasks: Tasks = await res.json();
                dispatch({ type: "ADD_TASKS", payload: tasks });
              });
            }
          }}
          type="text"
          placeholder="New list"
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TASKS_TITLE", payload: "" });
          }}
          className="btn"
        >
          <FiDelete />
        </button>
        <button
          onClick={() => {
            if (tasks_title) {
              fetch(`/api/tasks`, {
                method: "POST",
                body: JSON.stringify({
                  all_task: [],
                  total_completed: 0,
                  title: tasks_title,
                }),
              }).then(async (res) => {
                const tasks: Tasks = await res.json();
                dispatch({ type: "ADD_TASKS", payload: tasks });
              });
            }
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
