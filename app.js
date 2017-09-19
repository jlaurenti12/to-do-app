function onReady() {
    var toDos = [];
    var addToDoForm = document.getElementById('addToDoForm');
    var remove;

    function createNewToDo() {
      var newToDoText = document.getElementById('newToDoText');
      toDos.push({
        title: newToDoText.value,
        complete: false
      });

      newToDoText.value = '';

      renderTheUI(toDos);
    }


    }

    function renderTheUI(toDos) {
      var toDoList = document.getElementById('toDoList');

      toDoList.innerHTML = '';

      toDos.forEach(function(toDo) {
        var newLi = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        // declare delete button
        let remove = document.createElement('button');
        remove.innerHTML = 'Remove Item';
        remove.className= 'btn-remove';

        newLi.innerHTML = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        // add delete button to the list item each time this function runs
        newLi.appendChild(remove);


        // On click, remove the list item
        // I wasn't sure if this was the right area of the code to put this, but if I put it outside the function it won't recognize remove.
        remove.addEventListener('click', function() {
        newLi.parentNode.removeChild(newLi)
        toDos.pop(newLi);
        });
      });
    }

    addToDoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      createNewToDo();
    });

    renderTheUI(toDos);
}

  window.onload = function() {
     onReady();
   };
