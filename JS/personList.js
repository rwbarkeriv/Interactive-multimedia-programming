function addName() {
    var node = document.createElement("li");
    var name = document.getElementById('name-input');
    var textNode = document.createTextNode(name.value);
    node.classList.add("name");
    node.appendChild(textNode);
    document.getElementById("name-list").appendChild(node);
    name.value = "";
};

function keyPress(event) {
    if(event.keyCode == 13){
        addName();
    }
};