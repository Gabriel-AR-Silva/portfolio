let copiedDiv = $(".copied");

let addressCopy = $("#address_text");
function copyToClipboardAddress(){
    navigator.clipboard.writeText(addressCopy.text()).then(() => {
        copied();
    });
}

let emailCopy = $("#email_text");
function copyToClipboardEmail(){
    navigator.clipboard.writeText(emailCopy.text()).then(() => {
        copied();
    });
}

let phoneNumberCopy = $("#phone_number_text");
function copyToClipboardPhoneNumber(){
    navigator.clipboard.writeText(phoneNumberCopy.text()).then(() => {
        copied();
    });
}

function copied(){
    copiedDiv.addClass('copied_show');
    setTimeout(() => copiedDiv.removeClass('copied_show'), 2000);
}
