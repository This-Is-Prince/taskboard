import React from "react";
import { BsClipboardPlus, BsClipboardMinus } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import { AiFillPlusCircle } from "react-icons/ai";
import useGlobalContext from "../../app/context";

const AddTaskModal = () => {
  const {
    appState: {
      why,
      task: { date, desc, title },
    },
    dispatch,
  } = useGlobalContext()!;

  return (
    <section className="add-task-modal">
      <div>
        <article className="header">
          <span>
            {why === "FOR_ADD" ? <BsClipboardPlus /> : <BsClipboardMinus />}
          </span>
          <button
            onClick={() => {
              dispatch({ type: "CLOSE_ADD_TASK_MODAL" });
            }}
            className="btn close"
          >
            <IoMdClose />
          </button>
        </article>
        <input
          type="text"
          placeholder="Add name"
          value={title}
          onChange={(e) => {
            dispatch({
              type: "SET_TASK",
              payload: { type: "NAME", value: e.target.value },
            });
          }}
          className="task-name"
        />
        <textarea
          name=""
          id=""
          placeholder="Add details"
          value={desc}
          onChange={(e) => {
            dispatch({
              type: "SET_TASK",
              payload: { type: "DESC", value: e.target.value },
            });
          }}
          className="task-desc"
        ></textarea>
        <input
          type="date"
          className="date"
          value={date}
          onChange={(e) => {
            dispatch({
              type: "SET_TASK",
              payload: { type: "DATE", value: e.target.value },
            });
          }}
          name=""
        />
        <article>
          <button
            onClick={() => {
              if (why === "FOR_ADD") {
                dispatch({ type: "ADD_TASK" });
              } else {
                dispatch({ type: "EDIT_TASK" });
              }
            }}
            className="btn add"
          >
            {why === "FOR_ADD" ? <AiFillPlusCircle /> : <ImCheckmark />}
          </button>
        </article>
      </div>
    </section>
  );
};

export default AddTaskModal;
