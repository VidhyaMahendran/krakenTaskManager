'use strict';

var IndexModel = require('../models/tasksModel');

module.exports = function (app) {

    var model = new IndexModel();

    app.get('/', function (req, res) {
        res.render('index', model);
    });
};
