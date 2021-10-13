'use strict'; 
(function() {

	// display("Hello World");

	// var alpha = new Array();
 //  //alpha = Array() //python	


 //  	display(alpha);

	// // constructor functions

	// function Person(firstname, lastname, age){

	// 	this.firstname = firstname;
	// 	this.lastname = lastname;
	// 	this.age = age;
	// 	this.isAdult = function(){
	// 		return this.age > 18;
	// 	}
	// }

	// var anurag = new Person('Anurag','Sharma', 21);
	// display(anurag.firstname);
	// display(anurag.firstname+ " "+anurag.lastname);

	// var yash = new Person('Yash', 'Jain', 16);
	// display(yash.isAdult());

	// display(yash['lastname']);

	// //for in
	// for (var name in anurag){
	// 	display(name + ": " +anurag[name]);
	// }

	// var  let 
	//var
	// no block scope, can be redeclare anywhere, can be used and reassigned anywhere

	//let
	//block scope, cannot be redeclare within a scope, can be reassigned within scope

	
	// function run(){
	// 	var a = "Indore";
	// 	let b = "Goa";

	// 	display(a);
	// 	display(b);

	// 	{
	// 		var x = "Mumbai";
	// 		let y = "Vizag";
	// 		display(x);
	// 		display(y);
	// 	}

	// 	// display(x);
	// 	// display(y); // Referance Error
	// 	// console.log(y);

	// 	// console.log(f);
	// 	// var f = "Some";

	// 	// console.log(g);
	// 	// let g = "Thing";

	// }

	// run()

	// var abc = "ABC";
	// let xyz = "XYZ";

	// console.log(window.abc);
	// //console.log(window.xyz); //undefined



	// 'use strict';
	// var a = 10;
	// var a = 20;

	// let b = 50;
	// let b = 70; //SyntaxError : 


	//Classes

	class createPerson {

		constructor(firstname, lastname, age){

			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;

		}

		get fullname(){
			return this.firstname + ' ' + this.lastname;
		}

		set fullname(fullname){
			var nameparts = fullname.split(' ');
			this.firstname = nameparts[0];
			this.lastname = nameparts[1];
		}

		isAdult(){
			return this.age >= 18;
		}

	}

	
	var yash = new createPerson('Yash', 'Sharma', 21);

	display(yash);

	display(yash.fullname);

	yash.fullname = 'Rohit Kohli';

	display(yash.fullname);

	display(yash.isAdult());




})();