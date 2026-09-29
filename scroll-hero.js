(function () {
  var hero = document.getElementById("scrollHero");
  if (!hero) return;

  var header = hero.querySelector("[data-header]");
  var card = hero.querySelector("[data-card]");
  var mobileQuery = window.matchMedia("(max-width: 768px)");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var ticking = false;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function update() {
    ticking = false;

    var rect = hero.getBoundingClientRect();
    var vh = window.innerHeight;

    // 0 = section viewport ke neeche se aa rahi hai, 1 = upar se nikal gayi
    var p = (vh - rect.top) / (vh + rect.height);
    p = Math.min(1, Math.max(0, p));
    if (reduceMotion.matches) p = 1;

    var scale = mobileQuery.matches ? lerp(0.7, 0.9, p) : lerp(1.05, 1, p);
    var rotate = lerp(20, 0, p);
    var translate = lerp(0, -100, p);

    card.style.transform = "rotateX(" + rotate + "deg) scale(" + scale + ")";
    header.style.transform = "translateY(" + translate + "px)";
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", requestUpdate);
  }

  update();
})();
