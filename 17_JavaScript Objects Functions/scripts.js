//Literal Objects

function india() {
	var name = "Goa";  //local variable
	console.log(name);
}
india()
console.log(name); //name is undefined

var city = 10; //global variable

function kasol() {
	console.log(city)
}
kasol()


//automatically global variable

gallery()

function gallery() {
	n = 'volvo'
}

console.log(n);


var person = {
	firstname:"Anurag",
	lastname:"Sharma",
	age:21,
	name:function(){
		return 'Hello World'
	}
};

console.log(person);
console.log(person.firstname);
console.log(person.name)
console.log(person.name())

person.age = 18
console.log(person.age);
console.log(person)


// this - refers to current object


var person = {
	firstname:"Anurag",
	lastname:"Sharma",
	age:21,
	name:function(){
		return this.firstname +" "+ this.lastname;
	},
	x : function(){
		return this
	}
};

console.log(person.name())
console.log(person.x())


function registerUser(x, y){
	var person = {
		firstname: x,
		lastname:y,
		age:19,
		isAdult:function(){ 
			return this.age >= 18;
		}
	}

	console.log(person.firstname + " "+ person.lastname)
	console.log(person.isAdult())
}

registerUser("Yash","Ram");

var session = {
	firstname:"Anurag",
	lastname:"Sharma",
	age:21,
	name:function(){
		return this.firstname +" "+ this.lastname;
	},
	x : function(){
		return this
	}
};

console.log(Object.keys(session))


// ==
// ===
// Object.is(one, two)

var person1 = {
	firstname:'Yash',
	lastname:'Sharma'
}

var person2 = {
	firstname:'Yash',
	lastname:'Sharma'
}

console.log(person1 == person2);

console.log(person1 === person2);

console.log(Object.is(person1,person2)); // +0 does not equal -0


var person3 = person1;

console.log(person1 === person3);


var health = {
	height :68,
	weight:150
}

var person = {
	name: 'Indra',
	age:40
}

function stats(person, health){
	return Object.assign({},person, health)
}

var a = stats(person, health)
console.log(a)
console.log(person)
console.log(health)
