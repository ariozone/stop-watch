var button = document.getElementById('func')
var time = document.getElementById('timer')
var counter = parseInt(time.textContent, 10)

button.addEventListener('click', function(){
  var intervalId = setInterval(update, 1000)
})
function update() {
  counter += 1
  time.textContent = counter

}
