var names =['Vasa', 'Pitya', 'Anya','Olia'];

var list = document.getElementById('list-names');

var html='';

for(var name of names){
    html += '<li onclick="alert' + "('clicked " +name+ "')" + '">' +name+ '</li>';
}
list.innerHTML = html;

console.log(html);