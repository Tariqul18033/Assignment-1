function calculate(){
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num1').value
    let valid_number = validity(num1,num2)
    if(valid_number){
        a = operation(num1,num2)
        document.getElementById('output').innerHTML=a
    }
    else{
        document.getElementById('output').innerHTML="enter a valid number"
    }
}



function validity(n1,n2){
    let valid = true
    numbers=["0",'1','2','3','4','5','6','7','8','9']
    a=n1.split('')
    b=n2.split('')
    for(i of a){
        if (numbers.includes(i)== false){
            valid =false
        }
    }
    for(i of b){
        if (numbers.includes(i)== false){
            valid =false
        }
    }
    return valid
}
function operation(a,b){
    x = document.getElementById('math').value
    
    switch(x){
        case 'add': z = parseFloat(a)+parseFloat(b) 
        break
        case 'subtract': z = parseFloat(a)- parseFloat(b)
        break
        case 'multiply': z = parseFloat(a)*parseFloat(b)
        break
        case 'devide': z = parseFloat(a)/parseFloat(b)
        break
        default: z="Select a operation"

    }
    return z

}