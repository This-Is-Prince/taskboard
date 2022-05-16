import mongoose from "mongoose";

const TasksListSchema = new mongoose.Schema({
  title: {
    trim: true,
    type: String,
    required: [true, "must provide tasks title"],
    minlength: [3, "Tasks title can not be less than 3 characters"],
    maxlength: [20, "Tasks title can not be more than 20 characters"],
  },
  total_completed: { type: Number, default: 0 },
  all_task: [
    {
      date: String,
      desc: {
        type: String,
        maxlength: [
          150,
          "Task description can not be more than 150 characters",
        ],
      },
      title: {
        trim: true,
        type: String,
        required: [true, "must provide task title"],
        minlength: [3, "Task title can not be less than 3 characters"],
        maxlength: [20, "Task title can not be more than 20 characters"],
      },
      isCompleted: { type: Boolean, default: false },
    },
  ],
});

export default mongoose.models.TasksList ||
  mongoose.model("TasksList", TasksListSchema);
