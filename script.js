

function z1()
{
    alert("Hello world");
}

function z2()
{
    document.getElementsByName("input1")[0].disabled = false;
}

function z3()
{
    var x = document.getElementById("z3Input").value;

    document.getElementById("z3Label").textContent = "Ответ: " + x;
}

function z4()
{
    var x = document.getElementById("z4Input").value;
    alert(Number(x)*Number(x));
}

function z5()
{
    var x1 = document.getElementById("z5Input1").value;
    var x2 = document.getElementById("z5Input2").value;

    document.getElementById("z5Input1").value = x2;
    document.getElementById("z5Input2").value = x1;
}

function z6()
{

    document.getElementById("z6").textContent = "Hello";
}

function z7()
{
    document.getElementById("z7Input").setAttribute("style","color: blue");

}

function z81()
{
    document.getElementById("z8Input").disabled = true;
}
function z82()
{
    document.getElementById("z8Input").disabled = false;
}

function z9()
{
    alert("Хватит двигать табуретки");
}


function z10()
{
    alert("Хватит двигать табуретки");
}

function z11()
{
    alert("Хватит двигать табуретки");
}

function z12()
{
    
    var str = document.getElementById("img12").src;
    var temp = "";
    for(var i = 0 ; i<5;i++)
    {
        temp+=str[str.length-5+i];
    }
    if(temp == "1.png")
    {
        document.getElementById("img12").src="./2.png";
    }
    else{
        document.getElementById("img12").src="./1.png";
    }
}

function z13(temp)
{
    alert(temp);
}

function z14(input)
{
    input.setAttribute("style","color: blue");
}

function z15(temp)
{
    temp.disabled = true;
}


var CountClicks = 0;
function z16()
{
    CountClicks++;
    document.getElementById("z16Input").value = CountClicks;
}

function z17()
{
 
    document.body.style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
}

function z18()
{
    document.getElementById("hide").style.display = "none";
}


function z19(temp)
{
    temp.style.display = "none";
}



function z20()
{
    var value = document.getElementById("z20Input").value;
    var start = 0;
    var result = [];
    var index = 0;
    var whatdo = "";
    while(start !=value.length)
    {
        if(value[start]>='0' &&  value[start] <='9')
        {
            result[index] = value[start];
        }
        else{
                index++;
                whatdo += value[start];
            }
            start++;
        }
    
    
        var res = Number(result[0]);

        for(var i = 0;i<whatdo.length;i++)
        {
        
            if(whatdo[i] == "+")
            {
                res += Number(result[i+1]);
            }
            
            if(whatdo[i] == "-")
            {
                res -= Number(result[i+1]);
            }
            
            if(whatdo[i] == "*")
            {
                res *= Number(result[i+1]);
            }

        }

    
    document.getElementById("z20Input").value = res;
    
}


