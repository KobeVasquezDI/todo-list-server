const express = require("express")
const app = express()
const todoRouter = require("./route-folder/todo.router")
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware")
// middleware
app.use(express.json())
// routes
app.use("/api/todos", todoRouter)

//error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;