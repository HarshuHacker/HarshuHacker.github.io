var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var op1 = null;
var op2 = null;
var operator = null;

function isOperator(value)
{
  return value=="+"||value=="-"||value=="*"||value=="/"
}

for (var i=0;i<buttons.length;i++)
{
  buttons[i].addEventListener("click",mainFunction)
}

function mainFunction()
{
  var value=this.getAttribute("data-value")

  if(isOperator(value))
  {
    operator=value
    op1=display.innerText
    display.innerText=""
  }

  else if (value == "ac") 
  {
      display.innerText = "";
  } 

  else if (value == "del") 
  {
    num = parseFloat(display.innerText);
    numStr=num.toString()
    if(numStr.length==1)
    {
      display.innerText=("")
    }
    else
    {
      rem=num%10
      op1=(num-rem)/10
      display.innerText=(op1)
    }

  } 

  else if (value == ".") 
  {
    if (!display.innerText.includes('.')) 
    {
      if(display.innerText.length==0)
      {
        display.innerText = display.innerText + '0.';
      }
      else
      {
        display.innerText = display.innerText + '.';
      }
    }
  } 
  else if (value == "%") 
  {
      op1 = parseFloat(display.innerText);
      op1 = op1 / 100;
      display.innerText = op1
  } 

  else if (value == "=") 
  {
    op2 = parseFloat(display.innerText);
    var result = eval(op1 + operator + op2);

    if (result) 
    {
      result=result.toString()
      if(result.length>8)
      {
        display.innerText = ("Exceeded")
      }
      else
      {
        if(result.includes('.'))
        {
          result=parseFloat(result)
          display.innerText = result.toFixed(5);
        }
        else
        {
          result=parseFloat(result)
          display.innerText = result;
        }
      }
      op1 = result;
      op2 = null;
      op3 = null;
    }
  }
  
  else 
  {
    currStr=display.innerText.toString()
    if(currStr.length<=7)
    {
      display.innerText += value;
    }
  }

}




























// var displayscreen=document.getElementById("display")

// var op1=null
// var op2=null
// var oper=null



// var ac=document.getElementById("sign-ac")

// ac.addEventListener("click",clear)

// function clear()
// {
//   displayscreen.innerText=("0")
// }

// var delet=document.getElementById("sign-del")

// delet.addEventListener("click",del)

// function del()
// {
//   num=displayscreen.innerText
//   rem=(displayscreen.innerText)%10
//   displayscreen.innerText=((num-rem)/10)
// }


// var percentage=document.getElementById("operator-per")
// percentage.addEventListener("click",per)

// function per()
// {
//   op1=displayscreen.innerText
//   op1=op1/100
//   oper='*'
//   displayscreen.innerText=("")
// }


// var plus=document.getElementById("operator-add")
// plus.addEventListener("click",add)

// function add()
// {
//   op1=displayscreen.innerText
//   oper='+'
//   displayscreen.innerText=("")
// }

// var minus=document.getElementById("operator-sub")
// minus.addEventListener("click",sub)

// function sub()
// {
//   op1=displayscreen.innerText
//   oper='-'
//   displayscreen.innerText=("")
// }


// var pro=document.getElementById("operator-mul")
// pro.addEventListener("click",mul)

// function mul()
// {
//   op1=displayscreen.innerText
//   oper='*'
//   displayscreen.innerText=("")
// }


// var divide=document.getElementById("operator-div")
// divide.addEventListener("click",div)

// function div()
// {
//   op1=displayscreen.innerText
//   oper='/'
//   displayscreen.innerText=("")
// }

// var equalto=document.getElementById("operator-equal")
// equalto.addEventListener("click",equaltoo)

// function equaltoo()
// {
//   op2=displayscreen.innerText
//   displayscreen.innerText=eval(op1+oper+op2).toFixed(2)
// }


// var num1=document.getElementById("number-1")

// num1.addEventListener("click",add1)

// function add1() 
// {
//   num=displayscreen.innerText
//   num=num*10+1
//   displayscreen.innerText=(num)
// }



// var num2=document.getElementById("number-2")

// num2.addEventListener("click",add2)

// function add2() 
// {
//   num=displayscreen.innerText
//   num=num*10+2
//   displayscreen.innerText=(num)
// }




// var num3=document.getElementById("number-3")

// num3.addEventListener("click",add3)

// function add3() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("3")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+3
//     displayscreen.innerText=(num)
//   }
// }



// var num4=document.getElementById("number-4")

// num4.addEventListener("click",add4)

// function add4() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("4")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+4
//     displayscreen.innerText=(num)
//   }
// }



// var num5=document.getElementById("number-5")

// num5.addEventListener("click",add5)

// function add5() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("5")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+5
//     displayscreen.innerText=(num)
//   }
// }


// var num6=document.getElementById("number-6")

// num6.addEventListener("click",add6)

// function add6() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("6")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+6
//     displayscreen.innerText=(num)
//   }
// }




// var num7=document.getElementById("number-7")

// num7.addEventListener("click",add7)

// function add7() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("7")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+7
//     displayscreen.innerText=(num)
//   }
// }



// var num8=document.getElementById("number-8")

// num8.addEventListener("click",add8)

// function add8() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("8")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+8
//     displayscreen.innerText=(num)
//   }
// }




// var num9=document.getElementById("number-9")

// num9.addEventListener("click",add9)

// function add9() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("9")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+9
//     displayscreen.innerText=(num)
//   }
// }



// var num0=document.getElementById("number-0")

// num0.addEventListener("click",add0)

// function add0() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=("0")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num*10+0
//     displayscreen.innerText=(num)
//   }
// }



// var signdot=document.getElementById("sign-dot")

// signdot.addEventListener("click",adddot)

// function adddot() 
// {
//   if(displayscreen.innerText==("0"))
//   {
//     displayscreen.innerText=(".")
//   }
//   else
//   {
//     num=displayscreen.innerText
//     num=num+"."
//     displayscreen.innerText=(num)
//   }
// }

