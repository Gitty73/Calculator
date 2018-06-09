var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var mul = document.querySelector("#mul");
var div = document.querySelector("#div");
var total;
var num1, num2, Result;

function getValue(){
	num1 = Number(document.querySelector("#n1").value);
	num2 = Number(document.querySelector("#n2").value);
	Result = document.querySelector("#result");
};

add.addEventListener("click", function(){
	getValue();
	total = num1 + num2;
	Result.value = total;
});

sub.addEventListener("click", function(){
	getValue();
	total = num1 - num2;
	Result.value = total;
});

mul.addEventListener("click", function(){
	getValue();
	total = num1 * num2;
	Result.value = total;
});

div.addEventListener("click", function(){
	getValue();
	total = num1 / num2;
	Result.value = total;
});
