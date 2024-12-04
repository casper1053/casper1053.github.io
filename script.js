var css_version = 0;
var login_screen = document.getElementById("login-screen");
var content_screen = document.getElementById("content");
var password_input = document.getElementById("input");
var submit_button = document.getElementById("submit button");
var passkey_button = document.getElementById("passkey-button");
var passkey_input = document.getElementById("passkey");
var css_ver_display = document.getElementById("css-ver-display");
function set_css(element, property, value){
  element.style[property]=value
}
function hide_login_screen(){
  set_css(login_screen, "display", "none");
}
function show_login_screen(){
  set_css(login_screen, "display", "default");
}
function show_content_screen(){
  set_css(content_screen, "display", "default");
}
function hide_content_screen(){
  set_css(content_screen, "display", "none");
}
css_ver_display.innerHTML=`Version ${css_Version}`