var validate_btn = document.querySelector("#validating-button"),
    alert_message = document.querySelector('.validation-or-not'),
    email = document.querySelector("#email"),
    characters = ['@','.'],
    is_valid = false;

validate_btn.addEventListener('click', ()=> {
    email_value = email.value
    if(email_value.lenght < 5){

    }
    else {
        for(let j = 0 ; j <2 ; ++j ) {
            for( let i = 0 ; i <= email_value.length;++i) {
                if(email_value[i] == characters[j])
                {
                    is_valid = true;
                    break;
                }
                else {
                    is_valid = false;
                }
            }
        }
    }

   
    if(!is_valid) {
        alert_message.style.display = "block";
        email.style.border = "1px solid red";
        alert_message.style.marginBottom = "10px";  
    }
    else {
        alert_message.style.display = "none";
        email.style.border = " 1px solid hsl(223, 100%, 88%)";
    }
})
