window.addEventListener('DOMContentLoaded',function(){
  const homes = document.querySelectorAll('.home');
  homes.forEach(function(home,index){
    setTimeout(() => {
      home.classList.add('is-active');
    },index*1600)
  });
});


setTimeout(secondact,2000);
function secondact(){
  const welcomes = document.querySelectorAll('.welcome-text');
  welcomes.forEach(function(welcome,index){
    setTimeout(() => {
      welcome.classList.add('second-active');
    },index*0)
  });
};