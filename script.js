var login_screen = document.getElementById("login-screen");
var content_screen = document.getElementById("content");
var password_input = document.getElementById("submit button");
var submit_button = document.getElementById("input");
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
