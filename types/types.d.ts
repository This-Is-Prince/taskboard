import { Dispatch } from "react";

interface Tasks {
  title: string;
  all_task: Task[];
  _id: string | number;
  total_completed: number;
}

interface Task {
  date: string;
  desc: string;
  title: string;
  _id: string | number;
  isCompleted: boolean;
}

interface TasksHeaderProps {
  title: string;
  _id: string | number;
}

interface TasksProps {
  title: string;
  all_task: Task[];
  _id: string | number;
  total_completed: number;
}

interface TaskProps {
  date: string;
  desc: string;
  title: string;
  isCompleted: boolean;
  task_id: string | number;
  tasks_id: string | number;
}
type Why = "FOR_EDIT" | "FOR_ADD";
interface State {
  why: Why;
  task: Task;
  tasks_list: Tasks[];
  tasks_title: string;
  tasks_id: string | number;
  isAddTaskModalOpen: boolean;
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
  | { type: "ADD_TASKS"; payload: Tasks }
  | { type: "ADD_TASKS_LIST"; payload: Tasks[] }
  | { type: "ADD_TASK"; payload: Task[] }
  | { type: "EDIT_TASK"; payload: Task[] }
  | {
      type: "DELETE_TASK";
      payload: { tasks_id: string | number; task_id: string | number };
    }
  | {
      type: "OPEN_ADD_TASK_MODAL";
      id: string | number;
      payload: Task;
      why: Why;
    }
  | { type: "CLOSE_ADD_TASK_MODAL" }
  | {
      type: "SET_TASK";
      payload:
        | { type: "NAME" | "DESC"; value: string }
        | { type: "DATE"; value: string }
        | { type: "COMPLETED"; value: boolean };
    };

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
