class Animal{
    constructor(n){
        this.name=n//this refers to the object .name - you are setting a property and assigning n to it
        console.log("Object is created....");//constructor is function which is executed always
    }

    eats(){
        console.log("I am eating");
    }

    sleeps(){
        console.log("I am sleeping");
    }
}

let rabbit=new Animal("Bunny")
console.log(rabbit);
console.log(rabbit.name);
rabbit.eats()

//now you want to add lion as a class but it also has some features that of animal so instead of copy pating you can add animal as a prototype to lion using extends

class Lion extends Animal{
    // constructor(n){
    //     this.name=n;
    //     console.log("Object is created.... and he is a lion");
    // }
    // just writing the above will give an error because when you extend you must call the constructor of the super class also before you run the constructor of the child class

    constructor(n){
        super(n)
        console.log("Object is created.... and he is a lion");
    }

    sleeps(){
        console.log("A lion sleeps");//this is method overriding , sleeps already exists in animal but yuo want to modify and you can do that , so when you call the method sleeps the method inside lion will be called not the one inside animal
    }

    l_eats(){
        super.eats()//super keyword when you want to run a super class method
        console.log("I am a carnivore");
    }
}

let l=new Lion("Simba")
l.sleeps()
l.l_eats()

console.log(l instanceof Lion);//checks whether the object is a instance of a particular class or not
console.log(l instanceof Animal);//returns true as the class to which it belongs(Lion) is a child class of Animal so inderectly it is an instance of animal
console.log(Lion instanceof Animal);//false
console.log(rabbit instanceof Lion);
console.log(rabbit instanceof Animal);