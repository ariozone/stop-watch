var button = document.getElementById('func')
var time = document.getElementById('timer')
var counter = parseInt(time.textContent, 10)
var intervalId
button.addEventListener('click', function(){
 if (counter === 0) {
  intervalId = setInterval(update, 1000)
}
else {clearInterval(intervalId)}})
  function update() {
      counter += 1
      time.textContent = counter
  }
