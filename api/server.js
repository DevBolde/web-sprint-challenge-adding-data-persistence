// build your server here and require it from index.js
const express = require('express')

const server = express()

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
// const taskRouter = require('./task/router')


server.use(express.json()) 
server.use('/api/projects', projectRouter)
server.use('/api/resources',resourceRouter)
// server.use('/api/task',taskRouter)

server.use('*', (req, res, next) => {
    next({status: 404, message: 'server error!'})
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server;