document.addEventListener("DOMContentLoaded", function() {
    alert('thoong baos')

    menu = document.querySelectorAll('.monan li')
    for (let i = 0; i < menu.length; i++) {
        menu[i].onclick = function() {
            nutkichhoat = this
            nuttruoc = nutkichhoat.previousElement

        }
    }







});