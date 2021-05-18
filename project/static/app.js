const hello = document.getElementById('form');
const hello1 = document.getElementById('form1');
const hello2 = document.getElementById('hide');
const logo = document.getElementById("logo");


hello1.classList.toggle("visible");



function displayLogin(){
    logo.style.marginTop="130px";
    hello.classList.toggle("visible");
    hello1.classList.toggle("visible");

   
}

function logoHeight(){

    logo.style.marginTop="0px";
 
}


hello2.addEventListener('click', displayLogin);
hello2.addEventListener('click', logoHeight);