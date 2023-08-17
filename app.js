//Question Number 1

// var name = document.querySelector("#names");
// var lastname = document.querySelector("#lastname");
// var Email = document.querySelector("#Email");
// var Password = document.querySelector("#Password");
// var Login = document.querySelector("#Login");

// console.log(names)
// console.log(lastname)
// console.log(Email)
// console.log(Password)
// console.log(Login)

// function loginUser() {
//     console.log(names.value)
//     console.log(lastname.value)
//     console.log(Email.value)
//     console.log(Password.value)
// }


//Question Number 2


function calc(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var oper =document.getElementById('operators').value;

    if(oper === '+'){
        document.getElementById('result').value=n1+n2;
    }
    if(oper === '-'){
        document.getElementById('result').value=n1-n2;
    }
    if(oper === '*'){
        document.getElementById('result').value=n1*n2;
    }
    if(oper === '/'){
        document.getElementById('result').value=n1/n2;
    }
}


