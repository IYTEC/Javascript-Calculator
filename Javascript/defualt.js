function calculator(object){
   // Initialize values and set the parameters
	var one, two, three, four, five, six, seven, eight, nine, zero, ac, ce, equalto, minus, times, plus, divide, equalto, ans;
	one = document.getElementById("one").value;
	two = document.getElementById("two").value;
	three = document.getElementById("three").value;
	four = document.getElementById("four").value;
	five = document.getElementById("five").value;
	six = document.getElementById("six").value;
	seven = document.getElementById("seven").value;
	eight = document.getElementById("eight").value;
	nine = document.getElementById("nine").value;
	zero = document.getElementById("zero").value;
    dot = document.getElementById("dot").value;
    plus = document.getElementById("plus").value;
    minus = document.getElementById("minus").value;
    times = document.getElementById("times").value;
    modulo = document.getElementById("modulo").value;
    divide = document.getElementById("divide").value;
    ac = document.getElementById("ac").value;
    ce = document.getElementById("ce").value;
    
    var input = document.getElementById("input");
    
    if(object.value !== ce){
        input.value = input.value.concat(object.value);
    }
    if(object.value === ac){
        input.value = "";
    }
    if(object.value === ce){
        var tempval = input.value.split("");
        tempval.pop();
        tempval = tempval.join("");
        input.value = "";
        input.value = input.value.concat(tempval);
        tempval = "";
    }
    
}

function equalto(object){
    var input = document.getElementById("input");
    input.value = eval(input.value);
}
  