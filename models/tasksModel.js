'use strict';

var tasksModel = function() {
	this.taskName= "";
	this.taskPriority= "";
	this.taskDetails= "";
	this.taskCreated= "";
	this.taskETA= "";
	this.taskStatus= "";
	this.taskId= 0;
};

module.exports = tasksModel;