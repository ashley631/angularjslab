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

    vm.addTask = (taskToAdd)  => {
     vm.tasks.push(angular.copy({task: taskToAdd, completed: false}));
    
}

     vm.removeTask = (index) => {
         vm.tasks.splice(index, 1)

}

}

angular
.module("ToDoApp")
.controller("TodoController", TodoController);

