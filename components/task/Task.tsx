import React, { FC } from "react";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useGlobalContext from "../../app/context";
import { TaskProps } from "../../types/types";

const Task: FC<TaskProps> = ({
  date,
  desc,
  isCompleted,
  title,
  task_id,
  tasks_id,
}) => {
  const { dispatch } = useGlobalContext()!;
  return (
    <article className="task">
      <button
        onClick={() => {
          dispatch({
            type: "TASK_IS_COMPLETED",
            payload: { task_id, tasks_id, value: !isCompleted },
          });
        }}
        className={`btn complete-btn ${isCompleted && "complete"}`}
      >
        {isCompleted ? <BsCheckCircle /> : <BsCircle />}
      </button>
      <div className="header">
        <span className={`name ${isCompleted && "complete"}`}>{title}</span>
        {isCompleted ? (
          <button className="btn delete-btn">
            <MdDeleteForever />
          </button>
        ) : (
          <button className="btn edit-btn">
            <FaEdit />
          </button>
        )}
      </div>
      {desc === "" && date === "" ? (
        ""
      ) : (
        <div className="info">
          {desc !== "" && <p className="desc">{desc}</p>}
          {date !== "" && <span className="date">{date}</span>}
        </div>
      )}
    </article>
  );
};

export default Task;
