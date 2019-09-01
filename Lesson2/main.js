var list = document.getElementById('demo');

function changeText2() {
    var firstname = document.getElementById('firstname').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
}
function clearBox(demo){
    var node = document.getElementById('demo');
while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
}
}