import React from "react";
import Task from "./Task";
import TasksHeader from "./TasksHeader";

const Tasks = () => {
  return (
    <section className="tasks">
      <TasksHeader />
      <div className="all-task-wrapper">
        <p className="complete">Completed (1)</p>
        <Task />
        <Task />
      </div>
    </section>
  );
};

export default Tasks;
