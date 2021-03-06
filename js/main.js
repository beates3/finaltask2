//bootstrap validattion
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






  

//chat    

document
    .getElementById('add-new-chat')
    .addEventListener('click', function() {
        const unameInput = document.getElementById('uname');
        const messageInput = document.getElementById('message-name');
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        
        
        if (messageInput.value == '' || unameInput.value == '' ) {
            
            return false;
        }
        const newMessage = `<li class="list-group-item"> 
        ${unameInput.value} ${dateTime} <br></br>
        ${messageInput.value}</li>`;

        document
            .getElementById('message-list')
            .innerHTML += newMessage;

        messageInput.value = '';
        unameInput.value = '';
        
    });

   