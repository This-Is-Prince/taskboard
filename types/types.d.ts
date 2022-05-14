import { Dispatch } from "react";

interface Tasks {
  title: string;
  all_task: Task[];
  id: string | number;
  total_completed: number;
}

interface Task {
  date: Date;
  desc: string;
  title: string;
  id: string | number;
  isCompleted: boolean;
}

interface TasksHeaderProps {
  title: string;
  id: string | number;
}

interface TasksProps {
  title: string;
  all_task: Task[];
  id: string | number;
  total_completed: number;
}

interface TaskProps {
  date: Date;
  desc: string;
  title: string;
  isCompleted: boolean;
  task_id: string | number;
  tasks_id: string | number;
}

interface State {
  tasks_list: Tasks[];
  tasks_title: string;
  isAddTaskListModalOpen: boolean;
}

type Action =
  | {
      type: "OPEN_ADD_TASK_LIST_MODAL";
      payload: boolean;
    }
  | { type: "DELETE_TASKS"; payload: string | number }
  | {
      type: "TASK_IS_COMPLETED";
      payload: {
        value: boolean;
        task_id: string | number;
        tasks_id: string | number;
      };
    }
  | { type: "ADD_TASKS_TITLE"; payload: string }
  | { type: "ADD_TASKS" };

interface ContextProps {
  appState: State;
  dispatch: Dispatch<Action>;
}

export {
  Task,
  Tasks,
  State,
  Action,
  TaskProps,
  TasksProps,
  ContextProps,
  TasksHeaderProps,
};
