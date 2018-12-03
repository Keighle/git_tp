"use strict";
exports.__esModule = true;
var task = /** @class */ (function () {
    function task(content, date, priority, checked) {
        this.content = content;
        this.checked = checked;
        this.date = date;
        this.priority = priority;
    }
    task.prototype.getcontent = function () {
        return this.content;
    };
    task.prototype.getchecked = function () {
        return this.checked;
    };
    task.prototype.getdate = function () {
        return this.date;
    };
    task.prototype.getpriority = function () {
        return this.priority;
    };
    task.prototype.setcontent = function (content) {
        this.content = content;
    };
    task.prototype.setdate = function (date) {
        this.date = date;
    };
    task.prototype.setpriority = function (priority) {
        this.priority = priority;
    };
    task.prototype.setchecked = function (checked) {
        this.checked = checked;
    };
    task.prototype.add = function (content, date, priority) {
        var id = Math.random() * 58;
        return id;
    };
    task.prototype.update = function (content, date, priority, checked) {
        this.content = content;
        this.checked = checked;
        this.date = date;
        this.priority = priority;
    };
    task.prototype.close = function (checked) {
        return true;
    };
    task.prototype.toString = function (content, date, priority, checked) {
        content = this.content;
        date = this.date;
        priority = this.priority;
        checked = this.checked;
        var tasks = "CONTENU :" + content + "\n\n DATE :" + date + "\n\n PRIORITE :" + priority + "\n\n ETAT :" + checked;
        return tasks;
    };
    return task;
}());
exports.task = task;
