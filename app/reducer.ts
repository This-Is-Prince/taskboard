import { useReducer, Reducer } from "react";
import { Action, State, Tasks } from "../types/types";
import state from "./state";

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_TASKS_LIST":
      return { ...state, tasks_list: action.payload };
    case "OPEN_ADD_TASK_LIST_MODAL":
      return { ...state, isAddTaskListModalOpen: action.payload };
    case "DELETE_TASKS":
      return {
        ...state,
        tasks_list: state.tasks_list.filter(({ _id }) => {
          return _id !== action.payload;
        }),
      };
    case "TASK_IS_COMPLETED":
      return {
        ...state,
        tasks_list: state.tasks_list.map((tasks) => {
          const { task_id, tasks_id, value } = action.payload;
          if (tasks._id === tasks_id) {
            const result = tasks.all_task.map((task) => {
              if (task_id === task._id) {
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
      const tasks_list = [...state.tasks_list, action.payload];
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
          if (tasks._id === state.tasks_id) {
            return {
              ...tasks,
              all_task: action.payload,
            };
          } else {
            return { ...tasks };
          }
        }),
        task: { title: "", date: "", desc: "", _id: 0, isCompleted: false },
        tasks_id: 0,
      };
    case "EDIT_TASK":
      return {
        ...state,
        isAddTaskModalOpen: false,
        tasks_list: state.tasks_list.map((tasks) => {
          if (tasks._id === state.tasks_id) {
            return {
              ...tasks,
              all_task: action.payload,
            };
          } else {
            return { ...tasks };
          }
        }),
        task: { title: "", date: "", desc: "", _id: 0, isCompleted: false },
        tasks_id: 0,
      };
    case "DELETE_TASK":
      const { tasks_id, task_id } = action.payload;
      const list: Tasks[] = state.tasks_list.map((tasks) => {
        if (tasks._id === tasks_id) {
          let isCompleted = false;
          const all_task = tasks.all_task.filter((task) => {
            if (task._id === task_id) {
              isCompleted = task.isCompleted;
              return false;
            } else {
              return true;
            }
          });
          return {
            ...tasks,
            all_task,
            total_completed: isCompleted
              ? tasks.total_completed - 1
              : tasks.total_completed,
          };
        } else {
          return { ...tasks };
        }
      });
      return { ...state, tasks_list: list };
    case "OPEN_ADD_TASK_MODAL":
      return {
        ...state,
        why: action.why,
        tasks_id: action.id,
        task: action.payload,
        isAddTaskModalOpen: true,
      };
    case "CLOSE_ADD_TASK_MODAL":
      return {
        ...state,
        isAddTaskModalOpen: false,
        tasks_id: 0,
        why: "FOR_ADD",
        task: { date: "", desc: "", _id: 0, isCompleted: false, title: "" },
      };

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
