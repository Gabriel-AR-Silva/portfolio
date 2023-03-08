let copied_div = document.querySelector(".copied");


let address_copy = document.querySelector("#address_text")
function copyToClipboardAddress(){
    navigator.clipboard.writeText(address_copy.textContent).then(() => {
        copied()
    })
}

let email_copy = document.querySelector("#email_text")
function copyToClipboardEmail(){
    navigator.clipboard.writeText(email_copy.textContent).then(() => {
        copied()
    })
}

let phone_number_copy = document.querySelector("#phone_number_text")
function copyToClipboardPhoneNumber(){
    navigator.clipboard.writeText(phone_number_copy.textContent).then(() => {
        copied()
    })
}

function copied(){
    copied_div.classList.add('copied_show');
        setTimeout(function(){
            copied_div.classList.remove('copied_show');
        },2000)
}
