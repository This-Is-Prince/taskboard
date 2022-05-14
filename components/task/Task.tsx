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
        className={`btn complete-btn ${isChecked && "complete"}`}
      >
        {isChecked ? <BsCheckCircle /> : <BsCircle />}
      </button>
      <div className="header">
        <span className={`name ${isChecked && "complete"}`}>Campus build</span>
        {isChecked ? (
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
