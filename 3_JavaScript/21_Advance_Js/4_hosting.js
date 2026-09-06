// console.log(a)//this would not give an error

// {
//     console.log(a)//though declared afterwards due to hosting(only applicable to var the interpretor moves its declaration(only declaration var a but not its value so it shows undefined not its value) to the top of that particular block) it shows no error
//     console.log(b)//error


//     var a=1;
//     let b=2;
// }


// console.log(a)//this would give an error

function hello(){
    console.log(a)//though declared afterwards due to hosting(only applicable to var the interpretor moves its declaration(only declaration var a but not its value so it shows undefined not its value) to the top of that particular block) it shows no error
    console.log(b)//error


    var a=1;
    let b=2;
}
hello()

//function is automatically hosted but not possible if declared with const or let