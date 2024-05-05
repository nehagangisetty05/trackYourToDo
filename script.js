let input = document.querySelector("#inputtask");
let listOfTask = document.getElementById("listContainer");

let taskDisplay = document.querySelector(".displayTask")


function addTask() {
    if(input.value == ''){
        alert("Please enter your task");
    }
    else {
        let li = document.createElement("li");
        li.textContent = input.value;
        listOfTask.appendChild(li);

        let butn = document.createElement("button")
        butn.innerHTML = "Display";
        li.appendChild(butn);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        butn.addEventListener("click", () => {
            displayTaskContent(li);
        })
    }
    input.value = "";
    saveTasks();
}

listOfTask.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checkoff");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
})

function saveTasks(){
    localStorage.setItem("todoTasks", listOfTask.innerHTML);
}

function displayTasks(){
    listOfTask.innerHTML = localStorage.getItem("todoTasks")
}
displayTasks()

function displayTaskContent(li) {
    taskDisplay.value = li.childNodes[0].textContent;
}

// stop watch

let [hours, min, sec] = [0, 0, 0];
let timer = document.getElementById("timer");
let t = null;

function stopWatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hours++;
        }
    }

    let h = hours < 10 ? `0${hours}` : hours;
    let m = min < 10 ? `0${min}` : min;
    let s = sec < 10 ? `0${sec}` : sec;

    timer.innerHTML = `${h} : ${m} : ${s}`;
}

function watchTime(){
    if(t !== null){
        clearInterval(t);
    }
    t = setInterval(stopWatch, 1000)
}

function pauseWatch(){
    clearInterval(t);
}

function resetWatch() {
    clearInterval(t);
    [hours, min, sec] = [0, 0, 0];
    timer.innerHTML = "00 : 00 : 00";
}

