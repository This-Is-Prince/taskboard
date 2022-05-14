import { useReducer, Reducer } from "react";
import { Action, State, Task, Tasks } from "../types/types";
import state from "./state";

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "OPEN_ADD_TASK_LIST_MODAL":
      return { ...state, isAddTaskListModalOpen: action.payload };
    case "DELETE_TASKS":
      return {
        ...state,
        tasks_list: state.tasks_list.filter(({ id }) => {
          return id !== action.payload;
        }),
      };
    case "TASK_IS_COMPLETED":
      return {
        ...state,
        tasks_list: state.tasks_list.map((tasks) => {
          const { task_id, tasks_id, value } = action.payload;
          if (tasks.id === tasks_id) {
            const result = tasks.all_task.map((task) => {
              if (task_id === task.id) {
                return { ...task, isCompleted: value };
              } else {
                return { ...task };
              }
            });
            if (value) {
              return {
                ...tasks,
                total_completed: tasks.total_completed + 1,
                all_task: result,
              };
            } else {
              return {
                ...tasks,
                total_completed:
                  tasks.total_completed <= 0 ? 0 : tasks.total_completed - 1,
                all_task: result,
              };
            }
          } else {
            return { ...tasks };
          }
        }),
      };
    case "ADD_TASKS_TITLE":
      return { ...state, tasks_title: action.payload };
    case "ADD_TASKS":
      const tasks_list: Tasks[] = [
        ...state.tasks_list,
        {
          all_task: [],
          total_completed: 0,
          title: state.tasks_title,
          id: state.tasks_list.length,
        },
      ];
      return {
        ...state,
        tasks_list,
        tasks_title: "",
        isAddTaskListModalOpen: false,
      };
    case "ADD_TASK":
      return {
        ...state,
        isAddTaskModalOpen: false,
        tasks_list: state.tasks_list.map((tasks) => {
          if (tasks.id === state.tasks_id) {
            return {
              ...tasks,
              all_task: [
                ...tasks.all_task,
                { ...state.task, id: tasks.all_task.length },
              ],
            };
          } else {
            return { ...tasks };
          }
        }),
        task: { title: "", date: "", desc: "", id: 0, isCompleted: false },
        tasks_id: 0,
      };
    case "OPEN_ADD_TASK_MODAL":
      return { ...state, isAddTaskModalOpen: true, tasks_id: action.payload };

    case "SET_TASK":
      const { type, value } = action.payload;
      switch (type) {
        case "NAME":
          return { ...state, task: { ...state.task, title: value } };
        case "DESC":
          return { ...state, task: { ...state.task, desc: value } };
        case "DATE":
          return { ...state, task: { ...state.task, date: value } };
        case "COMPLETED":
          return { ...state, task: { ...state.task, isCompleted: value } };
        default:
          return { ...state };
      }
    default:
      return state;
  }
};

const useGlobalReducer = () => {
  return useReducer(reducer, state);
};
export default useGlobalReducer;
