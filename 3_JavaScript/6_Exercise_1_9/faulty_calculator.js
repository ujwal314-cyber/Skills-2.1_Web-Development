let ch;

console.log("1:Add\n2:Subtract\n3:Multiply\n4:Divide\n5:Exponentiation");

let a, b;

let n=Math.random();

if (n < 0.1) {
    switch (ch) {
        case 1:
            console.log(a + b);
            break;

        case 2:
            console.log(a - b);
            break;

        case 3:
            console.log(a * b);
            break;

        case 4:
            console.log(a / b);
            break;

        case 5:
            console.log(a % b);
            break;

        case 6:
            console.log(a ** b);
            break;

        default:
            console.log("Invalid choice");
    }
}

else{
    switch (ch) {
        case 1:
            console.log(a - b);
            break;

        case 2:
            console.log(a / b);
            break;

        case 3:
            console.log(a + b);
            break;

        case 4:
            console.log(a ** b);
            break;

        case 5:
            console.log(a * b);
            break;

        case 6:
            console.log(a % b);
            break;

        default:
            console.log("Invalid choice");
    }
}