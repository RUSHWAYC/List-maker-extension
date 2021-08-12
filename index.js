let textToSave = document.getElementById("textToSave")
let saveButton = document.getElementById("saveButton")
let deleteButton = document.getElementById("deleteButton")
let savedList = document.getElementById("savedList")
let list = []
const fromLocalStorage = JSON.parse(localStorage.getItem("list"))

if (fromLocalStorage) {
    list = fromLocalStorage
    renderList()
}

saveButton.addEventListener("click", function() {
    list.push(textToSave.value)
    textToSave.value = ""
    localStorage.setItem("list", JSON.stringify(list))
    renderList()
})

deleteButton.addEventListener("click", function() {
    localStorage.clear()
    list = []
    renderList()
})

function renderList() {
    let listItems = ""
    for (i = 0; i < list.length; i++) {
        listItems += `
            <li>
                ${list[i]}
            </li>
        `
    }
    savedList.innerHTML = listItems
}