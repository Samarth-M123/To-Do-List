document.querySelector('#submit-button').addEventListener('click', event => {
    event.preventDefault();
    let labelValue = document.querySelector('#input-label').value;
    let taskList = document.querySelector('.task-list');
    addItem(labelValue, taskList);
})

function addItem(labelVal, taskList) {
    let listDiv = document.createElement('div');
    taskList.appendChild(listDiv);

    let newRadio = document.createElement('input');
    newRadio.type = "radio";
    newRadio.className = "radio-class";
    listDiv.appendChild(newRadio);

    let newLabel = document.createElement('label');
    newLabel.innerText = labelVal;
    newLabel.className = "radioText";
    listDiv.appendChild(newLabel);
}