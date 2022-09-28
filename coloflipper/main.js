const colors = ['#785589','#CFC0BD','#586F6B','#379634','#7CFFCB','#FFF689','#F75590','#97EAD2','#C96480','#B47978','#DAFEB7'];


const button = document.getElementById('btn');
const color = document.querySelector('.bcolor');


button.addEventListener("click", ()=>{

    const randomNumber = getrandomColor();


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    

});

function getrandomColor(){
    return Math.floor(Math.random()*colors.length);
};

