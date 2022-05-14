import { State } from "../types/types";

const state: State = {
  why: "FOR_ADD",
  tasks_id: 0,
  tasks_title: "",
  task: { date: "", desc: "", id: 0, isCompleted: false, title: "" },
  isAddTaskModalOpen: false,
  isAddTaskListModalOpen: false,
  tasks_list: [
    {
      id: 0,
      title: "My Tasks 1",
      total_completed: 0,
      all_task: [
        {
          id: 0,
          date: "",
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
        {
          id: 1,
          date: "",
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
      ],
    },
    {
      id: 1,
      title: "My Tasks 2",
      total_completed: 0,
      all_task: [
        {
          id: 0,
          date: "",
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
        {
          id: 1,
          date: "",
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
      ],
    },
    {
      id: 2,
      title: "My Tasks 3",
      total_completed: 0,
      all_task: [
        {
          id: 0,
          date: "",
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
        {
          id: 1,
          date: "",
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
      ],
    },
  ],
};
export default state;
