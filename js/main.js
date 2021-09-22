//select DOM elements
var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elList = document.querySelector('.list');

var todos = [];

//listen Event
elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    var UserInput = elInput.value.trim();
    elInput.value = null;

    todos.push({
        id: todos.length,
        name:UserInput,
    })    
    
    elList.innerHTML = null;
    for (var todo of todos) {
    
        //create elements
        var newLi = document.createElement('li');
        var newBtn = document.createElement('button');
        
        //setatribute
        newLi.setAttribute('class', 'list__item');
        newLi.setAttribute('id', 'list__item__id');
        newBtn.setAttribute('class', 'list__item__btn');
        //assain content
        newLi.textContent = todo.name;
        newBtn.textContent = 'Close';
        //append elements
        newLi.appendChild(newBtn);
        elList.appendChild(newLi);
    }
})