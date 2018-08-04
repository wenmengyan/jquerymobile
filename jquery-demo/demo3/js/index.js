/* rem响应式布局公式 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {//屏幕宽度
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();
})(document, window);


$(document).ready(function () {
  $("#main").fullpage({
    sectionsColor: ["#fff", "#2b333b", "#1bbc9b", "#b01e2b"],
    verticalCentered: false,
    continuousVertical: true,
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
    navigation: true,
    afterLoad: function (onchorLink, index) {
      if (index == 1) {
        $('.section1').find('h2').fadeIn();
        $('.section1').find('.p1').delay(500).fadeIn();
        $('.section1').find('.p2').delay(1000).fadeIn();
        $('.section1').find('.div1').delay(1500).fadeIn();
        $('.section1').find('.div2').delay(2000).fadeIn();
        $('.section1').find('.div3').delay(2500).fadeIn();
      }
      else if (index == 2) {
        $('.section2').find('h2').fadeIn();
        $('.section2').find('.p1').delay(500).fadeIn();
        $('.section2').find('.p2').delay(1000).fadeIn();
        $('.section2').find('.div1').delay(1500).fadeIn();
      }
      else if (index == 3) {
        $('.section3').find('h2').fadeIn();
        $('.section3').find('.p1').delay(500).fadeIn();
        $('.section3').find('.div1').delay(1000).fadeIn();
      }
      else if (index == 4) {
        $('.section4').find('.div1').fadeIn();
        $('.section4').find('h2').delay(500).fadeIn();
        $('.section4').find('.p1').delay(1000).fadeIn();
      }
    },
    onLeave: function (index, direction) {
      if (index == 1) {
        $('.section1').find('h2').fadeOut();
        $('.section1').find('.p1').fadeOut();
        $('.section1').find('.p2').fadeOut();
        $('.section1').find('.div1').fadeOut();
        $('.section1').find('.div2').fadeOut();
        $('.section1').find('.div3').fadeOut();
      }
      else if (index == 2) {
        $('.section2').find('h2').fadeOut();
        $('.section2').find('.p1').fadeOut();
        $('.section2').find('.p2').fadeOut();
        $('.section2').find('.div1').fadeOut();
      }
      else if (index == 3) {
        $('.section3').find('h2').fadeOut();
        $('.section3').find('.p1').fadeOut();
        $('.section3').find('.div1').fadeOut();
      }
      else if (index == 4) {
        $('.section4').find('.div1').fadeOut();
        $('.section4').find('h2').fadeOut();
        $('.section4').find('.p1').fadeOut();
      }
    }
  });
});
