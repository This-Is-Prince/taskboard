import { State } from "../types/types";

const state: State = {
  why: "FOR_ADD",
  tasks_id: 0,
  tasks_title: "",
  task: { date: "", desc: "", _id: 0, isCompleted: false, title: "" },
  isAddTaskModalOpen: false,
  isAddTaskListModalOpen: false,
  tasks_list: [],
};
export default state;
