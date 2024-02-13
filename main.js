// 유저가 값을 입력함
// + 버튼을 클릭하면, 할일이 추가됨
// delete 버튼을 누르면 할일이 삭제됨
// check 버튼을 누르면 할일이 끝나면서 밑줄이 감
// All notDone Done 탭을 누르면, 언더바가 이동함
// notDone은 notDone만, Done은 Done만 표시함
//  All을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById('task-input')
let addButton = document.getElementById('add-button')
let taskList = []

addButton.addEventListener('click', addTask)

function addTask() {
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList)
}

function render() {
    let
}