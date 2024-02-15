// 유저가 값을 입력함
// + 버튼을 클릭하면, 할일이 추가됨
// delete 버튼을 누르면 할일이 삭제됨
// check 버튼을 누르면 할일이 끝나면서 밑줄이 감
// 1. check 버튼을 클릭하는 순간 true false
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안 끝난걸로 간주하고 그대로

// All notDone Done 탭을 누르면, 언더바가 이동함
// notDone은 notDone만, Done은 Done만 표시함
//  All을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById('task-input')
let addButton = document.getElementById('add-button')
let tabs = document.querySelectorAll(".task-tabs div")
let taskList = []
let filterList = []
let mode = 'all'

addButton.addEventListener('click', addTask)

for(let i=1;i<tabs.length;i++) {
    tabs[i].addEventListener("click",function (event) {filter(event)})
}

function addTask() {
    let task = {
        id: randomIDGenerator(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task)
    console.log(taskList)
    render()
}

function render() {
    let list = []
    let resultHTML = '';
    if(mode === 'all') {
        list = taskList
    }else if(mode === 'notDone' || mode === 'Done') {
        list = filterList
    }
    for(let i=0;i<list.length;i++) {
        if(list[i].isComplete === true) {
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`
    }else {
        resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
    }
    }

    document.getElementById('task-board').innerHTML = resultHTML;
}

function toggleComplete(id) {
    console.log('id: ', id)
    for(let i=0;i<taskList.length;i++) {
        if(taskList[i].id === id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    // for(let i=0;i<filterList.length;i++) {
    //     if(filterList[i].id === id) {
    //         filterList[i].isComplete = !filterList[i].isComplete;
    //         break;
    //     }
    // }
    render();
    console.log(taskList)
}

function deleteTask(id) {
    for(let i=0;i<taskList.length;i++) {
        if(taskList[i].id === id) {
            taskList.splice(i,1)
            break;
        }
    }
    for(let i=0;i<filterList.length;i++) {
        if(filterList[i].id === id) {
            filterList.splice(i,1)
            break;
        }
    }
    render();
    console.log(taskList)
}

function filter(event) {
    console.log("filter", event.target.id)
    mode = event.target.id
    filterList = []
    if(mode === "all") {
        render()
    }else if(mode === "notDone") {
        for(let i=0;i<taskList.length;i++) {
            if(taskList[i].isComplete === false) {
                filterList.push(taskList[i])
            }
        }
        render()
    }else if(mode === "Done") {
        for(let i=0;i<taskList.length;i++) {
            if(taskList[i].isComplete === true) {
                filterList.push(taskList[i])
            }
        }
        render()
    }
}

function randomIDGenerator() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

