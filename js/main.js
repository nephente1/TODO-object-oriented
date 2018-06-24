let tekst = document.querySelector('input');
let todosDiv = document.querySelector('.todosDiv');
  

const todolist = {
    todos : [],
    // displayTodos(){ 
    //     if(this.todos.length === 0){
    //         todosDiv.innerHTML = 'Your To Do list is empty';
    //     }
    //     else{
    //         console.log("lista:");
    //         for(let i=0; i < this.todos.length; i++){
    //             console.log(this.todos[i].todoText);
    //         if(this.todos[i].completed === true){
    //             console.log('(x)', this.todos[i].todoText)
    //         }
    //         else{
    //             console.log('',this.todos[i].todoText)
    //         }
    //      }
    //     }   
    // },
    addTodo(todoText){
        this.todos.push({
            todoText : todoText,
            completed: false
        });
        
    },
    changeTodo(position,todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo(position){
        this.todos.splice(position,1); //atrybuty "splice":index,howmany
        
    },
    toggleComplete(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        
    },
    toggleAll(){
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for( let i =0; i <totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
        if(completedTodos === totalTodos){
            for(let i =0; i<totalTodos;i++){
                this.todos[i].completed = false;
            }
        } else {
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }

    }
}
//todolist.changeTodo(1,'ferr');
//todolist.deleteTodo(1);
// todolist.addTodo('kociak');
// todolist.addTodo('doopka');
// todolist.addTodo('misiek');
// todolist.toggleComplete(2);
//todolist.toggleAll();


let handlers = { //zamiast kodu powyzej z addEventLi..wrzucenie do obiektu
    addTodo: function(){
        let input = document.querySelector('input');
        todolist.addTodo(input.value);
        input.value = "";
        view.displayTodos();
    },
    changeTodo: function(){
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value ="";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(){
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value ="";
        view.displayTodos();
    },
    toggleComplete: function(){
        let toggleCompleteInput = document.getElementById('toggleCompleteInput');
        todolist.toggleComplete(toggleCompleteInput.valueAsNumber);
        toggleCompleteInput.value ="";
        view.displayTodos();
    },
    toggleAll: function(){
        todolist.toggleAll();
        view.displayTodos();
    }
}

var view = { //object that is responsible of what user see
    displayTodos: function(){
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';        
        for (let i = 0; i <todolist.todos.length; i++){
            let todoLi = document.createElement('li');
            let todo = todolist.todos[i]; //tablica
            let todoTextWithCompletion = "";

            if(todo.completed === true){
                todoTextWithCompletion = '(x)' + todo.todoText;
            } else {
                todoTextWithCompletion = '( )' + todo.todoText;
            }
            
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};

let arr = ["kicia","pusia","miłka"];

// function showNames(){
//     for(i = 0; i < arr.length; i++){
        
//         document.write(arr[i]);
//     }
// }
// showNames()


arr.map(function(name){
    document.write(name +" .indexOf")
})














    


