import connectDB from "../../middleware/mongodb";
import TasksList from "../../models/TasksList";
import { Handler } from "./types";

const handler: Handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const { tasks_id, task } = JSON.parse(req.body);
        await TasksList.updateOne(
          { _id: tasks_id },
          {
            $push: { all_task: task },
          },
          { upsert: true, new: true, runValidators: true }
        );
        const data = await TasksList.findById(tasks_id);
        res.status(200).json(data.all_task);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
      }
      return;
    case "PUT":
      try {
        const body = JSON.parse(req.body);
        if (body.value !== undefined) {
          const { tasks_id, task_id, value } = body;
          await TasksList.updateOne(
            { _id: tasks_id },
            {
              $set: { "all_task.$[elem].isCompleted": value },
              $inc: { total_completed: value === false ? -1 : 1 },
            },
            { arrayFilters: [{ "elem._id": task_id }] }
          );
          res.status(200).json("success");
        } else {
          const { tasks_id, task_id, task } = JSON.parse(req.body);
          await TasksList.updateOne(
            { _id: tasks_id },
            {
              $set: { "all_task.$[elem]": task },
            },
            { arrayFilters: [{ "elem._id": task_id }] }
          );
          const data = await TasksList.findById(tasks_id);
          res.status(200).json(data.all_task);
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
      }
      return;
    case "DELETE":
      const { task_id, tasks_id, value } = JSON.parse(req.body);
      try {
        await TasksList.findOneAndUpdate(
          { _id: tasks_id },
          {
            $pull: { all_task: { _id: task_id } },
            $inc: { total_completed: value ? -1 : 0 },
          }
        );
        res.status(200).json("success");
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
      }
      return;
    default:
      res.send("HI");
      return;
  }
};
export default connectDB(handler);
