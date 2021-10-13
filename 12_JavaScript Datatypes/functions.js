var s = "Indoreo"
//   012345
//document.getElementById('add').innerHTML = s.length

//document.getElementById('add').innerHTML = s.indexOf("o")

// document.getElementById('add').innerHTML = s.lastIndexOf("o")

//       01245
var r = "Apple is the best company"
//                              -1

//document.getElementById('add').innerHTML = r.slice(4, 14) // less than one

// document.getElementById('add').innerHTML = r.slice(-14,-1)

//document.getElementById('add').innerHTML = r.slice(-1,-14)

// document.getElementById('add').innerHTML = r.slice(-14)

//replace
// var rep = "company Apple is the best company "

// document.getElementById('add').innerHTML = rep.replace("company", "phone")



// var rep = "company Apple is the best company "

// document.getElementById('add').innerHTML = rep.replace(/company/g, "phone") //global match


// var i = "India"

// document.getElementById('add').innerHTML = i.toUpperCase()

// document.getElementById('add1').innerHTML = i.toLowerCase()


// var x = "Hello"
// var y = "Man"

// document.getElementById('add').innerHTML = x.concat(" ", y)


// z = "          hello world   "
// document.getElementById('add').innerHTML = z.trim()

// document.getElementById('add1').innerHTML = z.trim().length



// z = '1+2+3+4+5'

// document.getElementById('add').innerHTML = z.split("+")

// c = "Hello"

// document.getElementById('add1').innerHTML = c.split("")


// Numbers

// var x = 8.569

// document.getElementById('add1').innerHTML = x.toFixed(6)



// var x = 8.569

// document.getElementById('add1').innerHTML = x.toPrecision(6)



// document.getElementById('add1').innerHTML = Number(true) // 1

// document.getElementById('add1').innerHTML = Number(false) //0

// document.getElementById('add1').innerHTML = Number("10") // 10

// document.getElementById('add1').innerHTML = Number(" 10 ") // 10

// document.getElementById('add1').innerHTML = Number("10 50") // NaN - Not a Number

// document.getElementById('add1').innerHTML = Number("abc") // NaN



// document.getElementById('add').innerHTML = parseInt("10.33")

// document.getElementById('add1').innerHTML = parseInt("abc")


// document.getElementById('add1').innerHTML = parseFloat("10.55")


// array

// var a = ["X", "A", "B"]
// //        0    1    2
// // a[0]   a[1]   a[2]
// document.getElementById('add').innerHTML = a[3]


// var b = [1, 2, "A"]


// document.getElementById('add1').innerHTML = b



var student = {
	name : 'Anurag',
	rollno: 154,
	marks: 78
}


document.getElementById('add1').innerHTML = student['marks']

