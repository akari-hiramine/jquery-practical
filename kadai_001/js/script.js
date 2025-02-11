$(function(){
 // カルーセル設定
 $('.carousel').slick({
   autoplay: true,
   fade: true,
   dots: true,
   infinite: true,
   speed: 1500,
   arrows: false,
 });

 //  リンクホバー時アニメーション
 $('.link').on('mouseover',function(){
   $(this).animate({
     opacity: 0.5,
   }, 300);
 });

 $('.link').on('mouseout',function(){
  $(this).animate({
    opacity: 1.0,
  }, 300);
 });

 //  スクロールした時に「TOPに戻る」ボタンを表示
 $(window).on('scroll',function(){
  if($(this).scrollTop() >100){
    $('#topBtn').fadeIn();
  }else{
    $('#topBtn').fadeOut();
  }
 });

 //  ページ内リンクのスクロールをなめらかにする
 $('a[href^="#"]').on('click',function(e){
  e.preventDefault();
  var id = $(this).attr('href');
  var target = $(id).offset().top;
  $('html, body').animate({scrollTop: target}, 600);
 });

 //  スクロールしたときにセクションをフェードインさせる
 $(window).scroll(function() {
  $('.fade-in-target').each(function() {
    const imgPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > imgPos - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
 });

 //  Worksの画像をクリックしたときにモーダルで拡大表示する
 $('.works img').on('click',function(){
  const imgSrc = $(this).attr('src');
  const imgAlt = $(this).attr('alt');
  $('#imgModal').attr({
    src: imgSrc,
    alt: imgAlt,
  });
  $('#modal').fadeIn();
 });

 //  閉じるボタンをクリックした時にモーダルを閉じる
 $('#closeBtn').on('click',function(){
  $('#modal').fadeOut();
 });
});
