var number=10;
var expression1=true;
var expression2=true;
var Person = {
    name : "jack",
    occupation : "electrician",
    age : 25
}
function myFunction() {
    document.getElementById("demo").innerHTML = Math.floor(Math.random()*10000/100);
}
function getVariable()
{
    var Name = document.getElementById("change");
    var currentclass = Name.className;

    if(currentclass="content")
        document.getElementById("change").setAttribute("class","content2");
    else {
        document.getElementById("change").setAttribute("class", "content");
    }
}
function change_colour(){
    var NAME = document.getElementById("change");
    var currentClass = NAME.className;
    if (currentClass == "content") { // Check the current class name
        NAME.className = "content2";   // Set other class name
    } else {
        NAME.className = "content";  // Otherwise, use `second_name`
    }
}
function change_background()
{
    document.body.style.backgroundColor="#ff5555";
}
function square(){
    //var numbersq = Number(document.getElementById("input1"));
   // numbersq=numbersq*numbersq;
    document.getElementById("square").innerHTML = document.getElementById('input1').value**2;
}
function sum()
{
    document.getElementById("sum0").innerHTML=+document.getElementById('sum1').value + +document.getElementById('sum2').value + +document.getElementById('sum3').value;
}
function getName()
{
    document.getElementById("nameish").innerHTML = Person.name;
    document.getElementById("occupation").innerHTML=Person.occupation;
    document.getElementById("age").innerHTML=Person.age;
}
function changedetails()
{
    if(document.getElementById("changename").value!=null && document.getElementById("changename").value!="")
        Person.name = document.getElementById("changename").value;
    if(document.getElementById("changeocc").value!=null && document.getElementById("changeocc").value!="")
        Person.occupation = document.getElementById("changeocc").value;
    if(document.getElementById("changeage").value!=null && document.getElementById("changeage").value!=0)
        Person.age = document.getElementById("changeage").value;
    getName();
}
function fizzy(){
    var row = "";
    for(var i=1;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
            //document.write("FizzBuzz ");
            row = row + "FizzBuzz ";
        else
            if(i%3==0)
                //document.write("Fizz ");
                row = row + "Fizz ";
            else
                if(i%5==0)
                    //document.write("Buzz ");
                    row =row+ "Buzz ";
                else
                    //document.write(i + " ");
                    row = row + (i).toString()  + " ";
    }
    document.getElementById("fizzyp").innerHTML = row;
}
function buttonmail()
{
    if(expression1==true)
    {
        expression1=false;
        document.getElementById("gmail1").innerHTML = "mateitiberiu1995@gmail.com";
    }
    else
    {
        expression1=true;
        document.getElementById("gmail1").innerHTML = "";
    }
}
function buttontelephone()
{
    if(expression2==true)
    {
        expression2=false;
        document.getElementById("telephone1").innerHTML = "07378291267";
    }
    else
    {
        expression2=true;
        document.getElementById("telephone1").innerHTML = "";
    }
}
