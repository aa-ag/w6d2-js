//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.keys(person3))
console.log(Object.values(person3))

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name
    this.age = age
    // .printInfo method
    this.printInfo = () => {
        return `Name: ${this.name} -- Age: ${this.age}.`
    }
    // .addAge method user imput
    this.addAgeInput = (age=0) => {
        return `Magic trick! Now ${this.name} is ${this.age + age} years old`
    }
}

let a_person = new Person('Amy Poehler', 48)
console.log(a_person.printInfo())

let another_person = new Person('Will Pherrel', 52)
console.log(another_person.printInfo())

console.log(a_person.addAgeInput(10))
console.log(another_person.addAgeInput(10))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBig = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBig('intoxicated').then((result) => {
    console.log("Big Word!")
}).catch((error) => {
    console.log("Small Word :)")
})

isBig('tipsy').then((result) => {
    console.log("Big Word!")
}).catch((error) => {
    console.log("Small Word :)")
})