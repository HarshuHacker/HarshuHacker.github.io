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
      if(result.includes('.'))
      {
        
          result=parseFloat(result)
          result=result.toFixed(2)
          if(result.length>8)
          {
            display.innerText = ("Exceeded")
          }
          else
          {
            display.innerText = result;
          }
      }
      else
      {
        if(result.length>8)
        {
          display.innerText = ("Exceeded")
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
