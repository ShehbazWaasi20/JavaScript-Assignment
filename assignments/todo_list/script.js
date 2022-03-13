count=0
document.getElementById("addTodo").onclick = function(){
    let input =document.querySelector("#todoinput").value;
    //alert("Process executing")
    if (input.length===0){
        alert("please enter something")
    }else{
        document.querySelector(".todos").innerHTML += `
        <p key=${count}>
        <span class="task">
        ${input}
        </span>
        </p>
        `;
        count++;
        let currentTask = document.querySelectorAll('.task');
        for(let i=0; i<currentTask.length; i++){
            currentTask[i].onclick=function(){
                this.parentNode.remove()
            }
        }
    }
}