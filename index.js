const personelId = 1010622;
let log_In_Password = 'K0245241314n'



document.querySelector('.submit').addEventListener('click', function(){
    event.preventDefault()
    const enteredPersonelId = Number(document.querySelector('#log-in-id').value)
    const enteredPassword = document.querySelector('#password').value
    if(
        enteredPersonelId === personelId && enteredPassword === log_In_Password){
        console.log('successful')

        document.querySelector('.successfull').classList.remove('hidden')
    }
    else{
        document.querySelector('.unsuccessfull').classList.remove('hidden')
    } 

})

