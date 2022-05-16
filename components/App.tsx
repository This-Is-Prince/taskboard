import React, { useEffect } from "react";
import AddTaskListButton from "../components/task/AddTaskListButton";
import Header from "../components/Header";
import TaskLists from "../components/task/TaskLists";
import useGlobalContext from "../app/context";
import { Tasks } from "../types/types";

const App = () => {
  const { dispatch } = useGlobalContext()!;
  useEffect(() => {
    fetch("/api/tasks")
      .then(async (res) => {
        const data = (await res.json()) as Tasks[];
        dispatch({ type: "ADD_TASKS_LIST", payload: data });
      })
      .catch((err) => {
        console.log("First ERR");
      });
  }, [dispatch]);
  return (
    <>
      <Header />
      <TaskLists />
      <AddTaskListButton />
    </>
  );
};

export default App;
