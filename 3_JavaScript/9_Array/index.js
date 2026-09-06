let arr=[1,2,3,4,"Hello",true];

console.log(arr);
console.log(arr.length);
console.log(arr[4]);

arr[0]="one";

console.log(arr)//arrays are mutable

console.log(typeof arr);// Arrays are objects

console.log(arr.toString());

console.log(arr.join(" and "))

console.log(arr.pop());// removes the last element from the arr and returns it ,it alters the original array

console.log(arr.push("New"));// It add the specified one at the end of the array and returns the updated length of the array

console.log(arr);

console.log(arr.shift());// removes the first element and returns it , it updates the original one

console.log(arr.unshift("Oggy"));//add the element at the beginning and returns the updated length of the array

console.log(arr);

console.log(delete arr[5]);//returns true 
console.log(arr);//it only deletes the value but not the memory allocated to it so it appears empty
console.log(arr[5]);//displays undefined

a1=[78,89,987];
console.log(arr.concat(a1,["erfer","wefqwe"]))

console.log(arr.sort());//returns the sorted array and also modifies the original array
//this takes in an additional compare function also and sorts according to it if provided
console.log(arr);

arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.splice(4,3));//starting from index 4 removes 3 elements and returns them and updates the original array
console.log(arr)

arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.splice(4,3,222,333));//removes elements but also adds the 222 and 333 there
console.log(arr)


arr=[0,1,2,3,4,5,6,7,8,9,10];
console.log(arr.slice(4));//removes elements starting from 4 till the end and returns them(as list) and does not update the list
console.log(arr);

arr=[0,1,2,3,4,5,6,7,8,9,10];
console.log(arr.slice(4,6));//removes and returns list of elements starting from 4 till index 6 excluding 6th one
console.log(arr);

arr=[1,4,3,27,3,100]
console.log(arr.reverse());//just reverses the order of how you have created them
console.log(arr);