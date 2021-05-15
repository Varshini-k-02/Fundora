const hello = document.getElementById('form');
const hello1 = document.getElementById('form1');
const hello2 = document.getElementById('hide');
console.log(hello);
function displayLogin(){
    hello.classList.toggle('visible');
    console.log(hello);
}

hello2.addEventListener('click', displayLogin);