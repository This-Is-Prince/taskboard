import React from "react";
import Task from "./Task";
import TasksHeader from "./TasksHeader";

const Tasks = () => {
  return (
    <section className="tasks">
      <TasksHeader />
      <div className="all-task-wrapper">
        <Task />
        <Task />
      </div>
    </section>
  );
};

export default Tasks;
