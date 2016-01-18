(function(){
  var d = document;
  // contact page bubbles
  function bubble(){
    var bubbleWrapper = d.querySelector('.bubble-wrapper');
    var randomNumber;
    var i = 0;
    var span;
    

    for (; i < 50; i++) {
      span = d.createElement('span');
      randomNumber = (Math.floor(Math.random() * 100));
      span.classList.add('bubble');
      span.setAttribute('aria-hidden', 'true');
      span.style.height = randomNumber + "px";
      span.style.width = randomNumber + "px";
      var contact = d.createTextNode('contact');
      span.appendChild(contact);
      bubbleWrapper.appendChild(span);
    }
  }
  bubble();

  // display navigation menu
  var body = d.querySelector('body');
  d.querySelector('.menu').addEventListener('click', function(){
    if(body.classList.contains('nav-hide')){
      body.classList.remove('nav-hide');
      body.classList.add('nav-show');
    } else if(body.className.indexOf('nav') < 0 || body.classList.contains('nav-show')) {
      body.classList.remove('nav-show');
      body.classList.add('nav-hide');
    }
  });

  var mainNavList = d.querySelector('.main-nav-list');
  var navLink = mainNavList.querySelectorAll('a');
  [].forEach.call(navLink, function(el){
    el.addEventListener('click', function(){
      var dataLink = this.getAttribute('data-link');
      body.className = '';
      body.classList.add(dataLink, 'nav-hide');
    });
  });
  //headers
  d.querySelector('.headers').addEventListener('click', function(){
    body.className = '';
    body.classList.add('index', 'nav-show');
  });


})();


