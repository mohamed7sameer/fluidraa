


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
//   document.getElementById("my-main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("my-main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


// let astHfMenu1 = document.querySelectorAll('#ast-hf-menu-1 a')
let astHfMenu1 = document.querySelectorAll('#main-top-navbar-collapse li:not(.mo-nav-item-search,.mo-nav-item-bars) a')
let data = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>`
let mySidenav = document.querySelector('#mySidenav')
if(astHfMenu1 && mySidenav){
    for(let i = 0; i<astHfMenu1.length; i++){
        let elem = astHfMenu1[i];
        data += `<a href="${elem.href}">${elem.innerHTML}</a>`;
    }
    mySidenav.innerHTML = data
}



new WOW().init();
