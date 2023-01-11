const addtask = document.getElementById("add-task");
const taskinput = document.getElementById("task-input");

const taskDiv = document.getElementById("all-tasks");
const errorDiv = document.getElementById("error-Div");


addtask.addEventListener("submit", function(e){
    e.preventDefault();

    const taskText = taskinput.value;
    if(taskText){
        errorDiv.innerHTML = "";
        taskinput.value = "";



        // creat div
        const singleTaskDiv = document.createElement("div");
        singleTaskDiv.classList.add("single-task");

        // creat input

        const singleTaskText = document.createElement("input");
        singleTaskText.type = "Text";
        singleTaskText.value = taskText;
        singleTaskText.setAttribute("readonly", "readonly");

        // creat edit button

        const editTask = document.createElement("button");
        editTask.classList.add("edite-task");
        editTask.innerText = "Edit";

        // creat complete button

        const completeTask = document.createElement("button");
        completeTask.classList.add("complete-task");
        completeTask.innerText = "Complete";

        // creat delete button

        const deleteTask = document.createElement("button");
        deleteTask.classList.add("edite-task");
        deleteTask.innerText = "Delete";

        // creat component

        singleTaskDiv.appendChild(singleTaskText);
        singleTaskDiv.appendChild(editTask);
        singleTaskDiv.appendChild(completeTask);
        singleTaskDiv.appendChild(deleteTask);

        // add task

        taskDiv.appendChild(singleTaskDiv);


        // edit task function

        editTask.addEventListener("click", function(e){
            if(editTask.innerText == "Edit") {
                editTask.innerText = "Save";
                singleTaskText.removeAttribute("readonly");
                singleTaskText.focus();
            }else{
                editTask.innerHTML = "Edit";
                singleTaskText.setAttribute("readonly", "readonly")
            }
        });

        // complete task function
        completeTask.addEventListener("click", function(e){
            if (completeTask.innerText == "Complete") {
                completeTask.innerText = "Completed";
                singleTaskDiv.classList.add("task-completed");
            }
        })

        // delete Task function
        deleteTask.addEventListener("click", function(e){
            taskDiv.removeChild(singleTaskDiv)
        })

    } else{
        errorDiv.innerHTML = "<p>please write task name</p>" 
    }
})