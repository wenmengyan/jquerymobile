$(document).ready(function () {
  $('#touch_test').bind('touchmove', function (e) { e.preventDefault() })
  listen_to('#touch_test')
  function listen_to(el) {
    $(el).tap(function () {
      console.log('|tap!')
    })
  }
});