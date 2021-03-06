import React, { FC } from "react";
import { TasksProps } from "../../types/types";
import Task from "./Task";
import TasksHeader from "./TasksHeader";

const Tasks: FC<TasksProps> = ({ title, total_completed, all_task, _id }) => {
  return (
    <section className="tasks">
      <TasksHeader _id={_id} title={title} />
      <div className="all-task-wrapper">
        <p className="complete">Completed ({total_completed})</p>
        {all_task.map(({ date, desc, _id: task_id, isCompleted, title }) => {
          return (
            <Task
              date={date}
              desc={desc}
              tasks_id={_id}
              key={task_id}
              title={title}
              task_id={task_id}
              isCompleted={isCompleted}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tasks;
