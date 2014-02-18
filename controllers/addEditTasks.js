'use strict';

var addEditTasksModel = require('../models/tasksModel');

module.exports = function (app) {

    app.get('/addEditTasks', function (req, res) {
        console.log('GET called');
        var model = {
            tasks: addEditTasksModel
        };
        res.render('addEditTasks', model);
    });

    app.post('/addEditTasks', function (req, res) {

        console.log('POST called');

	    var taskName = req.body.task_name && req.body.task_name.trim();
	    var taskPriority = req.body.task_priority && req.body.task_priority.trim();
	    var taskDetails = req.body.task_details && req.body.task_details.trim();
	    var taskCreated = req.body.task_created && req.body.task_created.trim();
	    var taskETA = req.body.task_eta && req.body.task_eta.trim();
	    var taskStatus = req.body.task_status && req.body.task_status.trim();
	    var taskId = req.body.task_id && req.body.task_id.trim();

        console.log('Collecting the data from the Model');

	    var newTask = new addEditTasksModel();

        newTask.taskName = taskName;
        newTask.taskPriority = taskPriority;
        newTask.taskDetails = taskDetails;
        newTask.taskCreated = taskCreated;
        newTask.taskETA = taskETA;
        newTask.taskStatus = taskStatus;
        newTask.taskId = taskId;

        // 'newTask' model data can be used when we use Database for storing and retrieving. Right now, just printing it, since we use Client side LocalStorage.
        console.log('Task Added:' + newTask);

        res.redirect('/listTasks');
    });

};
