// var i = 0;

// while (i < 10){
// 	console.log('Indore');
// 	i++; // i = i+1
// }

// i = 0;
// var t = '';

// while (i<10){
// 	t += 'Indore <br>'; // t = t + 'Indore<br>'
// 	i++;
// }
// console.log(t)
// document.getElementById('hello').innerHTML = t


// var i = 0;

// while (i < 10){
// 	console.log(i);
// 	i++;
// }

// wap to print following series
// -  1  2  3  4  5  6  7  8  9  10
// -  1  4  9  16  25  36  49  64  81  100
// -  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// -  1/1  2/4  3/9  4/16  5/25  6/36  7/49  8/64  9/81  10/100


// var i = 1

// do{
// 	console.log(i)
// 	i++;
// }
// while (i<10);



// var i;

// for ( i=1 ; i <=10 ; i++ ){
// 	console.log(i);
// }

// var i;
// var s = '';

// for ( i=1 ; i <=10 ; i++ ){
// 	s = s + i;
// }
// document.getElementById('hello').innerHTML = s;


// var a = ['anurag', 'avinash', 'yash', 'vivek']
// //          0          1         2       3
// var i;
// //                4
// for(i = 0; i < a.length ; i++ ){
// 	console.log(a[i]);
// }


// for in loop

// var p = {
// 	name : 'Anurag',
// 	rollno : 1000,
// 	subject: 'Science'
// }

// var i;

// // console.log(p['rollno'])

// // console.log('surname' in p);

// for(i in p){
// 	console.log(i);
// }


// for(i in p){
// 	console.log(p[i]);
// }

var a = ['A', 'B', 'C', 'D']

console.log(a);

a.push('E');

console.log(a);

console.log(typeof a);

a[a.length] = 'F';

console.log(a);

a[9] = 'Z';
console.log(a);
console.log(a[8]);


a[2] = 'G';
console.log(a);

a.pop();

console.log(a);