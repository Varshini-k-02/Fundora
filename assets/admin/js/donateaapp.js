const cont = document.getElementById('cont');
const main = document.getElementById('main');
const laptop = document.getElementById('laptop');
const phone = document.getElementById('phone');
const printer = document.getElementById('printer');
const backlp = document.getElementById('backlp');
const backph = document.getElementById('backph');
const backpr = document.getElementById('backpr');
const lsub = document.getElementById('lsub');
const psub = document.getElementById('psub');
const prsub = document.getElementById('prsub');
const lapval = document.querySelectorAll('#lmod');
const phval = document.querySelectorAll('#pmod');
const prval = document.querySelectorAll('#prmod');
const summ = document.getElementById('summary');
let a = [];

// Common functionality

function displayNext(){
    const val = document.querySelectorAll('#val');
    if(val[0].value === 'laptop'){
        main.classList.toggle('visible');
        laptop.classList.toggle('visible');
    }
    else if(val[0].value === 'phone'){
        main.classList.toggle('visible');
        phone.classList.toggle('visible');
    }
    else if(val[0].value === 'printer'){
        main.classList.toggle('visible');
        printer.classList.toggle('visible');
    }
    else{
        alert('product cannot be accepted');
    }
}
function productData(ele){
    const allval = document.querySelectorAll(ele);
    for (val of allval){
        a.push(val.value);
    }
    console.log(a);
}
cont.addEventListener('click', displayNext);

// laptop functionality

function goBacklp(){
    main.classList.toggle('visible');
    laptop.classList.toggle('visible');
    a = []
}
backlp.addEventListener('click', goBacklp);

// Phone functionality

function goBackph(){
    main.classList.toggle('visible');
    phone.classList.toggle('visible');
    a = []
}
backph.addEventListener('click', goBackph);

// Printer functionality

function goBackpr(){
    console.log('hi');
    main.classList.toggle('visible');
    printer.classList.toggle('visible');
    a = []
}
backpr.addEventListener('click', goBackpr);

// summary functionality

function displaySummaryl(){
    laptop.classList.toggle('visible');
    const li = document.createElement('li');
    console.log(li);
    console.log(summ);
    li.className = 'summary';
    li.innerHTML = `
    <p> Product Ram : ${a[0]} <br><br>
        Product Storage : ${a[1]} <br><br>
        Product processor : ${a[2]} <br><br>
        Product Graphics : ${a[3]} <br><br>
        Product Screen-specs : ${a[4]} <br><br>
        Product history : ${a[5]}</p>
    <button>Confirm</button>`
    summ.append(li);
}
function displaySummaryp(){
    phone.classList.toggle('visible');
    const li = document.createElement('li');
    li.className = 'summary';
    li.innerHTML = `
    <p> Product Ram : ${a[0]} <br><br>
        Product Storage : ${a[1]} <br><br>
        Product processor : ${a[2]} <br><br>
        Product Graphics : ${a[3]} <br><br>
        Product Screen-specs : ${a[4]} <br><br>
        Product history : ${a[5]}</p>
    <button>Confirm</button>`
    summ.append(li);
}
function displaySummarypr(){
    printer.classList.toggle('visible');
    const li = document.createElement('li');
    li.className = 'summary';
    li.innerHTML = `
    <p> Product Catridge : ${a[0]} <br><br>
        Product page-capacity : ${a[1]} <br><br>
        Product history : ${a[2]} <br><br>
        Product Graphics : ${a[3]} <br><br>
        </p>
    <button>Confirm</button>`
    summ.append(li);
}

lsub.addEventListener('click', displaySummaryl);
psub.addEventListener('click', displaySummaryp);
prsub.addEventListener('click', displaySummarypr);