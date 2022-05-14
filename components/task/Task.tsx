import React, { useState } from "react";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Task = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(`3rd july, 2020`);
  const [desc, setDesc] =
    useState(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas
          dignissimos perferendis architecto natus possimus repellendus
          deserunt, blanditiis optio? Modi?`);

  return (
    <article className="task">
      <button
        onClick={() => {
          setIsChecked((prevIsChecked) => !prevIsChecked);
        }}
        className={`btn task-complete-btn ${isChecked && "complete"}`}
      >
        {isChecked ? <BsCheckCircle /> : <BsCircle />}
      </button>
      <div className="task-header">
        <span className={`task-name ${isChecked && "complete"}`}>
          Campus build
        </span>
        {isChecked ? (
          <button className="btn task-delete-btn">
            <MdDeleteForever />
          </button>
        ) : (
          <button className="btn task-edit-btn">
            <FaEdit />
          </button>
        )}
      </div>
      {desc === "" && date === "" ? (
        ""
      ) : (
        <div className="task-info">
          {desc !== "" && <p className="task-desc">{desc}</p>}
          {date !== "" && <span className="task-date">{date}</span>}
        </div>
      )}
    </article>
  );
};

export default Task;
