(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('#equalButton');
    let num_array= [];
    console.log(equal);
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            console.log(equal);
            
            let value = e.target.dataset.num;
            if(value != "=")
            {
                num_array.push(value);
                
            }
           screen.value = num_array.join("").toString();
           console.log(screen.value);
        //    screen.value += value;

        });
    });

    equal.addEventListener('click',function(){
        // console.log("IN");
        if(screen.value === ''){
            screen.value = "Please Enter";
        } else{ 
            let answer = math.evaluate(screen.value);
            screen.value = answer;
        }
    });
console.log(clear);
    clear.addEventListener('click', function(){
        screen.value = "";
        num_array = [];
        // console.log(num_array);
    });

})();