document.addEventListener('DOMContentLoaded', function() {
  var hero = document.querySelector('.hero');
  hero.addEventListener('click', jump, false);
  window.addEventListener('keydown', function(k) {
    switch (k.keyCode) {
      case 38: // up
      case 87: // w
        jump();
        break;
      case 37:
        var pos = hero.getBoundingClientRect().left;
        hero.style.left = (pos - 10) + 'px';
        break;
      case 39:
        var pos = hero.getBoundingClientRect().left;
        hero.style.left = (pos + 10) + 'px';
        break;
      default:
    }
  }, false);

  function jump() {
    hero.classList.add('hero__jumping');
    setTimeout(function () {
      hero.classList.remove('hero__jumping');
    }, 500);
  };

  var surprise = new Konami(function() { alert('You know the Konami code! You must be pretty old ;)')});
}, false);


// Konami Code implementation by: http://code.snaptortoise.com/konami-js/
var Konami = function(callback) {
  var konami = {
    addEvent: function(obj, type, fn, ref_obj) {
      obj.addEventListener(type, fn, false);
    },
    input: '',
    pattern: '38384040373937396665',
    load: function() {
      this.addEvent(document, "keydown", function (e, ref_obj) {
				konami.input += e ? e.keyCode : event.keyCode;
				if (konami.input.length > konami.pattern.length) {
          konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
        }
				if (konami.input === konami.pattern) {
          konami.code();
					konami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
    }
  };

  typeof callback === "string" && konami.load(callback);
	if (typeof callback === "function") {
		konami.code = callback;
		konami.load();
	}

	return konami;
}
