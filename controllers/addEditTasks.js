'use strict';

var addEditTasksModel = require('../models/tasksModel');

module.exports = function (app) {

    var model = new addEditTasksModel();


    app.get('/addEditTasks', function (req, res) {
        
        res.render('addEditTasks', model);
        
    });

};
