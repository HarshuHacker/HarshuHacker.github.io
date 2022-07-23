var main = document.querySelector("main")
var toggleButton = document.getElementById("toggle-mode")
var lightMode = document.getElementById("light-mode")
var darkMode = document.getElementById("dark-mode")
var buttons = document.getElementsByClassName("buttons")
var screen = document.getElementById("screen")
var functionalButtons = document.getElementsByClassName("functional")
var acButton = document.getElementById("button-AC")
var equalButton = document.getElementById("button-equal")
var time = "night"

// toggle controller

toggleButton.addEventListener("click", function () {
  if(time == "day")
  {
    time = "night"
    main.style.color = "white"
    lightMode.style.display = "block"
    darkMode.style.display = "none"
    Array.from(buttons).forEach(element => {
      element.style.backgroundColor = "rgb(35, 35, 38)"
    });
    Array.from(functionalButtons).forEach(element => {
      element.style.backgroundColor = "rgb(91, 133, 222)"
    });
    acButton.style.backgroundColor = "rgb(222, 91, 91)"
    equalButton.style.backgroundColor = "rgb(91 222 153)"
    main.style.backgroundColor = "rgb(28, 26, 31)"
    screen.style.backgroundColor = "rgb(48, 50, 61)"
  }
  else
  {
    time = "day"
    main.style.color = "black"
    darkMode.style.display = "block"
    lightMode.style.display = "none"
    Array.from(buttons).forEach(element => {
      console.log(element)
      element.style.backgroundColor = "rgb(220, 220, 220)"
    });
    Array.from(functionalButtons).forEach(element => {
      element.style.backgroundColor = "rgb(91, 133, 222)"
    });
    acButton.style.backgroundColor = "rgb(222, 91, 91)"
    equalButton.style.backgroundColor = "rgb(91 222 153)"
    main.style.backgroundColor = "rgb(171, 171, 171)"
    screen.style.backgroundColor = "rgb(240, 240, 240)"
  }
})

// calculator logic

var result = document.getElementById("result")
var historyDisplay = document.getElementById("history")
var value1 = ""
var value2 = ""
var operator = ""
var equal = false
Array.from(buttons).forEach(element => {
  element.addEventListener("click", function() {
    var value = this.getAttribute("data-value")
    if(value == "/")
    {
      if (result.innerText == "") value1 = 0
      else
      {
        if(value1 != "" && equal == false) value1 = parseFloat(eval(value1 + operator + result.innerText))
        else value1 = parseFloat(result.innerText)
      }
      equal = false
      operator = value
      sign = "<i class='fa-solid fa-divide'></i>"
      result.innerText = ""
    }
    else if(value == "ac")
    {
      result.innerText = "0"
      value1 = ""
      value2 = ""
      operator = ""
      historyDisplay.innerHTML = ""
    }
    else if(value == "*")
    {
      if (result.innerText == "") value1 = 0
      else
      {
        if(value1 != "" && equal == false) 
        {
          value1 = parseFloat(eval(value1 + operator + result.innerText))
          console.log(value1)
        }
        else value1 = parseFloat(result.innerText)
      }
      equal = false
      operator = value
      sign = "<i class='fa-solid fa-xmark'></i>"
      result.innerText = ""
    }
    else if(value == "back")
    {
      result.innerText = parseInt(result.innerText / 10)
    }
    else if(value == "-")
    {
      if (result.innerText == "") value1 = 0
      else
      {
        if(value1 != "" && equal == false) value1 = parseFloat(eval(value1 + operator + result.innerText))
        else value1 = parseFloat(result.innerText)
      }
      equal = false
      console.log(value1)
      operator = value
      sign = '<i class="fa-solid fa-minus"></i>'
      result.innerText = ""
    }
    else if(value == "%")
    {
      console.log(value1, result.innerText, operator)
      if (result.innerText == "") value1 = 0
      else
      {
        if(value1 != "" && equal == false) value1 = parseFloat(eval(value1 + operator + result.innerText)) / 100
        else value1 = parseFloat(result.innerText / 100) 
      }
      equal = false
      operator = "*"
      sign = '<i class="fa-solid fa-percent"></i>'
      result.innerText = ""
    }
    else if(value == "+")
    {
      if (result.innerText == "") value1 = 0
      else
      {
        if(value1 != "" && equal == false) value1 = parseFloat(eval(result.innerText + operator + value1))
        else value1 = parseFloat(result.innerText)
      }
      console.log(value1)
      equal = false
      operator = value
      sign = '<i class="fa-solid fa-plus"></i>'
      result.innerText = ""
    }
    else if(value == "=")
    {
      if (result.innerText == "") value2 = 0
      else value2 = parseFloat(result.innerText)
      num = Math.round(eval(value1 + operator + value2)* 100000000) / 100000000
      result.innerText = num
      value1 = parseFloat(result.innerText)
      equal = true
      value2 = ""
      operator = ""
    }
    else if(value == ".")
    {
      result.innerText += "."
    }
    else
    {
      if(equal == true)
      {
        result.innerText = ""
        value1 = ""
        value2 = ""
        operator = ""
        equal = false
      }
      result.innerText = parseFloat(result.innerText + value)
      if(value1 == "")
      {
        historyDisplay.innerHTML = result.innerText
      }
      else
      {
        if(sign == '<i class="fa-solid fa-percent"></i>')historyDisplay.innerHTML = value1 * 100 + " " + sign + " " + result.innerText
        else historyDisplay.innerHTML = value1 + " " + sign + " " + result.innerText
      }
    }
  })
});