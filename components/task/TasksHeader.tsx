import React, { FC } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { TasksHeaderProps } from "../../types/types";
import useGlobalContext from "../../app/context";

const TasksHeader: FC<TasksHeaderProps> = ({ title, id }) => {
  const { dispatch } = useGlobalContext()!;
  return (
    <article className="header">
      <span>{title}</span>
      <button
        onClick={() => {
          dispatch({ type: "DELETE_TASKS", payload: id });
        }}
        className="btn info-btn"
      >
        <MdDeleteForever />
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
