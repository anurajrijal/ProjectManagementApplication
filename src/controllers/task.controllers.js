import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { SubTask } from "../models/subtask.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose, { Mongoose } from "mongoose";
import { AvailableUserRole, UserRolesEnum } from "../utils/constants.js";

const getTasks = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});

const createTask = asyncHandler(async (requestAnimationFrame, res) => {
  const { title, description, assignedTo, status } = req.body;
  const { projectId } = req.params;
  const project = await Project.findById(projectId);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  const files = req.files || [];
  const attachments = files.map((file) => {
    return {
      url: `${process.env.SERVER_URL}/images/${file.originalname}`,
      mimetype: file.mimetype,
      size: file.size,
    };
  });


  const task= await Task.create({
    title,
    description,
    project: new mongoose.Types.ObjectId(projectId),
    assignedTo:assignedTo? new mongoose.Types.ObjectId(assignedTo) : undefined,
    status,
    assignedBy: new mongoose.Types.ObjectId(req.user._id) 
  });
  return res 
  .status(201).json(
    new ApiResponse(201,"Task created successfully")
  )
});
const getTasksById = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});
const updateTasks = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});
const deleteTasks = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});
const createSubTask = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});
const updateSubTask = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});
const deleteSubTask = asyncHandler(async (requestAnimationFrame, res) => {
  //test
});

export {
  getTasks,
  createTask,
  getTasksById,
  updateTasks,
  deleteTasks,
  createSubTask,
  updateSubTask,
  deleteSubTask,
};
