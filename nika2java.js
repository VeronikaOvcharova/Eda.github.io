var Arr = new Array(4);

for(var i=0;i<Arr.lenght;i++)
{
    Arr[i]=0;
}

function isButton() {
    var button=document.getElementById("but1");
    if(button.innerHTML == "+")
    {
        button.innerHTML="V";
        button.style.backgroundColor = "green";
        Arr[0]=1;
    }
    else
    {
        button.innerHTML="+";
        button.style.backgroundColor = "orange";
        Arr[0]=0;
    }
}

function isButton2() {
    var button=document.getElementById("but2");
    if(button.innerHTML == "+")
    {
        button.innerHTML="V";
        button.style.backgroundColor = "green";
        Arr[1]=1;
    }
    else
    {
        button.innerHTML="+";
        button.style.backgroundColor = "orange";
        Arr[1]=0;
    }
}

function isButton3() {
    var button=document.getElementById("but3");
    if(button.innerHTML == "+")
    {
        button.innerHTML="V";
        button.style.backgroundColor = "green";
        Arr[2]=1;
    }
    else
    {
        button.innerHTML="+";
        button.style.backgroundColor = "orange";
        Arr[2]=0;
    }
}

function isButton4() {
    var button=document.getElementById("but4");
    if(button.innerHTML == "+")
    {
        button.innerHTML="V";
        button.style.backgroundColor = "green";
        Arr[3]=1;
    }
    else
    {
        button.innerHTML="+";
        button.style.backgroundColor = "orange";
        Arr[3]=0;
    }
}

var z=0;
var hl = document.getElementById("hl");

function isHll()
{
    z=0;
    for(i=0;i<Arr.length;i++){
    if(Arr[i] == 1)
        z++;
    else
        continue;
}
    alert(z);

}






