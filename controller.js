"use strict";
function TodoController () {
    const vm = this;
    vm.tasks = [
        {task: "Walk the dog", completed : true},
        {task : "Eat food", completed: false},
        {task : "Complete Laundry", completed: true},
        {task : "Do Dishes", completed: false},
        {task : "Buy Groceries", completed: true},
    

];

    

}




angular
.module("ToDoApp")
.controller("TodoController", TodoController);