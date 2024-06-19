import { Router } from "express";
import { verifyJwt } from "../middlewares/Auth.middleware.js";
import { createTodo,updateTodo,deleteTodo } from "../Controllers/todo.controller.js";

const router = Router()

router.route("/newTodo").post(verifyJwt,createTodo)
router.route("/updateTodo/:id").post(verifyJwt,updateTodo)
router.route("/deleteTodo/:id").post(verifyJwt,deleteTodo)


export default router