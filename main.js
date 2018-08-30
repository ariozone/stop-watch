var button = document.getElementById('func')
var time = document.getElementById('timer')
//var counter = parseInt(time.textContent, 10)
func.addEventListener('click', function () {
  var intervalId = setInterval(functon () {
    time.textContent += 1
    //time.textContent = counter
   }, 1000)
