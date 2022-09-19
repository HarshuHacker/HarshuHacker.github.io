var scrolls=document.getElementsByClassName("scroll-class")
var smallNav = document.getElementById("small-nav-logo")
var smallNavOptions = document.getElementsByClassName("nav-menu-block")
var smallNavAllOptions = document.querySelectorAll(".nav-menu-block li")
var navOpen = false

smallNav.addEventListener("click", function() {
  if(navOpen == true)
  {
    smallNavOptions[0].style.display = "none";
    navOpen = false
  }
  else
  {
    smallNavOptions[0].style.display = "block";
    navOpen = true
  }
})

for (let i of smallNavAllOptions)
{
  i.addEventListener("click", function(){
    smallNavOptions[0].style.display = "none";
    navOpen = false
    console.log(i)
  })
}

// for (var i=0;i<scrolls.length;i++)
// {
//   console.log(scrolls[i])
//   scrolls[i].addEventListener("click",mainFunction)
// }

for (var i of scrolls)
{
  i.addEventListener("click",mainFunction)
}

currPos=window.pageYOffset
absection=document.getElementById("about-section")
sksection=document.getElementById("skill-section")
exsection=document.getElementById("experience-section")
edsection=document.getElementById("education-section")
posection=document.getElementById("portfolio-section")
cosection=document.getElementById("contact-section")
backsection=document.getElementById("body-header")

function mainFunction(event)
{
  currPos=window.pageYOffset
  event.preventDefault()
  var value=this.getAttribute("data-value")
  var scrollInterval=setInterval(function(){

    if(value=="ab")
    {
      var coordinates=absection.getBoundingClientRect()
      var movement="down"
    }
    else if(value=="sk")
    {
      var coordinates=sksection.getBoundingClientRect()
      var movement="down"
    }
    else if(value=="ex")
    {
      var coordinates=exsection.getBoundingClientRect()
      var movement="down"
    }
    else if(value=="ed")
    {
      var coordinates=edsection.getBoundingClientRect()
      var movement="down"
    }
    else if(value=="po")
    {
      var coordinates=posection.getBoundingClientRect()
      var movement="down"
    }
    else if(value=="co")
    {
      var coordinates=cosection.getBoundingClientRect()
      var movement="down"
    }
    else if(value=="back")
    {
      var coordinates=backsection.getBoundingClientRect()
      var movement="up"
    }

    if(movement=="down")
    {
      if(coordinates.top<=0)
      {
        clearInterval(scrollInterval);
        console.log(currPos)
        console.log(coordinates.top)
        return
      }
      window.scrollBy(0,10)
    }
    else if(movement=="up")
    {
      if(window.pageYOffset<=1)
      {
        clearInterval(scrollInterval);
        console.log(currPos)
        console.log(coordinates.top)
        movement="down"
        return
      }
      console.log(window.pageYOffset)
      window.scrollBy(0,-20)
    }
  },2);
}


progressBars=document.querySelectorAll(".skill-progress > div")

function initializeBars(bar)
{
  bar.setAttribute("data-visited",false)
  bar.style.width=0;
}

for (var bar of progressBars)
{
  initializeBars(bar)
}

function fillBars(bar)
{
  var targetWidth=bar.getAttribute("data-bar-width")
  var currWidth=0
  var interval=setInterval(function(){
    if(currWidth>=targetWidth)
    {
      clearInterval(interval)
      return
    }
    currWidth+=0.3
    bar.style.width=currWidth+"%";
  },1)
}

function scrollFunction()
{
  for (let bar of progressBars) 
  {
    var barCoordinates = bar.getBoundingClientRect();
    if ((bar.getAttribute("data-visited") == "false")&&(barCoordinates.top <= (window.innerHeight - barCoordinates.height))) 
    {
      bar.setAttribute("data-visited", true);
      fillBars(bar);
    } 
    else if (barCoordinates.top > window.innerHeight) 
    {
      bar.setAttribute("data-visited", false);
      initializeBars(bar);
    }
  }
}

window.addEventListener("scroll",scrollFunction)