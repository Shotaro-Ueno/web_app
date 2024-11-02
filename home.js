window.addEventListener('DOMContentLoaded',function(){
  const welcomes = document.querySelectorAll('.welcome-text');
  welcomes.forEach(function(welcome,index){
    setTimeout(() => {
      welcome.classList.add('is-active');
    },index*1600)
  });
});