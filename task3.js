let msg = document.getElementsByClassName('message')[0]
btns = document.querySelectorAll('[type="button"]')
for (btn of btns){
    btn.addEventListener('mousemove', showMessage)
    btn.addEventListener('mouseout', unShowMessage)
}
        
function showMessage(){
    if (msg.classList.contains('unvisible')) {
        msg.classList.remove('unvisible')
    }
}
        
function unShowMessage(){
    if (!msg.classList.contains('unvisible')) {
            msg.classList.add('unvisible')
    }
}