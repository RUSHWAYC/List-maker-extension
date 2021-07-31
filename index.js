let textToSave = document.getElementById("textToSave")
let saveButton = document.getElementById("saveButton")
let savedList = document.getElementById("savedList")
let list = []

saveButton.addEventListener("click", function() {
    list.push(textToSave.value)
    textToSave.value = ""
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