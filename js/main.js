
(function () {
    'use strict'
  

    var forms = document.querySelectorAll('.needs-validation')
     Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()





  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
 var tabTrigger = new bootstrap.Tab(triggerEl)

triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
   tabTrigger.show()
  })
})



  

    

document
    .getElementById('add-new-task')
    .addEventListener('click', function() {
        const unameInput = document.getElementById('uname');
        const taskInput = document.getElementById('todo-name');
        const today = new Date();

       const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

       const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

       const dateTime = date+' '+time;
        
        
        if (taskInput.value == '' || unameInput.value == '' ) {
       
            return false;
        }
        const newTask = `<li class="list-group-item">User: 
        ${unameInput.value} ${dateTime} </li><li class="list-group-item"> Message: <br></br>
        ${taskInput.value}</li>`;

        document
            .getElementById('tasks-list')
            .innerHTML += newTask;

        taskInput.value = '';
        unameInput.value = '';
        
    });

