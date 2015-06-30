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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-319088-18', 'auto');
ga('send', 'pageview');
