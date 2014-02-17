'use strict';

var listTasksModel = require('../models/tasksModel');

module.exports = function (app) {

    var model = new listTasksModel();


    app.get('/listTasks', function (req, res) {
        
        res.render('listTasks', model);
        
    });

};
