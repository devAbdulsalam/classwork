
// Question one

const ArrayOfNumbers = [10, 20, 30, 40, 50, 60]
// A
const sumOfNumbers = ArrayOfNumbers.reduce((currenttotal, item) =>{
    return item + currenttotal
}, 0)
console.log(sumOfNumbers)



const Arrayofstring = [ "i", "am", "what", "i", "am"]
// B
const reverseArray = () =>{
  const reversedNumber =  Arrayofstring.reverse()
    console.log(reversedNumber)
}
reverseArray()

// C
const sentence = document.getElementById("sentence");
const reversebtn = document.getElementById("reversebtn");
const removebtn = document.getElementById("removebtn");
const showQ1Result = document.getElementById("showQ1Result");

removebtn.addEventListener('click', () =>{
    const mysentence = sentence.value
    const result = mysentence.replaceAll(' ', '');
    showQ1Result.innerHTML = result
})

reversebtn.addEventListener('click', () =>{
    const mysentence = sentence.value
    const result = mysentence.split(' ').reverse()
    showQ1Result.innerHTML = result.join(" ")
})


// Question two

const getCats = async () => {
    fetch('https://api.thecatapi.com/v1/breeds?limit=1&api_key=7fa7eb6b-83b3-4a7a-871e-f26c3161b9ee')
    .then((response) => response.json())
    .then((data) => displaycats(data));

}  
const displaycats = (data) => {
    console.log(data)
    data.map(function(cat){
        document.querySelector(".catName").innerHTML = cat.name;
        document.querySelector(".catImage").src = cat.image.url;
    })
}
getCats()


// Question Three

class user{
    constructor(firstname, lastname, age, programingLanguage){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.programingLanguage = programingLanguage
    }
    getUser = () => {
        return(`my name is ${this.firstname} ${this.lastname}, i am  ${this.age} years old, i am engage with ${this.programingLanguage}`)
    }
}


const firstUser = new user("musa", "abdul", 10, "Javascript")
console.log(firstUser.getUser())
console.log(firstUser.firstname)

const userbtn = document.getElementById("userbtn");
const showUser = document.getElementById("showUser");


userbtn.addEventListener('click', () =>{
const firstname = document.getElementById("fname").value;
const lastname = document.getElementById("lname").value;
const age = document.getElementById("age").value;
const programingLanguage = document.getElementById("plang").value;
const newUser = new user(firstname, lastname, age, programingLanguage)
showUser.innerHTML = newUser.getUser()
clearFields() 

})

const clearFields = () =>{
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("age").value = "";
        document.getElementById("plang").value = "";
}