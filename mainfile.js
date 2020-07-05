function dis(val) {
  document.getElementById("result").value += val;
}
function clr() {
  document.getElementById("result").value = "";
}
function solve() {
  let x = document.getElementById("result").value;
  var i = x.includes("√");
  var i1 = x.includes("%");
  var i2 = x.includes("+");
  var i3 = x.includes("-");
  var i4 = x.includes("*");
  var i5 = x.includes("/");
  if (i2 == true) {
    add(x);
  }
  if (i3 == true) {
    sub(x);
  }
  if (i4 == true) {
    mul(x);
  }
  if (i5 == true) {
    div(x);
  }
  if (x < 0) {
    abs(x);
  }
  if (i == true) {
    sqrt(x);
  }
  if (i1 == true) {
    per(x);
  }
}
function add() {
  var z = document.getElementById("result").value;
  var r = z.split("+");

  var num1 = parseInt(r[0]);
  var num2 = parseInt(r[1]);
  output = num1 + num2;
  output = output.toString();
  document.getElementById("result").value = output;
  document.getElementById("result").disabled = true;
}
function sub() {
  var z = document.getElementById("result").value;
  var r = z.split("-");

  var num1 = parseInt(r[0]);
  var num2 = parseInt(r[1]);
  output = num1 - num2;
  output = output.toString();
  document.getElementById("result").value = output;
  document.getElementById("result").disabled = true;
}
function mul() {
  var z = document.getElementById("result").value;
  var r = z.split("*");

  var num1 = parseInt(r[0]);
  var num2 = parseInt(r[1]);
  output = num1 * num2;
  output = output.toString();
  document.getElementById("result").value = output;
  document.getElementById("result").disabled = true;
}
function div() {
  var z = document.getElementById("result").value;
  var r = z.split("/");

  var num1 = parseInt(r[0]);
  var num2 = parseInt(r[1]);
  output = num1 / num2;
  output = output.toString();
  document.getElementById("result").value = output;
  document.getElementById("result").disabled = true;
}
function sqrt() {
  var z = document.getElementById("result").value;
  var r1 = Number.isInteger(z);
  
  y = z.replace("√", "");
  output = Math.sqrt(y);

  document.getElementById("result").value = output;
  document.getElementById("result").disabled = true;
}

function per() {
  var z = document.getElementById("result").value;
  var r = z.split("%");

  var num1 = parseInt(r[0]);
  var num2 = parseInt(r[1]);
  output = (num1/100)*num2;
  output = output.toString();
  document.getElementById("result").value = output;
  document.getElementById("result").disabled = true;
}
function abs() {
  let z = document.getElementById("result").value;
  if (z < 0) {
    z = z * -1;
  }
  document.getElementById("result").value = z;
  document.getElementById("result").disabled = true;
}

//code for form validation

function formvalidation() {
  var no = document.getElementById("no").value;
  var phoneno = /^\d{10}$/;
  if (no.match(phoneno)) {
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
  var x = document.getElementById("email").value;

  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Please enter a valid e-mail address:");
    return false;
  }

  var name = document.getElementById("name").value;
  if (!isNaN(name.charAt(0))) {
    alert("First Character Cant be number in Name.");
  }
}
// code for palindrome
function pali() {
  var string = document.getElementById("pali").value;
  var i,
    st = "";
  for (i = string.length - 1; i >= 0; i--) {
    st += string[i];
  }
  var n = st.localeCompare(string);
  if (n == 0) {
    alert("Palindromic String");
    return true;
  } else {
    alert("Not Palindromic String");
    return false;
  }
}
// code for anagram
function anagram() {
  var anag1 = document.getElementById("ana1").value;
  var anag2 = document.getElementById("ana2").value;
  var a1 = anag1.toLowerCase();
  var a2 = anag2.toLowerCase();
  var arr = a1.split(" ").join("");
  var sorted = arr.split("").sort();
  var ip1 = sorted.join("");

  var arr = a2.split(" ").join("");
  var sorted = arr.split("").sort();
  var ip2 = sorted.join("");
  var p = ip2.localeCompare(ip1);

  if (p != 0) {
    alert("Not Anagram");
    return false;
  } else {
    alert("Anagram");
    return true;
  }
}

//code for random

function rand1() {
  document.getElementById("input1").value = Math.floor(Math.random() * 1000);
}
function rand2() {
  document.getElementById("input2").value = Math.floor(Math.random() * 1000);
}

//code for play

function play() {
  var a = document.getElementById("input1").value;
  var b = document.getElementById("input2").value;
  if (a == "") {
    alert("please generate number:");
    return false;
  }
  var aa = sub_fun(a);
  var bb = sub_fun(b);
  if (aa == bb) {
    alert("TIE :");
    return false;
  }

  if (aa == 1 && bb == 2) {
    alert("Inputs are 'Human' and 'Cockroach',so 'Human' survives.");
    return false;
  }
  if (aa == 2 && bb == 1) {
    alert("Inputs are  'Cockroach' and  'Human',so 'Human' survives.");
    return false;
  }
  if (aa == 1 && bb == 3) {
    alert("Inputs are   'Human' and 'Bomb',so 'Bomb' survives.");
    return false;
  }
  if (aa == 3 && bb == 1) {
    alert("Inputs are   'Bomb' and 'Human',so 'Bomb' survives.");
    return false;
  }

  if (aa == 2 && bb == 3) {
    alert("Inputs are   'Cockroach' and 'Bomb',so 'Cockroach' survives.");
    return false;
  }
  if (aa == 3 && bb == 2) {
    alert("Inputs are   'Bomb' and 'Cockroach',so 'Cockroach' survives.");
    return false;
  }
}

function sub_fun(x) {
  if (x >= 0 && x <= 250) {
    return 1;
  }
  else if (x > 250 && x <= 500) {
    return 2;
  }
  else if (x > 500 && x <= 1000) {
    return 3;
  }
}