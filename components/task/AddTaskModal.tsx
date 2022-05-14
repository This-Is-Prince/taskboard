import React, { useState } from "react";
import { BsClipboardPlus, BsClipboardMinus } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";

const AddTaskModal = () => {
  const [name, setName] = useState("Campus build");
  const [desc, setDesc] = useState("");
  return (
    <section className="add-task-modal">
      <div>
        <article className="header">
          <span>
            <BsClipboardPlus />
          </span>
          <button className="btn close">
            <IoMdClose />
          </button>
        </article>
        <input
          type="text"
          placeholder="Add name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="task-name"
        />
        <textarea
          name=""
          id=""
          placeholder="Add details"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          className="task-desc"
        ></textarea>
        <input
          type="date"
          className="date"
          onChange={(e) => {
            const date = new Date(e.target.value);
          }}
          name=""
        />
        <article>
          <button className="btn add">
            <ImCheckmark />
          </button>
        </article>
      </div>
    </section>
  );
};

export default AddTaskModal;
