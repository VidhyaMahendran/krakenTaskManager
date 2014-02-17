taskManager.listTasks = {
    init: function() {
        this.listingofTasks();
    },
    listingofTasks: function() {
        var currentTaskArray = taskManager.displayItems.getSavedTasks();
        var tasks = JSON.parse(currentTaskArray);
        console.log("task length: " + tasks.length);
        var taskCount = tasks.length;
        if (taskCount == 0) {
            taskManager.utils.getElem("noTasks").className = "";
        } else {
            taskManager.utils.getElem("noTasks").className = "hide";
            var tasksItems = "<ul class='tasksList'>";
            for(var i = 0; i < tasks.length; i++) {
                tasksItems += "<li class='tasksDisp'>";
                var taskRecordObj = JSON.parse(tasks.tasksList[i]);
                for (var key in taskRecordObj) {
                    if (key === "task_id") {
                        // Commenting Edit and Delete operations as of now.
                        //var tasksEditDelItems = "<p class='clearFloat'><span class='editDelTask'><span class='editTask'><a href='editTasks/" + i + "' id='edit" + i + "'>Edit</a></span><span class='delTask'><a href='#' id='delete" + i + "' onclick='deleteTask(" + i + ");' onmouseover='showWarningDeleteTask(" + i + ");' onmouseout='hideWarningDeleteTask(" + i + ");'>Delete</a><span class='delTaskWarn hide'>Deletion of this task can not be undone. Please make sure before you delete.</span</span></span></p>";
                        var tasksEditDelItems = '';
                        continue;
                    }
                    var keyLbl = key.replace('_', ' ');
                    tasksItems += "<p><span class='taskLabel'>" + keyLbl + ": </span><span class='taskContent'>" + taskRecordObj[key] + "</span></p>";
                }
                tasksItems += tasksEditDelItems + "</li>";
            }
            tasksItems += "</ul>";
            taskManager.utils.getElem("listTasks").innerHTML = tasksItems;
        }
    }
};

window.onload = function() {
    taskManager.listTasks.init();
};