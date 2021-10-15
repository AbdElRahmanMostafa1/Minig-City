// Increase video speed 
document.querySelector('video').playbackRate = 15;
// End video speed
const arrow = document.getElementById("arrowStartBox");

arrow.addEventListener('click', () => {
  document.querySelector('.arrow-start-box-wrapper').classList.toggle('left-right-toggle')
})

// Start Night Mode 
  const ball = document.querySelector(".cursor");
  const ballWrapper = document.querySelector(".slider");

  ball.addEventListener('click', ()=> {
    ball.classList.toggle('move');
    ballWrapper.classList.toggle("black");
    document.body.classList.toggle('dark-theme');
  })
// End Night Mode 

