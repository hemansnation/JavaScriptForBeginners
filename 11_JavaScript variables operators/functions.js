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


//strings

var x = 'Hello There'
var y = "It's okay"
var z = 'It"s Okay'

var a = 'Hello "Anshul"'

// document.getElementById('fill').innerHTML = a
var b = "Indore"

document.getElementById('fill').innerHTML = a.length

