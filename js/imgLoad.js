function imgLoad(imgSrcs, callback) {
  var progress = 0;
  // imgSrcs.length = 20;
  var done = false;
  imgSrcs.forEach(function(v, i) {
    var img = new Image();
    img.src = v;
    var timr = setInterval(function() {
      if (img.complete) {
        clearInterval(timr);
        progress += 1;
        var progreVal = Math.ceil((progress / imgSrcs.length) * 100);
        $(".percents").animate(
          {
            count: progreVal
          },
          {
            duration: 70,
            step: function(cur) {
              if (isNaN(cur)) {
                this.count = 0;
                return;
              }
              if (done) return;
              var numberTxt = Math.ceil(cur);

              if (numberTxt >= 100) {
                numberTxt = 100;
                done = true;
                callback();
              }
              $(".percents").text(numberTxt + "%");
              $(".progress-bar").css("width", numberTxt + "%");
            }
          }
        );
        return;
      }
    }, 100);
  });
}
let num=24;
let arr=[];
for(var d=1;d<=23;d++){
  arr.push("./img/page3/"+d+".jpg")
}
imgLoad(arr, function() {
  $(".load_page").css('display','none')
  var mySwiper = new Swiper(".swiper-container", {
    // direction:'vertical',
    autoHeight: true,
    on: {
      slideChangeTransitionStart: function(){
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: '.swiper-button-prev',
    },
  });
});