


// variable declaration
var x; 
x = "Yash This side!"

document.getElementById('yash').innerHTML = x;


var y, z;

y = 5
z = 10

console.log(y+z)


var x, y, z;

x = 10
y =20
z = x + y

var a = 3.5
var b = "John Cena"
var c = 'The Rock'
var d = 10

document.getElementById('add').innerHTML = z;

document.getElementById('some').innerHTML = "<b>" + a +"<br>" + b +" " + c +" " + d + "<b>";

f = document.getElementById('in').innerHTML

document.getElementById('in').innerHTML = f + " is the best"



// operators
// + - * / % ++ --

a = 10
a++ // a = a + 1   a += 1
console.log(a)

//assignment operator

// =  +=  -=  *=  /=  %=  

b = 10
b *= 4 // b = b * 4
console.log(b)

// relational operators / comparison operators
// ==  !=  >  <  >=   <=  ===  !==
console.log(10 == 10)
console.log(10 != 10)


// comments

//single

/*
multi
*/

// conditional statements

if(10 > 5){
	console.log();
}else{
	console.log();
}



// for loop
var i;

for ( i=1 ; i <=10 ; i++ ){
	console.log(i);
}


//functions

function rules(){

	return "this is from the rules function"
}


console.log(rules()) //calling of a function


function addition(x, y){
	z = x + y
	return z
}


console.log(addition(10, 20))


function vision(a){
	a = a + " from Vision"
	return a
}

document.getElementById('stone').innerHTML = vision("Ram") // "Ram form Vision"


var a = 'Hello "Anshul"'

document.getElementById('fill').innerHTML = a.length


//events

onclick





// Validation 1

<html>

<body>  
<form name="myform" method="post" action="some.html" onsubmit="return validateform()" >  
Name: <input type="text" name="name"><br/>  
Password: <input type="password" name="password"><br/>  
<input type="submit" value="register">  
</form>

<script>  
function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  
</script>

</body>
</html>



// validation 2

<script type="text/javascript">  
function matchpass(){  
var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}  
}  
</script>  
  
<form name="f1" action="register.jsp" onsubmit="return matchpass()">  
Password:<input type="password" name="password" /><br/>  
Re-enter Password:<input type="password" name="password2"/><br/>  
<input type="submit">  
</form>  



//captcha generator

<html>
<head>
	<title>Captcha</title>
	<script type="text/javascript" src="cap.js"></script>
</head>
<body onload="CaptchaGenerator()">

	<h1>Captcha Generator</h1>

	<center>

		<input type="text" id="mainCaptcha" disabled /><br>
		<input type="button" id = "refresh" value="Refresh" onclick="CaptchaGenerator()">

		<br>
		<br>

		<input type="text" id="textInput" ><br>
		<input type="button" id = "button1" value="Check" onclick="alert(IsValid())">

	</center>

</body>
</html>


js

// captcha generator
function CaptchaGenerator(){
	var alpha = new Array('A','B','C','D','E','F', 'a','b','c','d')

	var a = alpha[Math.floor(Math.random() * alpha.length)]
	var b = alpha[Math.floor(Math.random() * alpha.length)]
	var c = alpha[Math.floor(Math.random() * alpha.length)]
	var d = alpha[Math.floor(Math.random() * alpha.length)]
	var e = alpha[Math.floor(Math.random() * alpha.length)]

	var result = a+b+c+d+e;
	console.log(Math.random())
	console.log(Math.random() * alpha.length)
	console.log(Math.floor(Math.random() * alpha.length))

	document.getElementById('mainCaptcha').value = result;
}


//IsValid
function IsValid(){
	var one = removeSpace(document.getElementById('mainCaptcha').value);
	var two = removeSpace(document.getElementById('textInput').value);

	if (one==two){
		return true
	}else{
		return false
	}
}
