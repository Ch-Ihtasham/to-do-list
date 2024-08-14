const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

inputBox.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        addTask()
    }
})
function addTask() {
    if (inputBox.value === ' ') {
        alert('You must Write something!')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value.trim();
        if (li.innerHTML = "") {
            listContainer.appendChild(li);
            let span = document.createElement('span')
            span.innerHTML = '\u00d7'
            li.appendChild(span);
        }
        else {
            alert('You must Write something!')
        }

    }
    inputBox.value = '' 
    saveData()
}
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false)
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()
