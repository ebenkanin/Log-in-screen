const personelId = 1010622;
let log_In_Password = 'K0245241314n'

document.querySelector('.submit').addEventListener('click', function(){
    if(document.querySelector('#log-in-id').value == personelId && document.querySelector('#password').value == log_In_Password){
        console.log('successful')

        alert("Successfully logged in")
    }
    else{
        alert("Incorrect log in details. check password or id.")
    } 

})

