// captcha generator
function CaptchaGenerator(){
	var alpha = new Array('A','B','C','D','E','F', 'a','b','c','d')

	var a = alpha[Math.floor(Math.random() * alpha.length)]
	var b = alpha[Math.floor(Math.random() * alpha.length)]
	var c = alpha[Math.floor(Math.random() * alpha.length)]
	var d = alpha[Math.floor(Math.random() * alpha.length)]
	var e = alpha[Math.floor(Math.random() * alpha.length)]

	var result = a +' '+b+' '+c+' '+d+' '+e;
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


//removeSpace

function removeSpace(string) {
	return string.split(' ').join('')
	//'a b c d' -- array(a,b,c,d) -- 'abcd'
}