//Devmode
document.getElementById("developer-clear-ls").addEventListener("click", function(){if(confirm("")){localStorage.clear();location.reload();}});

//Script.js
//CSS Versioning
var css_version = "0.0.1";

//Config
var password = "password";
var passkey = "7f633472-acf7-45f3-acde-648f8e416acb";
var max_attempts_password = 5;
var max_attempts_passkey = 5;

//Runtime vars
try{
    var info = JSON.parse(localStorage.getItem("info")) || {
        rem_atmpt_pwd: max_attempts_password,
        rem_atmpt_psk: max_attempts_passkey
    }
}
catch(g){
    console.log(g);
    alert("Internal Error: Failed to get stored login info, is the LS system corrupted?");
}
var remaining_attempts_password = info.rem_atmpt_pwd;
var remaining_attempts_passkey = info.rem_atmpt_psk;

//Document elements
var login_screen = document.getElementById("login-screen");
var content_screen = document.getElementById("content");
var password_input = document.getElementById("input");
var submit_button = document.getElementById("submit button");
var passkey_button = document.getElementById("passkey-button");
var passkey_input = document.getElementById("passkey");
var css_ver_display = document.getElementById("css-ver-display");

//Login functions
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
function hide_or(){
    var s=document.getElementById('or');
    if(s){
        s.remove();
    }
}
function update_info(){
    info.rem_atmpt_pwd = remaining_attempts_password;
    info.rem_atmpt_psk = remaining_attempts_passkey;
    localStorage.setItem("info", JSON.stringify(info));
}
function login_password(){
    if(password_input.value === password && remaining_attempts_password > 0){
        hide_login_screen(); 
        show_content_screen();
    }
    else{
        if(remaining_attempts_password > 0){
            remaining_attempts_password--;
            update_info();
            location.reload();
        }
        else{
            submit_button.remove();
            password_input.remove();
        }
    }
}
function login_passkey(){
    if(passkey_input.value === passkey && remaining_attempts_passkey > 0){
        hide_login_screen(); 
        show_content_screen();
    }
    else{
        if(remaining_attempts_passkey > 0){
            remaining_attempts_passkey--;
            update_info();
            location.reload();
        }
        else{
            passkey_button.remove();
            passkey_input.remove();
        }
    }
}

//Setup
submit_button.addEventListener("click", login_password);
passkey_button.addEventListener("click", login_passkey);

passkey_input.placeholder="Enter Passkey... Remaining attempt(s): "+remaining_attempts_passkey;
password_input.placeholder="Enter Password... Remaining attempt(s): "+remaining_attempts_password;

//Set CSS version display
css_ver_display.innerHTML=`Version:${css_version}`

if(remaining_attempts_password <= 0){
    submit_button.remove();
    password_input.remove();
    hide_or();
}
if(remaining_attempts_passkey <= 0){
    passkey_button.remove();
    passkey_input.remove();
    hide_or();
}
if(remaining_attempts_password <= 0 && remaining_attempts_passkey <= 0){
    css_ver_display.innerHTML=`Access Denied`
    hide_or();
}