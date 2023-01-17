function check(){
    if(window.scrollY>100){
      document.querySelector('nav').classList.remove('transparent');
    }else{
      document.querySelector('nav').classList.add('transparent');
    }
}

document.querySelector('.toggler').addEventListener("click", function() {
  document.querySelector('nav').classList.toggle('openednav');
});
window.onscroll = function (e) {
  check();
};
check();