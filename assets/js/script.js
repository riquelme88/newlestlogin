
document.querySelector('#subscribe-button').addEventListener('click', verifyEmail)

function verifyEmail(){
    let input = document.querySelector('input')
    let inputValue = input.value
    let warning = document.querySelector('#warning')
    if(inputValue != ''){
        let regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(inputValue)){
            document.querySelector('.login-layout').style.display = 'none'
            document.querySelector('.subscribing').style.display = 'block'
            document.querySelector('.subscribing p ').innerHTML = `<p id="text-subscribing">A confirmation email has been sent to <strong>${inputValue}.</strong> Please
            open it and click the button inside to confirm your subscription.</p>`
        }else{
            input.style.border = '1px solid red'
            input.style.color = 'hsl(4, 100%, 67%)'
            input.style.backgroundColor = 'hsl(4, 100%, 67%, 20%)'
            warning.innerHTML = 'Valid email required'
        }
    }else{
        warning.innerHTML = 'fill in the email'
        input.style.border = '1px solid red'
        input.style.color = 'hsl(4, 100%, 67%)'
        input.style.backgroundColor = 'hsl(4, 100%, 67%, 20%)'
            
    }
}