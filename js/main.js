const photo1src = 'url("./img/photo1.png")';
const photo2src = 'url("./img/photo2.png")';
const photo3src = 'url("./img/photo3.png")';
const photo4src = 'url("./img/photo4.png")';
const photo5src = 'url("./img/photo5.png")';

function nextImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == photo1src) {
    // 今1枚め
    header.style.backgroundImage = photo2src;
  } else if (nowBg == photo2src) {
    // 今2枚め
    header.style.backgroundImage = photo3src;
  } else if (nowBg == photo3src) {
    // 今3枚め
    header.style.backgroundImage = photo4src;
  } else if (nowBg == photo4src) {
    // 今4枚め
    header.style.backgroundImage = photo5src;
  } else if (nowBg == photo5src) {
    // 今5枚め
    header.style.backgroundImage = photo1src;
  }
}

function prevImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == photo1src) {
    // 今1枚め TODO:
    header.style.backgroundImage = photo5src;
  } else if (nowBg == photo2src) {
    // 今2枚め TODO:
    header.style.backgroundImage = photo1src;
  } else if (nowBg == photo3src) {
    // 今3枚め TODO:
    header.style.backgroundImage = photo2src;
  } else if (nowBg == photo4src) {
    // 今4枚め TODO:
    header.style.backgroundImage = photo3src;
  } else if (nowBg == photo5src) {
    // 今5枚め TODO:
    header.style.backgroundImage = photo4src;
  } 
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = photo1src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);

// タイマーセット
setInterval(nextImage, 5000);

$('h1').mouseover(function() {
 
  $(this).text('ようこそ');
 
});
$(function() {
 
  //マウスを乗せたら発動
  $('nav').hover(function() {
 
    //マウスを乗せたら色が変わる
    $(this).css('background', '#c00');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //色指定を空欄にすれば元の色に戻る
    $(this).css('background', '');
 
  });
});