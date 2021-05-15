var test = document.getElementById("the_ltr69");
test.innerHTML = "haaaaaaah";
document.getElementById("the_ltr").innerHTML = "please work uwu";


function generate_abc(){
  var alf = "abcdefghijklmnopqrstuvwxyz";
  var ran_int = Math.floor(Math.random() * alf.length);
  var inp = alf[ran_int]
  
  if(ran_int != 0 && ran_int != alf.length-1)
  {
  var res1 = alf[ran_int-1];
  var res2 = alf[ran_int+1];
  }else if (ran_int == 0)
  {
    var res1 = "z"
    var res2 = alf[ran_int+1]
  }else if (ran_int == alf.length-1)
  {
    var res1 = alf[ran_int-1]
    var res2 = "a"
  }
  //console.log("the ltr before: ",res1,"the ltr: ",inp,"the ltr after: ",res2)
  return res1,inp,res2
};
function abcs()
{
  var res = generate_ex();
  var res1 = res[0];
  var inp = res[1];
  var res2 = res[2];
  var inp_el = document.getElementById("the_ltr");
  var res1_el = document.getElementById("res1");
  var res2_el = document.getElementById("res2");
  inp_el.innerHTML = inp;
  res1_el.innerHTML = res1;
  res2_el.innerHTML = res2;
}
