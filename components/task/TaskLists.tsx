import React from "react";
import AddTaskListModal from "./AddTaskListModal";
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
    </>
  );
};

export default TaskLists;
