let btn_alert = document.getElementById('btn-alert')

btn_alert.addEventListener("click", alertBtn);

function alertBtn(){
    alert("ALERT! This site developed only for presentaion, it's not real shop.\n It using Braintree Sandbox which works only if Debug is True.")
}