let textToSave = document.getElementById("textToSave")
let saveButton = document.getElementById("saveButton")
let deleteButton = document.getElementById("deleteButton")
let saveLink = document.getElementById("saveLink")
let savedList = document.getElementById("savedList")
let list = []
const fromLocalStorage = JSON.parse(localStorage.getItem("list"))

if (fromLocalStorage) {
    list = fromLocalStorage
    renderList()
}

saveButton.addEventListener("click", function() {
    if (textToSave.value == "" || textToSave.value == "Please enter some text.") {
        textToSave.value = "Please enter some text."
        renderList()
    } else {
        list.push(textToSave.value)
        textToSave.value = ""
        localStorage.setItem("list", JSON.stringify(list))
        renderList()
    }
})

deleteButton.addEventListener("click", function() {
    localStorage.clear()
    list = []
    renderList()
})

saveLink.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        list.push(tabs[0].url)
        localStorage.setItem("list", JSON.stringify(list) )
        renderList()
    })    
})

function renderList() {
    let listItems = ""
    for (i = 0; i < list.length; i++) {
        listItems += `
            <li>
                ${list[i]}
            </li>
        `
        //<input type="checkbox" id="checkbox">
    }
    savedList.innerHTML = listItems
}