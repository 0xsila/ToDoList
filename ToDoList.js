var tasks=[]

function getTasksFromStorage(){
tasks=JSON.parse(localStorage.getItem("tasks")) ?? [];

}

getTasksFromStorage();

function storeTasks(){
    let taskString=JSON.stringify(tasks);
    localStorage.setItem("tasks",taskString);
}


function fillTasks(){
    var i=0;
    
    
     document.getElementById("tasks").innerHTML=""
for(var task of tasks)

 { 
    document.getElementById("tasks").innerHTML+=`
                    <div class="task ${task.isdone ? 'task-done':''}">
                        <section class="task-info">
                            <h2>${task.title}</h2>
                            <div id="date">
                                <span>${task.date}</span>
                            </div>
                        </section>
                        <section class="task-btn">
                            <button class="btn" style="background-color:blue;color: white;" id=${i} onclick=edit_click(this.id)><span class="material-symbols-outlined">edit</span></button>
                            ${task.isdone ?
                            `<button class="btn" style="background-color:rgb(118,0,101);color: white;" id=${i} onclick=done_click(this.id)><span class="material-symbols-outlined">cancel</span></button>`:
                            `<button class='btn' style='background-color:green;color: white;' id=${i} onclick=done_click(this.id,)><span class='material-symbols-outlined'>Done</span></button>`}
                            
                            <button class="btn" style="background-color: red;color: white;" id=${i} onclick=reply_click(this.id)><span class="material-symbols-outlined">delete</span></button>
                            
                        </section>
                    </div>
                    
`
i++;


}                  
} 
fillTasks();
 
document.getElementById("plus").addEventListener("click",function(){

    var task=prompt("New Task  : ");
    if(task!=null){
    let nowDate=new Date();
    let d=nowDate.getDate()+"/"+(nowDate.getMonth()+1)+"/"+nowDate.getFullYear()

    let newtask={
        title:task,
        date:d,
        isdone:false,

    }   
    tasks.push(newtask);
    
    storeTasks()
    fillTasks(); 
}
    
})

function reply_click(id){
    let sur=confirm("r u sur")
    if(sur){
    tasks.splice(id,1)
    
    storeTasks()
    fillTasks();
    }

}
function edit_click(id){
    
    let modify=prompt("what is new hear : ",tasks[id].title);
    if(modify!=null)
    {
        
        tasks[id].title=modify;
        
        storeTasks()
        
        fillTasks();
    }
}
function done_click(id){
   tasks[id].isdone=!tasks[id].isdone;
   
   storeTasks()
   fillTasks();

}