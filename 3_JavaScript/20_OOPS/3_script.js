class User{
    constructor(n){
        this.name=n;
    }

    get name(){
        // return this.name

        // return this._name//this will work
        //a getter wont work without a settor 
        //if there is no setter then there will be an error 
        //if there is any error in setter like before(this.name was used so Jhon was not set to this.name) in such cases the getter will return undefined
        return `Sir ${this._name}`
    }

    set name(value){
        if(value.length<4)
            console.log("Name is too short")
        else{

            // this.name=value this will give an error
            this._name=value
        }
    }
}

let jhon=new User("Jhon")//here "Jhon" will go to setter and in the setter it is checked whether the length is > 4 if true then name is set
// setter is automatically called when you are setting the name or when you update the name(here applicable to other properties also)

console.log(jhon.name)//get is automatically called when that particualar property specified with get is called (here name)

// jhon=new User("Jhon H")// one way of updating name
jhon.name=""
jhon.name="Jhon H"
console.log(jhon.name)