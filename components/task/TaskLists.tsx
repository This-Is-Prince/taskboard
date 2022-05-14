import React from "react";
import AddTaskListModal from "./AddTaskListModal";
import AddTaskModal from "./AddTaskModal";
import Tasks from "./Tasks";

const TaskLists = () => {
  return (
    <>
      <main className="task-lists">
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </main>
      {/* <AddTaskListModal /> */}
      <AddTaskModal />
    </>
  );
};

export default TaskLists;
