let hIndex = document.querySelector(".hIndex")
let mIndex = document.querySelector(".mIndex") 
let sIndex = document.querySelector(".sIndex") 
let body = document.querySelector("body")


var month = new Date().getMonth()

if(month == 11 || month <= 1) {
  body.style.backgroundImage = "url('../gifs/winter.gif')"
}else if(month < 1 || month <= 4) {
  body.style.backgroundImage = "url('../gifs/spring.gif')"
}else if(month < 4 || month <= 7) {
  body.style.backgroundImage = "url('../gifs/summer.gif')"
}else if(month < 7 || month <= 10) {
  body.style.backgroundImage = "url('../gifs/autumn.gif')"
}else{
  body.style.backgroundImage = "url('../gifs/world.gif')"
}
setInterval(() => {
  var date = new Date()
  var hours  = date.getHours()
  var minutes  = date.getMinutes()
  var seconds  = date.getSeconds()
  
  hours < 10 ? hIndex.textContent = `0${hours}` : hIndex.textContent = hours
  minutes < 10 ? mIndex.textContent = `0${minutes}` : mIndex.textContent = minutes
  seconds < 10 ? sIndex.textContent = `0${seconds}` : sIndex.textContent = seconds
  
}, 1000);
