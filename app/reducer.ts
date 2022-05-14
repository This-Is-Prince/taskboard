import { useReducer, Reducer } from "react";
import { Action, State, Tasks } from "../types/types";
import state from "./state";

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "OPEN_ADD_TASK_LIST_MODAL":
      return { ...state, isAddTaskListModalOpen: action.payload };
    case "DELETE_TASKS":
      return {
        ...state,
        task_lists: state.tasks_list.filter(({ id }) => {
          return id !== action.payload;
        }),
      };
    case "TASK_IS_COMPLETED":
      return {
        ...state,
        task_lists: state.tasks_list.map((tasks) => {
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
    default:
      return state;
  }
};

const useGlobalReducer = () => {
  return useReducer(reducer, state);
};
export default useGlobalReducer;
