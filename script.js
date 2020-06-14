let elbutton = document.getElementById('generate_password');
let elclip = document.getElementById('clipboard');
let elpassword = document.getElementById("password");
class password_generator{
    constructor(lower, higher, number, symbol){
        this.lower = lower;
        this.higher = higher;
        this.number = number;
        this.symbol = symbol;
    }

     random_lower(){
        return String.fromCharCode(Math.floor(Math.random() * (26) + 97));
    }
     
    random_higher(){
        return String.fromCharCode(Math.floor(Math.random() * (26) + 65));
        
    }

    random_number(){
        return String.fromCharCode(Math.floor(Math.random() * (10) + 48));
    }

    random_symbol(){
        let sym = '!@#$%^&*()_+{}|[]:'
        let randomNum = Math.floor(Math.random() * (sym.length) + 0);
        return sym[randomNum];
    }

     
}

let newPass = new password_generator();
let pass_obj = {
    lowerPass: newPass.random_lower,
     higherPass: newPass.random_higher,
     numberPass: newPass.random_number,
     symPass: newPass.random_symbol
 };

 elbutton.addEventListener('click', () =>{
    
    let ellength = document.getElementById('passowrd_length').value;
    let elnumber = document.getElementById("number");
    let ellowercase = document.getElementById('lower_case');
    let eluppercase = document.getElementById('upper_case');
    let elsymbol = document.getElementById("symbol");
    let lengthint = parseInt(ellength);
    let checknum = elnumber.checked;
    let lowerchecked = ellowercase.checked;
    let upperchecked = eluppercase.checked;
    let symchecked = elsymbol.checked;

    if  (!checknum && !lowerchecked && !upperchecked && !symchecked){
        alert('Please click at least one checkbox!!');
    } else{
   elpassword.value =  password_gen(modifyObj(pass_obj, lowerchecked, upperchecked, checknum, symchecked), lengthint);
   }

})
elclip.addEventListener('click', () => {
 let password = elpassword;
 password.select();
 password.setSelectionRange(0,99999);
 
 document.execCommand('copy');
 
 
})

function modifyObj (obj, low, high, num, sym){
    let modified = obj 
    
    
    if(!low){
    delete modified.lowerPass;
    } else if (!modified.hasOwnProperty('lowerpass')){
        modified.lowerPass = newPass.random_lower;
    }
    if(!high){
        delete modified.higherPass;
        } else if (!modified.hasOwnProperty('higherPass')){
            modified.higherPass = newPass.random_higher;
        }
   
        if(!num){
            delete modified.numberPass;
            } else if (!modified.hasOwnProperty('numberPass')){
                modified.numberPass = newPass.random_number;
            }
       
            if(!sym){
                delete modified.symPass;
                } else if (!modified.hasOwnProperty('symPass')){
                    modified.symPass = newPass.random_symbol;
                }
           
    
   

    
    
    return modified;

}

   
function password_gen(pass, num){
    
    let lenght = Object.keys(pass).length;
    let password = ""
    for(let i= 0; i < num; i++){
      let num = Math.floor(Math.random() * (lenght) + 0);
      let prop = Object.keys(pass)[num];
      password += pass[prop]();
    }

     return password;
   }

console.log(newPass.random_lower());
console.log(newPass.random_number());
console.log(newPass.random_higher());
console.log(newPass.random_symbol());


