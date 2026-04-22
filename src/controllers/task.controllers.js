import {User} from "../models/user.models.js"
import{Project} from "../models/project.models.js"
import{Task} from "../models/task.models.js"
import{SubTask} from "../models/subtask.models.js"
import {ApiResponse} from "../utils/api-response.js"
import {ApiError}from "../utils/api-error.js"
import {asyncHandler} from"../utils/async-handler.js"
import mongoose, { Mongoose } from "mongoose"
import { AvailableUserRole, UserRolesEnum } from "../utils/constants.js"



const getTasks = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})

const createTask = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})
const getTasksById = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})
const updateTasks = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})
const deleteTasks = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})
const createSubTask = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})
const updateSubTask = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})
const deleteSubTask = asyncHandler(async(requestAnimationFrame,res)=>{
    //test
})





export{
    getTasks,createTask,getTasksById,updateTasks,deleteTasks,createSubTask,updateSubTask,deleteSubTask
}