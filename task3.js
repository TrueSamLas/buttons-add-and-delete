let msg = document.getElementsByClassName('message')[0]
btns = document.querySelectorAll('[type="button"]')
for (btn of btns){
    btn.addEventListener('mousemove', showMessage)
    btn.addEventListener('mouseout', unShowMessage)
}
        
function showMessage(e){
    if (msg.classList.contains('unvisible')) {
        msg.classList.remove('unvisible');

        let bounds = e.target.getBoundingClientRect();
        msg.style.top = (bounds.top - 150) + "px";
        msg.style.left = bounds.left + "px";
    }
}
        
function unShowMessage(e){
    if (!msg.classList.contains('unvisible')) {
            msg.classList.add('unvisible')
    }
}
