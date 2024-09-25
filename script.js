let toDoCount = load();
document.getElementById("add").addEventListener("click", AddTodo);
function AddTodo(){
    let description = document.getElementById("input").value;
    let isNull = true;
    for(let i =0; i < description.length; i++){
        console.log(isNull);
        if(description[i] == " ") isNull = true;
        else {
            isNull = false;
            break;
        }
    }
    if(description == "" || isNull == true) {   //eingabe = nichts
        alert("Eingabe kann nicht null sein!");
        return;
    }
    
    let divElement = document.createElement("div"); //div Element für TODO
    divElement.setAttribute("id", "todo," + toDoCount);
    divElement.setAttribute("class", "toDoElement")

    let checkBoxElement = document.createElement("input"); //Checkbox
    checkBoxElement.setAttribute("type", "checkbox");
    checkBoxElement.setAttribute("id", "checkbox" + toDoCount);
    checkBoxElement.setAttribute("onclick", 'ClickedCheckBox("todo,'+ toDoCount + '")')
    divElement.appendChild(checkBoxElement);

    let descriptionElement = document.createElement("div"); //Beschreibung
    descriptionElement.setAttribute("id", "desc"+toDoCount);
    descriptionElement.innerHTML = description;
    divElement.appendChild(descriptionElement);

    let deleteButton = document.createElement("button");    //Löschen
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.innerHTML = "Löschen";
    deleteButton.setAttribute("id", "delete"+toDoCount);
    deleteButton.setAttribute("onclick", 'DeleteTodo("todo,' + toDoCount + '")');
    divElement.appendChild(deleteButton);

    document.getElementById("output").appendChild(divElement);  //TODO hinzufügen
    toDoCount++;
    document.getElementById("input").value = "";
    save(toDoCount);
}

function DeleteTodo(deleteId){      //TODO löschen
    if(confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
        document.getElementById(deleteId).remove();
    } 
    save(toDoCount);
    window.location.reload();
}

function ClickedCheckBox(checkBoxId){   //durchstreichen
    let str = checkBoxId.split(",");
    let content = document.getElementById("desc" + str[1]).innerHTML;
    if(content.search('<s>') == -1){
        document.getElementById("desc" + str[1]).innerHTML = '<s>' + content + '</s>';
    }
    else {
        content = content.replace('<s>', '');
        content = content.replace('</s>', '');
        document.getElementById("desc" + str[1]).innerHTML = content;
    }
}

function save(taskCounter, saveOutputDom = true) {
    try {
        localStorage.setItem("taskCounter", taskCounter);
        if (saveOutputDom) {
            let dom = document.getElementById("output");
            localStorage.setItem("dom", dom.innerHTML);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

function load(loadOutputDom = true) {
    try {
        if (loadOutputDom) {
            let dom = document.getElementById("output");
            dom.innerHTML = localStorage.getItem("dom");
        }
        return localStorage.getItem("taskCounter");
    } catch (error) {
        console.error(error);
        return -1;
    }
}
