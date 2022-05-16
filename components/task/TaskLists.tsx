import React from "react";
import useGlobalContext from "../../app/context";
import AddTaskListModal from "./AddTaskListModal";
import AddTaskModal from "./AddTaskModal";
import Tasks from "./Tasks";

const TaskLists = () => {
  const {
    appState: { isAddTaskListModalOpen, tasks_list, isAddTaskModalOpen },
    dispatch,
  } = useGlobalContext()!;
  return (
    <>
      <main className="task-lists">
        {tasks_list.map(({ all_task, title, total_completed, _id }) => {
          return (
            <Tasks
              _id={_id}
              key={_id}
              title={title}
              all_task={all_task}
              total_completed={total_completed}
            />
          );
        })}
      </main>
      {isAddTaskListModalOpen && <AddTaskListModal />}
      {isAddTaskModalOpen && <AddTaskModal />}
    </>
  );
};

export default TaskLists;
