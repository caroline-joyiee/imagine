
    const myButton = document.getElementById('btn');
    myButton.onclick= function(){
        const name = prompt('Enter Your Full Name.');
        document.getElementById('name').innerText = name;
        // document.getElementById('name').style.backgroundColor ='red';
}


// Variables
const pi = 3.142;
let name ='Caroline Joy';
let age = 43;
let present = false;
console.log(name);



//Objects
const car ={
    numberPlate: 'GR-345-24',
    model:'Bentley',
    color: 'black',
    weight: 50,
    weightUnit:'KG',
    owner: {
        name:'Caroline',
        driver:{
            name:'Fiifi',
            license: ''
        }
    }
}

car.model='Porche';
console.log(car.model);

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);


car.owner.driver.name='Elizabeth';
console.log(car.owner.driver.name);




const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweet: 1
  }
  
  const tweet2 = {
    text: 'i am learning arrays today',
    likes: 8,
    shares: 3,
    retweets:0
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[0];
  
  //Date
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  
  //if/else
  
  if (today.getHours() >= 16) {
    console.log('Class has ended!');
  } else {
    console.log('Class is in session!');
  }
   //For Loop
    //start,  end,  steps
  for(let i = 0; i<= 10; i++){
    console.log('Notify Friends!', i);
  }
  
  const female = {
    person1 = {
     name: 'Akosua',
     age: 24,
    location: 'Accra',
    dob: '03/04/1999'
  },
  person2 = {
    name: 'Bertha',
    age: 43,
    location: 'Kumasi',
    dob: '02/06/1999',
  }
  person_me1 = {
    name: 'Regina',
    age: 52,
    location:'Abuja',
    dob: '12/04/1982'
  }
  
  };
  
  const male = {
    person1 = {
    name: 'Benard',
    age: 31,
    location:'Takoradi',
    dob: '23/04/1832'
  },
    person_me = {
      name: 'Benjamin',
      age: 21,
      location: 'Spintex',
      dob:'15/04/1921'
    },
  
  person9 = {
      name: 'Owusu',
      age: 21,
      location: 'Gbawe',
      dob:'23/04/1831'
    }
  
  
  }
  
const fruits =["apple","banana", "mango"];
console.log(fruits[0])

//Functions
//Defining functions

function login(username, password) {
  if (username == 'mickeymond' &&password == '1234'){
     return 'User is logged in!';
  } else if (username != 'mickeymond') {
    return 'Invalid user name';
  } else if (password != '1234'){
         return 'Invaild password';    
             } else {
    return 'Invalid username or password!';
  }
 } 
 
 //Invoking Functions
 login('mickeymond', '1234');
 
 //Basic Arithmetic
 //Addition
 12 + 24;
 
 //Substraction
 12-34;
 
 //Multiplication
 12*34;
 
 //Division
 32/12;
 
 //Modulo
 78 % 4 ;
 
 //Comparsion Operators (USE IN IF OR FOR LOOPS)
 2 === 2; //STRICTLY equality qdXDDE1USE
 
 3 !== 2;//STRICTLY NON-EQUALITY
 
 // Built-in Math Functions
 Math.round(37/23);
 Math.floor(37/24); //run down
 Math.ceil(37/24); //
 Math.random();//random number generator
 Math.max(12, 14, 89);
 
 Math.ceil(Math.random() * 1000000);
 
 
 //Order Of Operations
 2 * 1 + 3 - 4 / 3 % 2 ** 2;
 
 //Handling User Inputs
 1200 + Number('250');//use this for input

 //String Concatenation
const firstname = 'Caroline';
const lastname = 'Mortty';
firstname.trim() + ' ' + lastname.trim();


// Templates Literals
`${firstname.trim()} ${lastname.trim()}`;


//String Methods
firstname.length;
lastname.length;

`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim()+ ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

//String Conversion
String(2014);
 
//Write a function that will add apaticipant to our Google Classroom


const participants = [];


function addParticipant(email) {
  //check if email was provided
  //if(email === null || email === undefined)
  if(!email){
    return 'email not provided!'
  }
  //check if email is valid
  if (!email.includes('@')){
    return 'Invalid email provided'
  }
  //add email to the participants
  participants.push(email);
  
  //Notify them via email
  //return response
  return 'Participant added!'
}
addParticipant('mickeymond@yahoo.com');

//Arrays in Javascript
const alphabets = ['a', 'b', 'c', 'd'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split (' ');




//Write a function that will take firstname, lastname and return fullname
function fullName(firstname,lastname){
  return firstname + ' ' + lastname;
  
}

const firstname = 'Joy';
const lastname = 'Caroline';
console.log(firstname ,lastname);

//Write a function that will take user with firstname, lastname and return fullname
const user = {
  firstname: 'Joe',
  lastname: 'Ganner'
}
function fullname(user){
  return {
    //spread... gives more details of your function
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}

fullname(user);

//Array map
const users = [
  {firstname: 'Linda', lastname:'Parker'},
  {firstname:'Mark', lastname:'Twaine'},
  {firstname:'Oliver', lastname: 'Queen'},
  {firstname:'Stephen', lastname: 'Grider'},
  {firstname:'Elon', lastname: 'Musk'}
  
]
//use array map when using many objects
users.map(fullname);

//Map and return squares of numbers
function square(number){
  return number ** 2;
}
const numbers =[0,1,2,3,4,5]
numbers.map(square);

//Filter and return even numbers

function even(number){
  return number % 2 === 0;
}

//map will not reduce the lenght of the array but filter will
numbers.filter(even);


//Objects in JavaScript
//Write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else false
// const user ={
//   name:'Martin King',
//   dateOfBirth: '1990-06-12'
// }
function users (name, dateOfbirth){
 return users;
} 
if(users == name && user == dateOfBirth){
  "true";
}else{
  "false";
}


//another try
function isBirthday (user){
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  // console.log(birthDate.getMonth(), today.getMonth());
  // console.log(birthDate.getDate(), today.getDate());
  
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()){   
       return true;
      }else{
    return false;
  }
 
}

isBirthday(user);



// Write a function that takes a user with name and dateOfBirth and  returns birthday with their birthday is today else returnyour day

function yourDay(){
  if (isBirthday){
    // return "Happy Birthday" + ' ' + user.name
    return `Happy Birthday, ${user.name}`;
  }else{
    return "Its not your day"
  }
  
  
  
}

yourDay();


//classes in javascript

//bottle class
class Bottle {
  constructor(color, shape, volume) {
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }
  getInfo() {
     return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
}

const bottle1 = new Bottle('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle('yelow', 'square', 100);
bottle2.getInfo();


//Obects Methods
const bottle = {
  color: 'red',
  shape: 'square',
  volume: 100,
  //anonymous function
  getInfo:function(){
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
  
}
bottle.getInfo();
bottle.color;




















 
 
 
 
 
 
 
 
 
 


  
  
  
  
  
  
  
  
