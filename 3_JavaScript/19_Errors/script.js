let a =prompt("Enter a number")
let b=prompt("Enter other number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("You are not allowed to do this")//throw a syntax error in the console if the user enters a non number ,
    // when an error is thrown then the script stops there itself it doesnt go further
}
a=parseInt(a)
b=parseInt(b)
// console.log(a+b*x)//this will throw an error as x is not defined if you want to handle it then trycatch is used

function main(){

    try {
        console.log(a+b*x);
        return true
    } catch (error) {
        console.log(("There was an unexpected error"));
        return false
    }
    finally{
        console.log("Files are being closed");
    }
    //normally once returned from a function the code below it is not executed but,if you want to execute the code even after returning (like closing files and breaking the connection) in such cases finally is used, finally will be executed ven after returning but it wont be executed if an error is throwed
}

let c=main()