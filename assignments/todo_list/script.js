const newTodoInput = document.querySelector('input');
const addTodoButtom = document.querySelector('button');
const todolist = document.querySelector('div.todos');
let count = 0;
addTodoButtom.onclick = function(){
    let input = newTodoInput.value;
    if (input.length === 0){
        alert("Please Enter a Task");
    }
    else{
        let p = document.createElement('p')
        p.setAttribute("key", count)
        p.innerHTML = input
        todolist.appendChild(p)
        newTodoInput.value=""
        document.querySelector(`p[key = "${count}"]`).addEventListener("click",myfunction);
        function myfunction(){
            todolist.removeChild(this)
        }
        count++
    }
}