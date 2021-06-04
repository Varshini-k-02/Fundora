const Laptops= document.getElementById('Laptops');
// const Lap= document.getElementsById("Lap");

const Mobiles= document.getElementById('Mobiles');
// const Mob= document.getElementsById("Mob");

const Accessories= document.getElementById('Accessories');
// const Access= document.getElementsById("Access");




Laptops.style.display="inline";
Mobiles.style.display="none";
Accessories.style.display="none";



function laptops(){

    Laptops.style.display="inline";
    Mobiles.style.display="none";
    Accessories.style.display="none";
    hAppliances.style.display="none";

}

function mobiles(){

    Laptops.style.display="none";
    Mobiles.style.display="inline";
    Accessories.style.display="none";
    hAppliances.style.display="none";

}

function accessories(){

    Laptops.style.display="none";
    Mobiles.style.display="none";
    Accessories.style.display="inline";
    hAppliances.style.display="none";
}

