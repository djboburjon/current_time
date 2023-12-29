let hIndex = document.querySelector(".hIndex")
let mIndex = document.querySelector(".mIndex") 
let sIndex = document.querySelector(".sIndex") 


setInterval(() => {
  var date = new Date()
  var hours  = date.getHours()
  var minutes  = date.getMinutes()
  var seconds  = date.getSeconds()
  
  hours < 10 ? hIndex.textContent = `0${hours}` : hIndex.textContent = hours
  minutes < 10 ? mIndex.textContent = `0${minutes}` : mIndex.textContent = minutes
  seconds < 10 ? sIndex.textContent = `0${seconds}` : sIndex.textContent = seconds
  
}, 1000);
