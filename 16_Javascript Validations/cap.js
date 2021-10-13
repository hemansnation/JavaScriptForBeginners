function result() {
	
	name = document.getElementById('one').value

	document.getElementById('hell').innerHTML = "Hello " + name;
}

function indore(){

	var x = document.getElementById('number').value
	var y;

	if (x<1 || x>10){
		y = "Invalid Number";
	}else{
		y = "Input Okay"
	}

	document.getElementById('cat').innerHTML = y;
}

function validation() {

	var name = document.myform.name.value;
	var pass = document.myform.password.value;

	if (name=="") {
		alert("Name cannot be empty")
		return false
	} else if(pass.length < 5){
		alert("Password must be at least 5 characters long")
		return false
	}

}

function match() {
	
}