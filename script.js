let toDoCount = 0;
document.getElementById("add").addEventListener("click", AddTodo);

function AddTodo(){
    let description = document.getElementById("input").value;

    let divElement = document.createElement("div"); //div Element für TODO
    divElement.setAttribute("id", "todo" + toDoCount);
    divElement.setAttribute("class", "toDoElement")

    let checkBoxElement = document.createElement("input"); //Checkbox
    checkBoxElement.setAttribute("type", "checkbox");
    checkBoxElement.setAttribute("id", "checkbox" + toDoCount);
    checkBoxElement.setAttribute("onclick", 'ClickedCheckBox("todo'+ toDoCount + '")')
    divElement.appendChild(checkBoxElement);

    let descriptionElement = document.createElement("div"); //Beschreibung
    descriptionElement.setAttribute("id", "desc"+toDoCount);
    descriptionElement.innerHTML = description;
    divElement.appendChild(descriptionElement);

    let deleteButton = document.createElement("button");    //Löschen
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.innerHTML = "Löschen";
    deleteButton.setAttribute("id", "delete"+toDoCount);
    deleteButton.setAttribute("onclick", 'DeleteTodo("todo' + toDoCount + '")');
    divElement.appendChild(deleteButton);

    document.getElementById("output").appendChild(divElement);
    toDoCount++;
}

function DeleteTodo(deleteId){
    if(confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
        document.getElementById(deleteId).innerHTML = "";
    } 
}

function ClickedCheckBox(checkBoxId){
    let str = checkBoxId.slice(-1);
    let content = document.getElementById("desc" + str).innerHTML;
    if(content.search('<s>') == -1){
        document.getElementById("desc" + str).innerHTML = '<s>' + content + '</s>';
    }
    else {
        content = content.replace('<s>', '');
        content = content.replace('</s>', '');
        document.getElementById("desc" + str).innerHTML = content;
    }
}
