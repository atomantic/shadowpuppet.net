(function(){

  if ("ontouchstart" in document.documentElement) { 
      document.querySelector(".hint").innerHTML = "Tap on the left or right to navigate";
  }
  bespoke.plugins.backgroundElement = function(deck) {
    var el = document.createElement('div');
    el.className = 'background';
    deck.parent.appendChild(el);
  };

  bespoke.from('article', {
	backgroundElement: true,
	bullets: 'li, .bullet',
	keys: true,
	touch: true,
	scale: true,
	hash: true,
	progress: true,
	state: true
  });

  (function preloadBackgroundImages() {

    var matches, image,
      forEach = function(arrayLike, fn) {
        [].slice.call(arrayLike, 0).forEach(fn);
      };

    forEach(document.styleSheets, function(sheet) {
      forEach(sheet.rules, function(rule) {
        if (rule.style && rule.style.backgroundImage) {
          matches = rule.style.backgroundImage.match(/url\((.*)\)/);
          if (matches) {
            image = new Image();
            image.src = matches[1];
          }
        }
      });
    });

  }());

}());