(function(){
  var d = document;
  // contact page bubbles
  function bubble(){
    var bubbleWrapper = document.querySelector('.bubble-wrapper');
    var randomNumber;
    var i = 0;
    var span;
    

    for (; i < 50; i++) {
      span = d.createElement('span');
      randomNumber = (Math.floor(Math.random() * 100));
      span.classList.add('bubble');
      span.style.height = randomNumber + "px";
      span.style.width = randomNumber + "px";
      var contact = d.createTextNode('contact');
      span.appendChild(contact);
      bubbleWrapper.appendChild(span);
    }
  }
  bubble();

  // display navigation menu
  d.querySelector('.menu').addEventListener('click', function(){
    this.nextElementSibling.classList.toggle('flex');
  });
  var mainNavList = d.querySelector('.main-nav-list');
  var navLink = mainNavList.querySelectorAll('a');
  var body = d.querySelector('body');
  [].forEach.call(navLink, function(el){
    el.addEventListener('click', function(){
      var dataLink = this.getAttribute('data-link');
      body.className = '';
      body.classList.add(dataLink);
      body.className += " expand";
      mainNavList.classList.remove('flex');
    });
  });
  //headers
  d.querySelector('.headers').addEventListener('click', function(){
    body.className = '';
    body.classList.add('index');
  });


})();


