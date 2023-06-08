console.error("Sorry, but I hadn't have time");
let display = document.querySelector('.display');
let number = document.querySelectorAll('.dark__gray');
let AC = document.querySelector('.AC');
let percentage = document.querySelector('.percentage');
let symbols = document.querySelectorAll('.symbols');
let equal = document.querySelector('.equal');
let pi = document.querySelector('.pi');
let copy = document.querySelector('.copy');


equal.addEventListener('click', ()=>{
    try{
        let length = 30;
        if(display.innerHTML.length >= length){
            alert(`Sorry, but we can't solve ${length} length calculations`)
        }else{
            display.innerHTML = eval(display.innerHTML)
        }
    }catch(err){
        display.innerHTML = `Error`
    }
    
})

function refresh(){
    display.innerHTML = '';
}    
number.forEach((num)=>{
    num.addEventListener('click',()=>{
        display.innerHTML += num.innerHTML;
    })
})
symbols.forEach((sym)=>{
    sym.addEventListener('click', ()=>{
        display.innerHTML += sym.innerHTML;
    })    
})            
percentage.addEventListener('click',()=>{
    display.innerHTML = +display.innerHTML/100
})    

AC.addEventListener('click',()=>{
    display.innerHTML = '';
})    

pi.addEventListener('click',()=>{
    refresh();
    display.innerHTML = Math.PI;
})    
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerHTML);
})

