(function(){
var imgs = [
  ["images/p-icons.svg","Icons from my previous portfolio site - Sketch"],
  //["images/three-icons.svg","Icons from my previous portfolio site - Illustrator"],
  //["images/miwayagi.svg","Header logo from my previous portfolio site - Illustrator"],
  ["images/p-fortune.jpg","Shameless self promotion! - Photoshop"],
  ["images/p-fortune2.jpg","Shameless self promotion! - Photoshop"],
  ["images/p-lg_email1.jpg","Mockup for an email campaign for my client - Photoshop"],
  ["images/p-lg_email2.jpg","Mockup for an email campaign for my client - Photoshop"],
  ["images/p-lg_flash1.jpg","Flash animation start button but I can't find the animation itself... - Flash"],
  ["images/p-lg_flash2.jpg","Flash animation start button but I can't find the animation itself... - Flash"],
  ["images/p-lg_ill1.jpg","Illustrator"],
  ["images/p-lg_ill2.jpg","Illustrator"],
  ["images/p-lg_ill3.jpg","Illustrator"],
  ["images/p-lg_web1.jpg","Mockup for my client's website - Photoshop"],
  ["images/p-lg_web2.jpg","Mockup for my client's website - Photoshop"],
  //["images/lg_web3.jpg","Mockup for my client's website - Photoshop"],
  ["images/p-lg_web4.jpg","Mockup for my client's website - Photoshop"]
];

var d = document;
var container = d.querySelector('.image-container');
var fragment = d.createDocumentFragment();

imgs.forEach(function(imgDescription, index, originalArray) {
    var img = d.createElement('img');
    var div = d.createElement('div');
    var p = d.createElement('p');
    var description = d.createTextNode(imgDescription[1]);
    img.src = imgDescription[0];
    p.appendChild(description);
    div.style.backgroundImage = 'url(' + img.src + ')';
    div.appendChild(p);
    fragment.appendChild(div);
});

container.appendChild(fragment);
})();
