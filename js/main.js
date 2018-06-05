let tekst = document.querySelector('input');
let todosDiv = document.querySelector('.todosDiv');
  
// function licz(){
//     let wynik = tekst.value * 1.23;
//         todosDiv.innerHTML=wynik;
//     if(isNaN(tekst.value)){
//         todosDiv.innerHTML = "Wpisz liczbę!";}
// }
// btn.addEventListener('click',licz);
let todolist = {
    todos : [],
    displayTodos(){ 
        if(this.todos.length === 0){
            todosDiv.innerHTML = 'Your To Do list is empty';
        }
        else{
            console.log("lista:");
            for(let i=0; i < this.todos.length; i++){
                console.log(this.todos[i].todoText);
            if(this.todos[i].completed === true){
                console.log('(x)', this.todos[i].todoText)
            }
            else{
                console.log('',this.todos[i].todoText)
            }
         }
        }   
    },
    addTodo(todoText){
        this.todos.push({
            todoText : todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo(position,todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo(position){
        this.todos.splice(position,1); //atrybuty "splice":index,howmany
        this.displayTodos();
    },
    toggleComplete(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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
        this.displayTodos();
    }
}
//todolist.changeTodo(1,'ferr');
//todolist.deleteTodo(1);
todolist.addTodo('kociak');
todolist.addTodo('doopka');
todolist.addTodo('misiek');
todolist.toggleComplete(2);
//todolist.toggleComplete(1);
//todolist.toggleAll();

// btn.addEventListener('click',function(){
//     todolist.displayTodos();
// })
// toggle.addEventListener('click',function(){
//     todolist.toggleAll();
// })

let handlers = { //zamiast kodu powyzej z addEventLi..wrzucenie do obiektu
    displayTodos: function(){
        todolist.displayTodos();
    },
    toggleAll: function(){
        todolist.toggleAll();
    },
    addTodo: function(){
        let input = document.querySelector('input');
        todolist.addTodo(input.value);
        input.value = "";
    }
}













    


