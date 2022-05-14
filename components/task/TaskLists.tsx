import React from "react";
import useGlobalContext from "../../app/context";
import AddTaskListModal from "./AddTaskListModal";
import AddTaskModal from "./AddTaskModal";
import Tasks from "./Tasks";

const TaskLists = () => {
  const {
    appState: { isAddTaskListModalOpen, task_lists },
    dispatch,
  } = useGlobalContext()!;
  return (
    <>
      <main className="task-lists">
        {task_lists.map(({ all_task, title, total_completed, id }) => {
          return (
            <Tasks
              id={id}
              key={id}
              title={title}
              all_task={all_task}
              total_completed={total_completed}
            />
          );
        })}
      </main>
      {isAddTaskListModalOpen && <AddTaskListModal />}
      {/* <AddTaskModal /> */}
    </>
  );
};

export default TaskLists;
