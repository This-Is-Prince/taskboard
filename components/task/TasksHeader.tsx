import React, { FC } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { TasksHeaderProps } from "../../types/types";
import useGlobalContext from "../../app/context";

const TasksHeader: FC<TasksHeaderProps> = ({ title, _id }) => {
  const {
    appState: { task },
    dispatch,
  } = useGlobalContext()!;
  return (
    <article className="header">
      <span>{title}</span>
      <button
        onClick={() => {
          fetch(`/api/tasks`, {
            method: "DELETE",
            body: `${_id}`,
          }).then(() => {
            dispatch({ type: "DELETE_TASKS", payload: _id });
          });
        }}
        className="btn info-btn"
      >
        <MdDeleteForever />
      </button>
      <div className="add-task">
        <button
          id={`add-task-${_id}`}
          onClick={() => {
            dispatch({
              type: "OPEN_ADD_TASK_MODAL",
              id: _id,
              why: "FOR_ADD",
              payload: { ...task },
            });
          }}
          className="btn"
        >
          <AiFillPlusCircle />
        </button>
        <label htmlFor={`add-task-${_id}`}>Add a task</label>
      </div>
    </article>
  );
};

export default TasksHeader;
