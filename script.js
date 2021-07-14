/*
var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");
*/
var post = $("#ButtonPost").on("click",TodoPost);
var clear = $("#ButtonClear").on("click",TodoClear);
var mark = $("#ButtonMark").on("click",TodoMark);
var del = $("#ButtonDelete").on("click",TodoDel);
 
function TodoPost(e)
{
    
    e.preventDefault();
    var to_do = $("#todoText").val();
   
    var list = $("#todoList");
 
    /*
    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" class"prueba" /> ${to_do} <br>`
    document.getElementById("todoText").value = "";*/
    var div = $("<div>");
    var checkbox = $("<input>");
    var label = $("<label>");
 
    checkbox.attr("type","checkbox");
    checkbox.attr("name","todo");
 
    label.html(to_do);
 
    div.append(checkbox);
    div.append(label);
    list.append(div);
}
 
function TodoClear()
{
    var todos = document.getElementsByName("todo");    
    todos.forEach(elemento => {
        elemento.checked = false;
    })
}
 
function TodoMark()
{
    var todos = document.getElementsByName("todo");    
    todos.forEach(elemento => {
        elemento.checked = true;
    })
}
 
function TodoDel()
{
    $("[name='todo']").each(function(index,item){
        
        if (item.checked) {
            $(item).parent().remove()
        }

     });
}