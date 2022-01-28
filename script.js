let count=1;
let win = false;
function onSubmit(number){
	if(count < 10 && win == false)
	{
		var random = Math.floor(Math.random() * 100) + 1;
		console.log("generated number: " + random);

		if(number == random)
		{
			win = true;
			console.log("same")
		}
		else
			console.log("differ")

		count++;

	}
    else if(count == 10)
	{
		win = true;
		count=1;
	}

	if(win == true)
	{
		console.log("user won");
		count=1;
		document.getElementById('number').innerHTML ="You won!!";
		//return;
	}
	

}

//10 baar agr user khelega toh user sirf ek baar hi jeetga
// user ko 10 chances mae se 1 baar toh jeetna hi h, usko 1 baar jitwana hi h 