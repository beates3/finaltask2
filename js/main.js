// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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



function checkPassword(){
  let password = document.getElementById('Password').value;
  let confirmpassword = document.getElementById('ConfirmPassword').value;
  if (password != confirmpassword){
    alert("Password did not match")
  }

  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
 var tabTrigger = new bootstrap.Tab(triggerEl)

triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
   tabTrigger.show()
  })
})
var triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
/bootstrap.Tab.getInstance(triggerEl).show()
}


    document
    .getElementById('add-new-task')
    .addEventListener('click', function() {
        const unameInput = document.getElementById('uname');
        unameInput.classList.remove('border')
        unameInput.classList.remove('border')

        if (unameInput.value == '') {
          unameInput.classList.add('border')
          unameInput.classList.add('border')
            return false;
        }
        const newTask = `<li class="list-group-item">User: 
        ${unameInput.value}</li>`;

        document
            .getElementById('tasks-list')
            .innerHTML += newTask;

            unameInput.value = '';
    });

document
    .getElementById('add-new-task')
    .addEventListener('click', function() {
        const taskInput = document.getElementById('todo-name');
        taskInput.classList.remove('border')
        taskInput.classList.remove('border')

        if (taskInput.value == '') {
            taskInput.classList.add('border')
            taskInput.classList.add('border')
            return false;
        }
        const newTask = `<li class="list-group-item"> Message: <br></br>
        ${taskInput.value}</li>`;

        document
            .getElementById('tasks-list')
            .innerHTML += newTask;

        taskInput.value = '';
    });

