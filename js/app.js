/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- GLOBAL VARS */
let navToggle = document.getElementById('nav-menu').firstChild;
let navBtns = Array.from( document.getElementsByClassName('nav-btn') );

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- -------- MOBILE MENU */
function menuSwitch(status, arrow, vis=null) {
    navToggle.setAttribute('flag', status);
    navBtns.forEach(btn => { 
        if (vis) { btn.style.display = 'block' } else { btn.style.display = 'none' }
    });
    navToggle.innerHTML = arrow;
}

navToggle.addEventListener('click', (e)=> {
    let status = e.target.getAttribute('flag');
    if (status === 'up') { menuSwitch('down', '&#9650;', 'vis') } else { menuSwitch('up', '&#9660;') }
});

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- --------- ACTIVE NAV */
