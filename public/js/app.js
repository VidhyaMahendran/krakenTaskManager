'use strict';

var taskManager = taskManager || {};

taskManager.utils = {
	getElem: function(id){
		return (document.getElementById(id) ? document.getElementById(id) : false);
	}	
}

taskManager.displayItems = {
	init: function () {
		this.checklocalStorageSupport();
		this.getTaskCreatedDate();
        this.generateTaskId();
        this.setPageBasedOnLanguage();
        this.eventHandlers();
	},
    setPageBasedOnLanguage: function() {
        var cookieName = "language", lang;
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++)
        {
            var c = ca[i].trim();
            if (c.indexOf(name)==0)
                lang = c.substring(name.length,c.length);
        }
        console.log("Current Language: " + lang);
        if(lang === "he_IL") {
            document.documentElement.setAttribute("dir", "rtl");
            document.documentElement.setAttribute("lang", "he");
            document.body.className="rtl";
        } else {
            document.documentElement.setAttribute("dir", "ltr");
            //Since we have only English and Hebrew in this App, for all non he_IL, set English.
            document.documentElement.setAttribute("lang", "en");
            document.body.className="ltr";
        }
    },
	checklocalStorageSupport: function() {
		if(window.localStorage) {
			taskManager.utils.getElem("hasLocalStorage").className = "message" + ((window.localStorage) ? "" : " hide");
            taskManager.utils.getElem("task_id").value = window.localStorage.length;
		} else {
			taskManager.utils.getElem("hasNoLocalStorage").className = "message error" + ((window.localStorage) ? "" : " hide");
		}
	},
	getTaskCreatedDate: function () {
		var taskCreatedTime = new Date();
		var taskCreatedDate = taskCreatedTime.getDate() + "/" + (taskCreatedTime.getMonth() + 1) + "/" + taskCreatedTime.getFullYear();
		taskManager.utils.getElem("task_created").value = taskCreatedDate;
	},
    getFormFields: function(formObj) {
        var formFieldName, formFieldValue, formFieldsValObj = {};
        var formFields = formObj.getElementsByClassName("inputControl");
        console.log(formFields);
        var formFieldsLength = formFields.length;
        for(var i = 0; i <= formFieldsLength; i++) {
            formFieldName = formObj[i].name;
            formFieldValue = formObj[i].value;
            formFieldsValObj[formFieldName] = formFieldValue;
        }
        return formFieldsValObj;
    },
    getSavedTasks: function() {
        var tasks = localStorage.getItem("tasks");
        if(tasks == undefined) {
            tasks = {
                length: 0,
                tasksList: []
            };
            tasks = JSON.stringify(tasks);
            console.log("Task in localStorage: " + tasks);
        }
        return tasks;
    },
    generateTaskId: function() {
        var self = taskManager.displayItems;
        var currentTaskArray = self.getSavedTasks();
        var tasks = JSON.parse(currentTaskArray);
        taskManager.utils.getElem("task_id").value = tasks.length;
    },
	eventHandlers: function() {
		var menuTitle = taskManager.utils.getElem("mobileNavLink");
		var menu = taskManager.utils.getElem("topMenu");
        var addTaskForm = taskManager.utils.getElem("form_add_task");
        var self = taskManager.displayItems;

		menuTitle.onclick = function() {
			menu.style.display = (menu.style.display === "block") ? "none" : "block";
		},

        addTaskForm.onsubmit = function(event) {
            console.log("Add tasks submitted");
            var formObj = taskManager.utils.getElem("form_add_task");
            var formFieldsValObj = self.getFormFields(formObj);
            var formFieldsJSON = JSON.stringify(formFieldsValObj);
            console.log(formFieldsJSON);
            var tasks = self.getSavedTasks();
            tasks = JSON.parse(tasks);
            console.log(tasks);
            tasks.tasksList[tasks.tasksList.length] = formFieldsJSON;
            tasks.length++;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            alert("Your task is added successfully");
            event.preventDefault();
        }
	}
};

window.onload = function() {
    console.log(window.localStorage);
    taskManager.displayItems.init();
};

