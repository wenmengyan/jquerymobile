$(function () {
  $('.box1').animate({
    top: '+=80',
    borderRadius: '50'
  }, 'slow')
  $('.box1').animate({
    top: '-=80',
    borderRadius: '0'
  }, 'normal')
  $('.box2').animate({
    left: '-=80',
    borderRadius: '50'
  }, 'slow').animate({
    left: '+=80',
    borderRadius: '0'
  }, 'normal')
  $('.box3').animate({
    borderRadius: '50',
    top: '-=80'
  }, 'slow').animate({
    borderRadius: '0',
    top: '+=80'
  }, 'normal')
  $('.box4').animate({
    left: '+=80',
    borderRadius: '50'
  }, 'slow').animate({
    left: '-=80',
    borderRadius: '0'
  }, 'normal')
});
/* $(function () {
$('#box1').click(function () {
  var $this = $(this);
  $this.animate({ left: '+=50' }, 'slow');
  $this.animate({ top: '+=50' }, 'slow');
  $this.queue('fx', function () {
    $(this)
      .css({ backgroundColor: '#999' })
      .dequeue('fx');
  });
  $this.animate({ left: '+=50' }, 'slow');
  $this.animate({ top: '+=50' }, 'slow');
})


        }); */