"use strict";function openNav(){document.getElementById("mySidenav").style.width="100%";document.body.style.backgroundColor="rgba(0,0,0,0.4)"}function closeNav(){document.getElementById("mySidenav").style.width="0";document.body.style.backgroundColor="white"}var astHfMenu1=document.querySelectorAll("#main-top-navbar-collapse li:not(.mo-nav-item-search,.mo-nav-item-bars) a");var data="<a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>";var mySidenav=document.querySelector("#mySidenav");if(astHfMenu1&&mySidenav){for(var i=0;i<astHfMenu1.length;i++){var elem=astHfMenu1[i];data+="<a href=\"".concat(elem.href,"\">").concat(elem.innerHTML,"</a>")}mySidenav.innerHTML=data}new WOW().init();