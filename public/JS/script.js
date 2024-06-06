
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


  
  
  
  
  
  
  
  
