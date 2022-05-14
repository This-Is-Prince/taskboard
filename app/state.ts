import { State } from "../types/types";

const state: State = {
  tasks_title: "",
  isAddTaskListModalOpen: false,
  tasks_list: [
    {
      id: 0,
      title: "My Tasks",
      total_completed: 0,
      all_task: [
        {
          id: 0,
          date: new Date(),
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
        {
          id: 1,
          date: new Date(),
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
      ],
    },
    {
      id: 1,
      title: "My Tasks",
      total_completed: 0,
      all_task: [
        {
          id: 0,
          date: new Date(),
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
        {
          id: 1,
          date: new Date(),
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
      ],
    },
    {
      id: 2,
      title: "My Tasks",
      total_completed: 0,
      all_task: [
        {
          id: 0,
          date: new Date(),
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
        {
          id: 1,
          date: new Date(),
          isCompleted: false,
          title: "Campus build",
          desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quas dignissimos perferendis architecto natus possimus repellendus deserunt, blanditiis optio? Modi?`,
        },
      ],
    },
  ],
};
export default state;
