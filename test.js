let output = document.getElementById('output');
let button = document.getElementById('btn');


let number = Math.floor(Math.random()* 100);

button.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    
    if(input == number){
        output.innerHTML='Congratulations!! you have guessed the right number '     
    } else if(input > number) {
        output.innerHTML= 'number is high!! '
    };
    if( input < number){ 
        output.innerHTML = 'number is low!!  '
     }

});

