var res = " ";
function myFunction(x) {

	if(x == 'C') res = " ";
	else res+=x;
	document.getElementById("resultDis").innerHTML = res;
}

function operate()
{
	document.getElementById("resultDis").innerHTML = eval(res);
	res = " ";
}