import connectDB from "../../middleware/mongodb";
import TasksList from "../../models/TasksList";
import { Handler } from "./types";

const handler: Handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const tasks = await TasksList.create(JSON.parse(req.body));
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ msg: error });
      }
      return;
    case "GET":
      try {
        const tasks_list = await TasksList.find({});
        res.status(200).json(tasks_list);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
      }
      return;
    case "DELETE":
      try {
        const task_list = await TasksList.findByIdAndDelete(req.body);
        if (!task_list) {
          return res
            .status(404)
            .json({ msg: `Can not delete task with id ${req.body}` });
        }
        res.status(200).json(task_list);
      } catch (error) {
        res.status(500).json({ msg: error });
      }
      return;
    default:
      res.send("HI");
      return;
  }
};
export default connectDB(handler);
