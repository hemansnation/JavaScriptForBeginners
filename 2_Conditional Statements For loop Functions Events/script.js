// conditional statements


if (10 > 51){
	console.log("True");
	document.getElementById('indore').innerHTML = "True";
}else {
	console.log("This is False");
	document.getElementById('indore').innerHTML = "False";
}


function addition(){
	console.log("Functions Hello");
}

addition()


function multiply(){
	return "Hello from multiply";
}


document.getElementById('goa').innerHTML = multiply();


//alert("This is a pop up!!");


// for loop
 var i;

for ( i = 1 ; i <= 5 ; i++){
	console.log(i);
}