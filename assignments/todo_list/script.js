// const newTodoInput = document.querySelector('input');
// const addTodoButtom = document.querySelector('button');
// const todolist = document.querySelector('div.todos');
// let count = 0;
// addTodoButtom.onclick = function(){
//     let input = newTodoInput.value;
//     if (input.length === 0){
//         alert("Please Enter a Task");
//     }
//     else{
//         let p = document.createElement('p')
//         p.setAttribute("key", count)
//         p.innerHTML = input
//         todolist.appendChild(p)
//         newTodoInput.value=""
//         document.querySelector(`p[key = "${count}"]`).addEventListener("click",myfunction);
//         function myfunction(){
//             todolist.removeChild(this)
//         }
//         count++
//     }
// }

const compBtn = document.querySelector('button#comp');
const pendBtn = document.querySelector('button#pend');
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    let output='';
    compBtn.onclick = function(){
    data.forEach(function(todo,index) {
        if (todo.completed == true){
        output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
}})
    document.querySelector('.todos').innerHTML=output;
    }
    pendBtn.onclick = function(){
        data.forEach(function(todo,index) {
 if (todo.completed == false){
            output+=`<p key=${todo.id}>
                    ${todo.title}
                    </p>`
    }})
        document.querySelector('.todos').innerHTML=output;
        }
}
    fetchtodo();